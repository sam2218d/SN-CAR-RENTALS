import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Split the content exactly before the `return (` statement inside the App component
top_half = content.split("return (")[0]

new_jsx = """return (
    <div className="antialiased bg-[#081425] text-white font-sans min-h-screen flex flex-col font-['Manrope']">
      {/* TopNavBar */}
      <nav className="bg-[#081425]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/5">
        <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-['Newsreader'] italic font-bold text-white cursor-pointer flex items-center gap-2" onClick={() => setShowResult(false)}>
             <Car className="w-6 h-6 text-[#dc2626]" /> THE MIDNIGHT CONCIERGE
          </div>
          <div className="hidden md:flex gap-12 items-center">
            <a className="font-['Newsreader'] uppercase tracking-widest text-sm text-[#dc2626] font-bold border-b-2 border-[#dc2626] pb-1 cursor-pointer">Fleet</a>
            <a className="font-['Newsreader'] uppercase tracking-widest text-sm text-white/70 hover:text-white transition-colors duration-300 hover:tracking-wider cursor-pointer">Experience</a>
            <a className="font-['Newsreader'] uppercase tracking-widest text-sm text-white/70 hover:text-white transition-colors duration-300 hover:tracking-wider cursor-pointer">Concierge</a>
            <a className="font-['Newsreader'] uppercase tracking-widest text-sm text-white/70 hover:text-white transition-colors duration-300 hover:tracking-wider cursor-pointer">Contact</a>
          </div>
          <button className="bg-[#dc2626] text-[#fff6f5] px-8 py-3 font-['Newsreader'] uppercase tracking-widest text-sm hover:tracking-widest transition-all duration-300 active:scale-95 cursor-pointer rounded">
            Book Now
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-end pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#081425]">
            <img alt="Luxury car front view" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1627454820516-dc7671ce9e1e?auto=format&fit=crop&q=80&w=2000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081425] via-[#081425]/70 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-[#ffb4ab] uppercase tracking-[0.3em] text-xs font-bold block mb-4">The Kinetic Collection</span>
              <h1 className="font-['Newsreader'] text-7xl md:text-8xl leading-[0.9] text-white italic mb-8">Elegance <br/>In Motion</h1>
              <p className="text-lg text-white/60 max-w-md leading-relaxed font-body">
                Curated performance. Unrivaled luxury. Experience the pinnacle of automotive engineering for your next journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12 px-8 bg-[#081425]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-[#dc2626] uppercase tracking-widest text-xs font-bold">Reservation Engine</span>
              <h2 className="font-['Newsreader'] text-5xl text-white mt-4">Secure Your Vessel</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* The Form */}
              <div className="lg:col-span-8 bg-[#111c2d] p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1f2a3c] mix-blend-lighten pointer-events-none rounded-full blur-[80px]"></div>
                <form className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Vehicle Class</label>
                    <select 
                      value={carType} 
                      onChange={(e) => setCarType(e.target.value)}
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all cursor-pointer outline-none"
                    >
                      <option value="sedan">Sedan (Executive)</option>
                      <option value="suv">SUV (Dominance)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Climate Control</label>
                    <select 
                      value={isAc ? 'ac' : 'non-ac'} 
                      onChange={(e) => setIsAc(e.target.value === 'ac')}
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all cursor-pointer outline-none"
                    >
                      <option value="ac">Full AC</option>
                      <option value="non-ac">Natural Ventilation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Journey Type</label>
                    <select 
                      value={packageType} 
                      onChange={(e) => setPackageType(e.target.value)}
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all cursor-pointer outline-none"
                    >
                      <option value="local">Local Rental (Intracity)</option>
                      <option value="outstation">Outstation Trip (Intercity)</option>
                      <option value="pick-drop">Pick & Drop (Airport/Station)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Shift Schedule</label>
                    <select 
                      value={nightCharge} 
                      onChange={(e) => setNightCharge(e.target.value)}
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all cursor-pointer outline-none"
                    >
                      <option value="none">No Night Charges</option>
                      <option value="half">Half Night (Until 1AM)</option>
                      <option value="full">Full Night (24h Overlap)</option>
                      <option value="next-day">Night + Next Day Premium</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Duration (Hours)</label>
                    <input 
                      type="number" min="0" 
                      value={hours} onChange={(e) => setHours(e.target.value)}
                      placeholder="e.g. 8"
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-tighter text-white/50 font-bold">Range (Kilometers)</label>
                    <input 
                      type="number" min="0" 
                      value={km} onChange={(e) => setKm(e.target.value)}
                      placeholder="e.g. 80"
                      className="w-full bg-[#040e1f] border border-white/10 rounded-lg text-white px-4 py-4 focus:ring-1 focus:ring-[#dc2626] transition-all outline-none"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button 
                      onClick={(e) => { e.preventDefault(); setShowResult(true); }}
                      className="w-full bg-gradient-to-r from-[#dc2626] to-[#b31414] text-[#fff6f5] py-5 font-['Newsreader'] rounded-lg text-2xl italic font-bold hover:tracking-widest transition-all duration-300 cursor-pointer shadow-lg shadow-[#dc2626]/20" 
                    >
                      Calculate Fare
                    </button>
                  </div>
                </form>
              </div>

              {/* Fare Result Card */}
              <div className="lg:col-span-4 bg-[#1f2a3c] p-10 rounded-2xl flex flex-col justify-between border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#dc2626] opacity-[0.06] rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="font-['Newsreader'] text-3xl text-white italic mb-8">Estimated Prestige</h3>
                  {showResult && calculation ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 font-['Manrope']">
                      {calculation.pricingMode === 'package' && calculation.appliedPackage && (
                        <div className="flex justify-between border-b border-white/5 pb-3">
                          <span className="text-white/40 text-sm">Base Package ({calculation.appliedPackage.hours}h / {calculation.appliedPackage.km}km)</span>
                          <span className="text-white font-bold">₹{calculation.basePrice}</span>
                        </div>
                      )}
                      {(calculation.pricingMode === 'per-km' || calculation.pricingMode === 'pick-drop') && (
                        <div className="flex justify-between border-b border-white/5 pb-3">
                          <span className="text-white/40 text-sm">{calculation.pricingMode === 'pick-drop' ? 'Pick & Drop Rate' : 'Per KM Rate'}</span>
                          <span className="text-white font-bold">₹{calculation.basePrice}</span>
                        </div>
                      )}
                      {calculation.extraHoursCharge > 0 && (
                        <div className="flex justify-between border-b border-white/5 pb-3">
                          <span className="text-[#ffb4ab] text-sm">Extra Hours Charge</span>
                          <span className="text-[#ffb4ab] font-bold">+ ₹{calculation.extraHoursCharge}</span>
                        </div>
                      )}
                      {calculation.extraKmCharge > 0 && (
                        <div className="flex justify-between border-b border-white/5 pb-3">
                          <span className="text-[#ffb4ab] text-sm">Extra KM Charge</span>
                          <span className="text-[#ffb4ab] font-bold">+ ₹{calculation.extraKmCharge}</span>
                        </div>
                      )}
                      {calculation.nightChargeAmount > 0 && (
                        <div className="flex justify-between border-b border-white/5 pb-3">
                          <span className="text-[#ffb4ab] text-sm">Night Surcharge</span>
                          <span className="text-[#ffb4ab] font-bold">+ ₹{calculation.nightChargeAmount}</span>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                     <div className="text-white/30 italic font-body">Please enter details and calculate fare.</div>
                  )}
                </div>
                <div className="mt-12 relative z-10">
                  <div className="flex justify-between items-end mb-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#ffb4ab] font-bold">Total Est.</span>
                    <span className="text-5xl font-['Newsreader'] italic text-white flex gap-2">
                      <span className="text-2xl text-white/50 mt-1">₹</span>
                      {showResult && calculation ? calculation.finalTotal : '0'}
                    </span>
                  </div>
                  <button className="w-full bg-white text-[#081425] rounded border border-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-transparent hover:text-white hover:border-white transition-all cursor-pointer">
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-24 px-8 bg-[#111c2d]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <span className="text-[#dc2626] uppercase tracking-[0.2em] text-xs font-bold">The Catalog</span>
                <h2 className="font-['Newsreader'] text-5xl md:text-6xl text-white mt-4 italic">Available Fleet</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FLEET.map((car) => (
                <div key={car.id} className="group cursor-pointer">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-[#040e1f] border border-white/5">
                    <img 
                      alt={car.name} 
                      className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100" 
                      src={car.image} 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute top-4 right-4 bg-[#dc2626] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#fff6f5] rounded">
                       ${car.price}/d
                    </div>
                  </div>
                  <h3 className="font-['Newsreader'] text-2xl text-white italic group-hover:text-[#ffb4ab] transition-colors">{car.name}</h3>
                  <div className="flex gap-4 mt-4 text-white/60">
                    <div className="bg-[#1f2a3c] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Settings2 className="w-3.5 h-3.5 text-[#ffb4ab]" />
                      <span className="text-[10px] uppercase font-bold text-[#b6b9bb]">{car.transmission}</span>
                    </div>
                    <div className="bg-[#1f2a3c] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#ffb4ab]" />
                      <span className="text-[10px] uppercase font-bold text-[#b6b9bb]">{car.passengers} Seats</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Callout */}
        <section className="py-32 bg-[#081425]">
          <div className="max-w-4xl mx-auto text-center px-8">
            <span className="text-[#dc2626] uppercase tracking-[0.4em] text-xs font-bold block mb-8">Beyond Transportation</span>
            <h2 className="font-['Newsreader'] text-5xl md:text-7xl text-white italic mb-12">The road is yours. <br/>We provide the vision.</h2>
            <div className="h-px w-24 bg-[#dc2626] mx-auto mb-12"></div>
            <p className="text-xl text-[#b6b9bb] leading-relaxed italic font-['Newsreader']">
              "Every journey with The Midnight Concierge is a testament to the pursuit of perfection. From the moment the keys touch your hand, the narrative of prestige begins."
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#081425] w-full py-16 border-t border-[#1f2a3c] mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <div className="font-['Newsreader'] text-xl text-white mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-[#dc2626]"/> THE MIDNIGHT CONCIERGE
            </div>
            <p className="text-[#b6b9bb] text-xs leading-relaxed font-body">
              Elevating your travel experience through curated automotive excellence and bespoke service levels.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-[#1f2a3c] pb-2 inline-block">Directory</h4>
            <ul className="space-y-3">
              <li><a className="text-xs tracking-tight text-[#b6b9bb] hover:text-[#dc2626] transition-colors cursor-pointer">Fleet Directory</a></li>
              <li><a className="text-xs tracking-tight text-[#b6b9bb] hover:text-[#dc2626] transition-colors cursor-pointer">Member Login</a></li>
              <li><a className="text-xs tracking-tight text-[#b6b9bb] hover:text-[#dc2626] transition-colors cursor-pointer">Experience Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-[#1f2a3c] pb-2 inline-block">Legal</h4>
            <ul className="space-y-3">
              <li><a className="text-xs tracking-tight text-[#b6b9bb] hover:text-[#dc2626] transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a className="text-xs tracking-tight text-[#b6b9bb] hover:text-[#dc2626] transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-[#1f2a3c] flex justify-between items-center">
          <div className="text-xs tracking-widest text-[#b6b9bb] uppercase font-bold">© 2026 THE MIDNIGHT CONCIERGE. PRESTIGE DEFINED.</div>
        </div>
      </footer>
    </div>
  );
}
"""

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(top_half + new_jsx)

print("Successfully replaced JSX content in App.tsx")
