import fs from 'fs';
const html = fs.readFileSync('stitch_output_light.html', 'utf8');
const match = html.match(/tailwind\.config = (\{[\s\S]*?\})\s*</);
if (match) {
    const configStr = match[1];
    const func = new Function('return ' + configStr);
    const config = func();
    const colors = config.theme.extend.colors;
    const fonts = config.theme.extend.fontFamily;
    
    let css = `@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0');
@import "tailwindcss";

@theme {
`;
    for (const [key, value] of Object.entries(colors)) {
        css += `  --color-${key}: ${value};\n`;
    }
    for (const [key, value] of Object.entries(fonts)) {
        css += `  --font-${key}: ${value.map(v => v.includes(' ') ? "'" + v  + "'" : v).join(', ')};\n`;
    }
    
    css += `}

.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
.editorial-shadow {
    shadow-color: #164E63;
    box-shadow: 0 20px 40px -15px rgba(22, 78, 99, 0.06);
}
.text-shadow-subtle {
    text-shadow: 0 2px 4px rgba(0, 100, 124, 0.05);
}
`;
    fs.writeFileSync('src/index.css', css);
    console.log("Wrote tailwind v4 index.css successfully");
} else {
    console.error("Could not find tailwind config in HTML");
}
