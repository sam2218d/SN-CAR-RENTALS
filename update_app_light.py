import re
import os

def html_to_jsx(html):
    # Convert attributes
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('<!--', '{/*')
    html = html.replace('-->', '*/}')
    
    # Close self-closing tags
    html = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', html)
    html = re.sub(r'<input(.*?)(?<!/)>', r'<input\1/>', html)
    html = re.sub(r'<hr(.*?)(?<!/)>', r'<hr\1/>', html)
    html = re.sub(r'<br(.*?)(?<!/)>', r'<br\1/>', html)
    
    return html

def main():
    with open('stitch_output_light.html', 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract body content to skip html, head, script
    body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
    if not body_match:
        print("Could not find body tag!")
        return
        
    content = body_match.group(1)
    jsx = html_to_jsx(content)
    
    # Wire up state and event handlers
    
    # Car Type
    jsx = re.sub(
        r'<select(.*?)>\s*<option>Luxury Sedan</option>\s*<option>Executive SUV</option>\s*<option>Convertible Coastal</option>\s*</select>',
        r'<select\1 value={carType} onChange={(e) => setCarType(e.target.value)}>\n'
        r'    <option value="sedan">Luxury Sedan</option>\n'
        r'    <option value="suv">Executive SUV</option>\n'
        r'</select>',
        jsx, flags=re.DOTALL
    )

    # AC Preference
    jsx = re.sub(
        r'<select(.*?)>\s*<option>AC \(Standard\)</option>\s*<option>Non-AC \(Eco\)</option>\s*</select>',
        r'<select\1 value={isAc ? "true" : "false"} onChange={(e) => setIsAc(e.target.value === "true")}>\n'
        r'    <option value="true">AC (Standard)</option>\n'
        r'    <option value="false">Non-AC (Eco)</option>\n'
        r'</select>',
        jsx, flags=re.DOTALL
    )

    # Package Type
    jsx = re.sub(
        r'<select(.*?)>\s*<option>Local Rental \(City\)</option>\s*<option>Outstation Trip</option>\s*<option>Pick &amp; Drop \(Airport\)</option>\s*</select>',
        r'<select\1 value={packageType} onChange={(e) => setPackageType(e.target.value)}>\n'
        r'    <option value="local">Local Rental (City)</option>\n'
        r'    <option value="outstation">Outstation Trip</option>\n'
        r'    <option value="airport">Pick & Drop (Airport)</option>\n'
        r'</select>',
        jsx, flags=re.DOTALL
    )

    # Night Charges
    jsx = re.sub(
        r'<select(.*?)>\s*<option>No Night Charges</option>\s*<option>Half Night</option>\s*<option>Full Night</option>\s*<option>Night \+ Next Day</option>\s*</select>',
        r'<select\1 value={nightCharge} onChange={(e) => setNightCharge(e.target.value)}>\n'
        r'    <option value="none">No Night Charges</option>\n'
        r'    <option value="half">Half Night</option>\n'
        r'    <option value="full">Full Night</option>\n'
        r'    <option value="next_day">Night + Next Day</option>\n'
        r'</select>',
        jsx, flags=re.DOTALL
    )

    # Duration input
    jsx = re.sub(
        r'<input(.*?)placeholder="0" type="number"/>',
        r'<input\1 value={hours} onChange={(e) => setHours(Number(e.target.value))} min="0" type="number"/>',
        jsx, count=1
    )

    # Distance input
    jsx = re.sub(
        r'<input(.*?)placeholder="0" type="number"/>',
        r'<input\1 value={km} onChange={(e) => setKm(Number(e.target.value))} min="0" type="number"/>',
        jsx, count=1
    )

    # Calculate Fare Button
    jsx = re.sub(
        r'<button(.*?)type="button"(.*?)>\s*Calculate Fare\s*</button>',
        r'<button\1type="button"\2 onClick={() => setShowResult(true)}>\n                                      Calculate Fare\n                                  </button>',
        jsx, flags=re.DOTALL
    )

    # Results Section Values
    jsx = re.sub(r'\$120\.00', r'₹{calculation.baseFare}', jsx)
    jsx = re.sub(r'\$15\.00', r'₹{calculation.extraHourCharge}', jsx)
    jsx = re.sub(r'\$0\.00', r'₹{calculation.extraKmCharge}', jsx)
    jsx = re.sub(r'\$135\.00', r'₹{calculation.finalTotal}', jsx)
    
    # Conditional rendering for results
    jsx = jsx.replace('{/* Results Summary */}', '{showResult && (\n<div className="animate-in fade-in slide-in-from-bottom-2 duration-500">\n{/* Results Summary */}')
    
    jsx = jsx.replace('Reserve Now\\n                        </button>', 'Reserve Now\\n                        </button>\\n</div>\\n)}')

    
    # Read existing App.tsx
    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        app_content = f.read()
        
    jsx = f"<div className=\"min-h-screen bg-surface font-body overflow-x-hidden\">\n{jsx}\n</div>"
        
    # Find components to keep
    parts = app_content.split('return (')
    if len(parts) < 2:
        print('Could not find return statement')
        return
        
    # Try to extract closing tags (might be different due to inner divs, so let's just use the top-level return)
    # The return block matches: return ( \n ... \n ); \n } \n export default App;
    head = parts[0]
    tail = "\n  );\n}\n\nexport default App;\n"
    
    new_app = head + "return (\n" + jsx + tail
    
    with open('src/App.tsx', 'w', encoding='utf-8') as f:
        f.write(new_app)
        
    print("Successfully replaced JSX content in App.tsx with Light Theme!")

if __name__ == '__main__':
    main()
