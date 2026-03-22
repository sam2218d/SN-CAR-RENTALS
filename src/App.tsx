import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams, Link } from 'react-router-dom';

import { CarType, PackageType, NightChargeType, PRICING, NIGHT_CHARGES, PICK_DROP_RATES } from './pricingConfig';

// ============================================================
// NAVBAR COMPONENT
// ============================================================
function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdf5eb]/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(50,46,40,0.04)]">
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-lg sm:text-2xl font-black tracking-tighter text-orange-600 font-headline">SN CAR RENTALs</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-orange-700 font-bold border-b-2 border-orange-500 pb-1 font-headline text-sm tracking-tight">Home</Link>
          <a className="text-slate-700 hover:text-orange-600 transition-colors font-headline text-sm font-medium tracking-tight cursor-pointer" href="#services">Services</a>
          <a className="text-slate-700 hover:text-orange-600 transition-colors font-headline text-sm font-medium tracking-tight cursor-pointer" href="#why-us">About</a>
          <a className="text-slate-700 hover:text-orange-600 transition-colors font-headline text-sm font-medium tracking-tight cursor-pointer" href="#fleet">Fleet</a>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/calculate')}
            className="bg-gradient-to-br from-[#994100] to-[#ff7a23] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm hover:scale-95 active:scale-90 transition-transform cursor-pointer"
          >
            Book Now
          </button>
          {/* Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#f8f0e5] cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[#994100]">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#efe7dc] px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-orange-700 font-bold font-headline text-base">Home</Link>
          <a href="#services" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-headline text-base font-medium cursor-pointer">Services</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-headline text-base font-medium cursor-pointer">About</a>
          <a href="#fleet" onClick={() => setMenuOpen(false)} className="block text-slate-700 font-headline text-base font-medium cursor-pointer">Fleet</a>
          <a href="tel:7003692464" className="flex items-center gap-2 text-[#994100] font-bold font-headline text-base cursor-pointer">
            <span className="material-symbols-outlined text-lg">call</span> Call: 7003692464
          </a>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// FOOTER COMPONENT
// ============================================================
function Footer() {
  return (
    <footer className="bg-[#1E293B] text-slate-300 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div>
            <div className="text-2xl font-bold text-white font-headline mb-4 md:mb-6">SN CAR RENTALs</div>
            <p className="text-slate-400 font-body leading-relaxed mb-4 md:mb-6">Redefining luxury travel and car rentals across the globe since 2024.</p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 md:mb-6 font-headline">Company</h5>
            <ul className="space-y-2 md:space-y-4 font-body text-sm">
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">About Us</a></li>
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">Our Fleet</a></li>
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 md:mb-6 font-headline">Services</h5>
            <ul className="space-y-2 md:space-y-4 font-body text-sm">
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">Local City Tours</a></li>
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">Airport Pickups</a></li>
              <li><a className="hover:text-orange-400 transition-colors cursor-pointer" href="#">Outstation Trips</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 md:mb-6 font-headline">Contact</h5>
            <ul className="space-y-2 md:space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-orange-400 text-lg">location_on</span>
                <span>Kolkata, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-400 text-lg">call</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-400 text-lg">mail</span>
                <span>hello@suvetravels.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2024 SN CAR RENTALs. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a className="hover:text-white transition-colors cursor-pointer" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors cursor-pointer" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
const TESTIMONIALS_ROW_1 = [
  { text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.", name: "Isabella Rodriguez", role: "CEO and Co-founder, ABC Company", image: "https://lh3.googleusercontent.com/aida-public/AEdV_t566w9E0u_K_2kKj_x2hB52701X6ZEx2q_rO0tG8Z_I80-T1lU3_gZ09N8j6B9K1J4F-V85L-7-C9X3lO04U8R-29C35N84W" },
  { text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.", name: "Gabrielle Williams", role: "Marketing Director, XYZ Corp", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQqA8Q1C62H7xJ3M0B6x2s9R_F4J2-U18B_l9-o_332U_M89E-7F8gI1G-Z_U5K10-53E_L3G0z_Z36E10V4P19M4gC1W_T" },
  { text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.", name: "Samantha Johnson", role: "Product Manager, TechFlow", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9E990u51kFzD9k2E05V0M6-4p4_9G1D42a8C9F-I6M99709M5l0uL0o9D1v0X2b0-9I3f8D8O890T1o6M3Y-9h_D9e2I9O9O" },
  { text: "A refreshing and imaginative team that consistently delivers exceptional results - highly recommended for any project.", name: "Victoria Thompson", role: "Founder, Startup Inc", image: "https://lh3.googleusercontent.com/aida-public/AEdV_t59G0_j6w6K2C1Y4D4lX76a5kF-K78B7J4jJ9vT_6v8gJ2_yO0P-8E1Q8Z3U9U1kY1U9f_1A6G_zH2V1_8S8A-1E2x1hR6X7" }
];

const TESTIMONIALS_ROW_2 = [
  { text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.", name: "Natalie Martinez", role: "Brand Manager, Globex", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQqA8Q1C62H7xJ3M0B6x2s9R_F4J2-U18B_l9-o_332U_M89E-7F8gI1G-Z_U5K10-53E_L3G0z_Z36E10V4P19M4gC1W_T" },
  { text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.", name: "John Peter", role: "VP of Sales, Initech", image: "https://lh3.googleusercontent.com/aida-public/AEdV_t566w9E0u_K_2kKj_x2hB52701X6ZEx2q_rO0tG8Z_I80-T1lU3_gZ09N8j6B9K1J4F-V85L-7-C9X3lO04U8R-29C35N84W" },
  { text: "Outstanding attention to detail and a passion for design that shines through in every single deliverable they create.", name: "Michael Chang", role: "Director, Innovate LLC", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9E990u51kFzD9k2E05V0M6-4p4_9G1D42a8C9F-I6M99709M5l0uL0o9D1v0X2b0-9I3f8D8O890T1o6M3Y-9h_D9e2I9O9O" },
  { text: "They transformed our entire digital presence with their visionary approach. Absolutely thrilled with the final outcome.", name: "Emma Davis", role: "CEO, Nexa IT", image: "https://lh3.googleusercontent.com/aida-public/AEdV_t59G0_j6w6K2C1Y4D4lX76a5kF-K78B7J4jJ9vT_6v8gJ2_yO0P-8E1Q8Z3U9U1kY1U9f_1A6G_zH2V1_8S8A-1E2x1hR6X7" }
];

const TestimonialCard = ({ text, name, role, image }: { key?: string | number; text: string; name: string; role: string; image: string }) => (
  <div className="bg-[#f8f0e5] rounded-3xl p-6 sm:p-8 w-[280px] sm:w-[420px] shrink-0 mx-2 sm:mx-4 border border-[#efe7dc] flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
    <div>
      <span className="material-symbols-outlined text-3xl sm:text-[40px] text-[#4f46e5] mb-2 sm:mb-4" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
      <p className="font-headline font-semibold text-[#322e28] text-sm sm:text-lg mb-4 sm:mb-8 leading-snug">
        {text}
      </p>
    </div>
    <div className="flex items-center gap-3 sm:gap-4 mt-2">
      <img src={image} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm" />
      <div>
        <h4 className="font-headline font-bold text-[#322e28] text-xs sm:text-sm">{name}</h4>
        <p className="text-[#7b766e] text-[9px] sm:text-xs tracking-wide">{role}</p>
      </div>
    </div>
  </div>
);

function HomePage() {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const handleBookNow = () => {
    const params = new URLSearchParams();
    if (pickup) params.set('pickup', pickup);
    if (pickupDate) params.set('date', pickupDate);
    if (pickupTime) params.set('time', pickupTime);
    navigate(`/calculate?${params.toString()}`);
  };
  
  return (
    <div className="min-h-screen bg-[#fdf5eb] font-body text-[#322e28]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 sm:pt-20 pb-12 overflow-hidden bg-gradient-to-b from-[#FFF7ED] to-[#FFF1E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#febb28] text-[#563b00] text-xs font-bold tracking-widest uppercase mb-6">Premium Travel Agency</span>
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#322e28] leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Your Journey <br/><span className="text-[#994100]">Begins Here</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5f5b53] max-w-lg mb-6 sm:mb-8 leading-relaxed font-body">
              Experience the ultimate comfort and freedom with our premium fleet. We curate memories, not just destinations.
            </p>

            {/* Booking Search Bar */}
            <div className="bg-white rounded-2xl md:rounded-full shadow-[0_20px_60px_-15px_rgba(50,46,40,0.15)] border border-[#efe7dc] max-w-3xl">
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Trip Route */}
                <div className="flex-[2] px-4 py-3 md:px-5 md:py-4 md:border-r border-b md:border-b-0 border-[#efe7dc] cursor-text">
                  <label className="block text-xs font-bold text-[#322e28] mb-0.5 font-headline">Trip Route</label>
                  <input
                    type="text"
                    placeholder="Pickup address to Drop off address..."
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-transparent text-xs text-[#7b766e] placeholder-[#b3aca3] outline-none font-body"
                  />
                </div>
                {/* Date */}
                <div className="px-4 py-3 md:px-5 md:py-4 md:border-r border-b md:border-b-0 border-[#efe7dc] cursor-text">
                  <label className="block text-xs font-bold text-[#322e28] mb-0.5 font-headline">Pick Up Date</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="bg-transparent text-xs text-[#7b766e] outline-none font-body w-[120px]"
                  />
                </div>
                {/* Time */}
                <div className="px-4 py-3 md:px-5 md:py-4 border-b md:border-b-0 border-[#efe7dc] cursor-text">
                  <label className="block text-xs font-bold text-[#322e28] mb-0.5 font-headline">Pick Up Time</label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="bg-transparent text-xs text-[#7b766e] outline-none font-body w-[90px]"
                  />
                </div>
                {/* Book Now */}
                <div className="p-2 flex items-center">
                  <button
                    onClick={handleBookNow}
                    className="bg-gradient-to-br from-[#d4a574] to-[#c49060] text-white w-full md:w-[80px] h-full min-h-[44px] md:min-h-[56px] py-1 md:py-0 rounded-xl md:rounded-2xl font-bold text-xs flex flex-row md:flex-col items-center justify-center gap-1.5 md:gap-1 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg md:text-xl">calendar_month</span>
                    <span className="text-[11px] md:text-[10px] font-bold tracking-wide">Book Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] transform rotate-2">
              <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" alt="Happy traveler" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJRUdMHP2vNBbBDwpE0kcRZacjCLCteuEWlcjzEZ9jcO616dXIgy4N8qr78EJd_3DTg0ApigFFaey33FMaiqGO24xuNn5LZiv2JwUd-lyOax9Es3sTwy7B3zVayiphY4TgWlu5zCm1xfWQT_zfXZOd85t2c2-67iIr_zycvd38ELlXzXRAYhRlfBEprwbiiiuKQW7-cqJd2_gIjKNaNadggAvJt1gsl7-OFA4Cqr-KHyvZLr3rPwnxhIMgMO_f_uO2Adwh613P-tM"/>
              {/* Floating Badge */}
              <div className="absolute top-4 sm:top-8 left-2 sm:-left-8 bg-white p-3 sm:p-6 rounded-xl sm:rounded-[2rem] shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] transform -rotate-6 flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                  <span className="material-symbols-outlined text-[#795500] text-sm">star</span>
                  <span className="material-symbols-outlined text-[#795500] text-sm">star</span>
                  <span className="material-symbols-outlined text-[#795500] text-sm">star</span>
                  <span className="material-symbols-outlined text-[#795500] text-sm">star</span>
                  <span className="material-symbols-outlined text-[#795500] text-sm">star</span>
                </div>
                <span className="font-bold text-[#322e28] text-[10px] sm:text-sm">100% Trusted</span>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-0 right-0 p-4">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({length: 9}).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#994100]/20"></div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ffc69f] rounded-full opacity-30 blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-12 sm:py-24 bg-[#fdf5eb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#994100]/20 animate-[spin_20s_linear_infinite]"></div>
              <img className="w-full h-full object-cover rounded-full p-4" alt="Scenic travel destination" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlWlHPmkR3Bt9ehZeln-SG9URKjJidLNtmxWAFrHN723Sp_conanWnB-_7CHeyhSWD-mOzqJQ1YahaQXEPwL80tjXG8BkPYbnQstj-shbriN_xzJ3Jx2rlbZJSGre3YBXokm4ERG4RCUJ1BlYCm-IekBeHXaUZFjWZMgueBL_2eNTGhcfzu3jH6mT-1E6BNZDw3cdcdSf25q4MLSJ0DPK7viFFWB3dzQx7DcP2Xqah08ZnrdlJs-kqBb41sp5T9vx6ZbzQAppjBBA"/>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#febb28] rounded-full flex items-center justify-center p-4 text-center">
                <p className="text-[10px] font-black uppercase text-[#563b00] leading-tight">Best Rated Travel Agency 2024</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[#994100] font-bold tracking-widest uppercase text-xs mb-4 block">Why Choose Us</span>
            <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#322e28] mb-6 sm:mb-8 leading-tight">
              Creating Memories <br/>You'll Want Revisit
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[#994100]">verified_user</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-1">Professional Drivers</h4>
                  <p className="text-[#5f5b53] font-body text-sm">Highly trained and verified chauffeurs for your absolute safety.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[#994100]">support_agent</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-1">24/7 Availability</h4>
                  <p className="text-[#5f5b53] font-body text-sm">Round-the-clock support and bookings whenever you need us.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[#994100]">payments</span>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-1">Transparent Pricing</h4>
                  <p className="text-[#5f5b53] font-body text-sm">No hidden costs. What you see is exactly what you pay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 sm:py-24 bg-[#f8f0e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <span className="text-[#994100] font-bold tracking-widest uppercase text-[10px] sm:text-xs">World Class Services</span>
            <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#322e28] mt-2">Which Services We Provide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Local City Tours */}
            <div className="bg-white p-5 sm:p-10 rounded-2xl sm:rounded-[2rem] shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eae1d5] rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <span className="material-symbols-outlined text-[#994100] text-2xl sm:text-3xl">map</span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2 sm:mb-4">Local city Visit</h3>
              <p className="text-[#5f5b53] text-xs sm:text-base font-body leading-relaxed">Tailored explorations within city limits, discovering hidden gems and iconic landmarks.</p>
            </div>
            {/* Outstation Trips (Orange) */}
            <div className="bg-gradient-to-br from-[#994100] to-[#ff7a23] p-5 sm:p-10 rounded-2xl sm:rounded-[2rem] shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] text-white hover:-translate-y-2 transition-transform transform md:scale-105">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <span className="material-symbols-outlined text-white text-2xl sm:text-3xl">distance</span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Outstation Round trip</h3>
              <p className="text-white/80 text-xs sm:text-base font-body leading-relaxed">Comfortable long-distance travel designed for weekend getaways and scenic road trips.</p>
            </div>
            {/* Airport Transfers */}
            <div className="bg-white p-5 sm:p-10 rounded-2xl sm:rounded-[2rem] shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] hover:-translate-y-2 transition-transform">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eae1d5] rounded-full flex items-center justify-center mb-4 sm:mb-8">
                <span className="material-symbols-outlined text-[#994100] text-2xl sm:text-3xl">flight_takeoff</span>
              </div>
              <h3 className="font-headline text-lg sm:text-xl font-bold mb-2 sm:mb-4">Airport & Railway station transfer</h3>
              <p className="text-[#5f5b53] text-xs sm:text-base font-body leading-relaxed">Reliable pick and drop services ensuring you reach your flight comfortably and on time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section id="fleet" className="py-12 sm:py-24 bg-[#fdf5eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#994100] font-bold tracking-widest uppercase text-xs">Our Luxury Collection</span>
              <h2 className="font-headline text-2xl sm:text-4xl font-extrabold text-[#322e28] mt-2">Choose Your Perfect Ride</h2>
            </div>
            <button onClick={() => navigate('/calculate')} className="text-[#994100] font-bold flex items-center gap-2 hover:underline cursor-pointer">
              View Entire Fleet <span className="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Executive Sedan */}
            <div className="bg-[#f8f0e5] rounded-[2rem] overflow-hidden transition-all hover:bg-white hover:shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Executive Sedan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBmMbz0Dliyn3-jegiF9-v_HdSuxLRCNR-v3FvOuHBLpsEvKX_StKHgLUiD5Vd7m5wnt59YxUaLhnhArs2ZpJ8F33CXvqoM5HJCI_aTzPc0i4ZlrvQYpfsBDlKl0ERfEYuBreFqm24oc85Dfp5qMvsesWNDv7mZPVappP_WKbksNFmef51_fFjT7ZwlHDFB36nMNEPG9-HDfZlpfE3cSCBaJD0IABEQUJ4SFIWaWrCj5hUdbHQS1PUiFs9maddXFBD-5nbjFk4e04"/>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-4">Executive Sedan</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">event_seat</span> 4 Seats</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">ac_unit</span> AC</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">luggage</span> 2 Bags</div>
                </div>
                <button onClick={() => navigate('/calculate')} className="inline-block text-[#994100] font-bold border-b border-[#994100]/20 pb-1 hover:border-[#994100] transition-colors cursor-pointer">Book Now</button>
              </div>
            </div>
            {/* Luxury SUV */}
            <div className="bg-[#f8f0e5] rounded-[2rem] overflow-hidden transition-all hover:bg-white hover:shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Luxury SUV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5YJcSaDhIRtqI_ZMqKMgGhUcp9XbMqT2TC1SWcCg68J9lH3PgG9WM-R3j5JRPY7giikC3MjYEl_nu5_20al8FxXRDiizwTUMdY7Qgu5UDHfmu-0DFeRasRmpQ46D7e-h2PF21FMTKcCgM2mTUtFPfnGHXy87raHuROHMllha2_5d84zk1q-qhmRLG7jatQPizPlx6SuFgnOZ1rqOs0ZBbnqKxDRZyGled63mLNcgeaaAdAm3dKOEMj3c99da5v8c3bkEWCFZx13w"/>
                <div className="absolute top-4 right-4 bg-[#febb28] text-[#563b00] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-4">Luxury SUV</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">event_seat</span> 7 Seats</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">ac_unit</span> AC</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">luggage</span> 4 Bags</div>
                </div>
                <button onClick={() => navigate('/calculate')} className="inline-block text-[#994100] font-bold border-b border-[#994100]/20 pb-1 hover:border-[#994100] transition-colors cursor-pointer">Book Now</button>
              </div>
            </div>
            {/* Premium Hatchback */}
            <div className="bg-[#f8f0e5] rounded-[2rem] overflow-hidden transition-all hover:bg-white hover:shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)] group">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Premium Hatchback" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAwiTqdkozgl7M_PzweVsk3TkeLN1xVmFEs7ByeAbaHx8TsHLgvSXXiG4KoB_CugyLGH2cd1s2H5OCG77MCfvNpIDfTXV1vmTZBznfpoXFoMVfK-MGV7tDvLW0yAS7uORtU1nfw70ihY-SwcfXM9NRIuIpkA6DsK4DaI7ZK5PWweFObSe3Sob1sR6ViNT6TC_fE2n3JHm5_p36OtnhkXuNpIq-IzDWAYtirVbZGs4DB53GuP9pldek3YizARVYha92AtErLTmZEIk"/>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-xl font-bold mb-4">Premium Hatchback</h3>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">event_seat</span> 4 Seats</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">ac_unit</span> AC</div>
                  <div className="flex items-center gap-1.5 text-[#5f5b53] text-sm"><span className="material-symbols-outlined text-lg">luggage</span> 1 Bag</div>
                </div>
                <button onClick={() => navigate('/calculate')} className="inline-block text-[#994100] font-bold border-b border-[#994100]/20 pb-1 hover:border-[#994100] transition-colors cursor-pointer">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="py-12 sm:py-32 bg-white overflow-hidden relative">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes slide-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-infinite-slide-left {
            animation: slide-left 40s linear infinite;
          }
          .animate-infinite-slide-right {
            animation: slide-right 40s linear infinite;
          }
          .animate-infinite-slide-left:hover, .animate-infinite-slide-right:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-16 text-center">
          <span className="text-[#ea6a88] sm:text-[#994100] font-bold tracking-[0.2em] font-headline uppercase text-[10px] sm:text-xs">Testimonials</span>
          <h2 className="font-headline text-2xl sm:text-5xl font-extrabold text-[#322e28] mt-2 sm:mt-4 mb-2 sm:mb-4 leading-tight">What People Think About Us</h2>
        </div>
        
        {/* Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-col gap-4 sm:gap-8 relative z-0">
          {/* Row 1 - Sliding Left */}
          <div className="flex w-max animate-infinite-slide-left">
            {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((t, i) => (
               <TestimonialCard key={i} text={t.text} name={t.name} role={t.role} image={t.image} />
            ))}
          </div>

          {/* Row 2 - Sliding Right */}
          <div className="flex w-max animate-infinite-slide-right">
            {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((t, i) => (
               <TestimonialCard key={i} text={t.text} name={t.name} role={t.role} image={t.image} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============================================================
// CALCULATE PAGE (Fare Calculator)
// ============================================================
function CalculatePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [carType, setCarType] = useState<CarType>('sedan');
  const [isAc, setIsAc] = useState(true);
  const [packageType, setPackageType] = useState<PackageType>('local');
  const [hours, setHours] = useState<string>('');
  const [km, setKm] = useState<string>('');
  const [nightCharge, setNightCharge] = useState<NightChargeType>('none');
  const [showResult, setShowResult] = useState(false);

  // Trip details from hero booking bar
  const tripPickup = searchParams.get('pickup') || '';
  const tripDate = searchParams.get('date') || '';
  const tripTime = searchParams.get('time') || '';

  const calculation = useMemo(() => {
    const numHours = parseFloat(hours) || 0;
    const numKm = parseFloat(km) || 0;
    
    if (numHours === 0 && numKm === 0) return null;

    const data = PRICING[carType];
    const isAcKey = isAc ? 'ac' : 'nonAc';
    
    let basePrice = 0;
    let extraHoursCharge = 0;
    let extraKmCharge = 0;
    let appliedPackage = null;
    let pricingMode = 'package';

    if (packageType === 'outstation') {
      pricingMode = 'per-km';
      basePrice = numKm * data.outstationKm[isAcKey];
    } else if (packageType === 'pick-drop') {
       pricingMode = 'pick-drop';
       basePrice = numKm * data.extraKmLocal[isAcKey];
    } else if (numKm > 200) {
      pricingMode = 'per-km';
      basePrice = numKm * data.extraKmLocal[isAcKey];
    } else {
      let bestCost = Infinity;
      
      for (const pkg of data.packages) {
        const pkgPrice = pkg[isAcKey];
        const eHours = Math.max(0, numHours - pkg.hours);
        const eKm = Math.max(0, numKm - pkg.km);
        
        const eHoursCost = eHours * data.extraHour[isAcKey];
        const eKmCost = eKm * data.extraKmLocal[isAcKey];
        
        const totalCost = pkgPrice + eHoursCost + eKmCost;
        
        if (totalCost < bestCost) {
          bestCost = totalCost;
          basePrice = pkgPrice;
          extraHoursCharge = eHoursCost;
          extraKmCharge = eKmCost;
          appliedPackage = pkg;
        }
      }
    }

    const nightChargeAmount = NIGHT_CHARGES[nightCharge];
    const totalExtra = extraHoursCharge + extraKmCharge + nightChargeAmount;
    const finalTotal = basePrice + totalExtra;

    return {
      basePrice,
      extraHoursCharge,
      extraKmCharge,
      nightChargeAmount,
      totalExtra,
      finalTotal,
      appliedPackage,
      pricingMode
    };
  }, [carType, isAc, hours, km, packageType, nightCharge]);

  return (
    <div className="min-h-screen bg-[#fdf5eb] font-body text-[#322e28]">
      <Navbar />
      
      <main className="pt-24 sm:pt-28 pb-12 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#994100] font-bold mb-4 sm:mb-8 hover:underline cursor-pointer text-sm sm:text-base">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </button>

          {/* Page Title */}
          <div className="mb-6 sm:mb-12">
            <span className="text-[#994100] font-bold tracking-widest uppercase text-xs">Fare Calculator</span>
            <h1 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#322e28] mt-1 sm:mt-2">Configure Your Journey</h1>
            <p className="text-[#5f5b53] mt-1 sm:mt-3 text-sm sm:text-lg">Fill in your trip details and get an instant fare estimate.</p>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] shadow-[0_40px_60px_-15px_rgba(50,46,40,0.06)]">
            {/* Package Type Selector - Always Visible */}
            <div className="mb-4 sm:mb-8">
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Package Type</label>
              <select 
                value={packageType} 
                onChange={(e) => { setPackageType(e.target.value as PackageType); setShowResult(false); }}
                className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100] cursor-pointer"
              >
                <option value="local">Local City Rental</option>
                <option value="outstation">Outstation Trip</option>
                <option value="pick-drop">Pick & Drop</option>
              </select>
            </div>

            {/* PICK & DROP: Fixed Pricing View */}
            {packageType === 'pick-drop' ? (
              <div>
                <h3 className="font-headline text-lg sm:text-2xl font-extrabold text-[#322e28] mb-1 sm:mb-2">Pick & Drop Fixed Rates</h3>
                <p className="text-[#5f5b53] text-xs sm:text-sm mb-4 sm:mb-8">Select your pickup/drop location and book directly.</p>

                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {PICK_DROP_RATES.map((rate) => (
                    <div key={rate.id} className="bg-[#f8f0e5] p-4 sm:p-6 rounded-2xl hover:bg-[#efe7dc] transition-colors group relative">
                      {rate.isPopular && (
                        <div className="absolute top-4 right-4 bg-[#febb28] text-[#563b00] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Popular</div>
                      )}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span className="material-symbols-outlined text-[#994100]">{rate.icon}</span>
                        </div>
                        <h4 className="font-headline font-bold text-lg">{rate.name}</h4>
                      </div>
                      <div className="flex gap-4 mb-5">
                        <div className="flex-1 bg-white p-3 rounded-xl text-center">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e] mb-1">Non-AC</div>
                          <div className="text-xl font-headline font-bold text-[#322e28]">₹{rate.nonAc.toLocaleString('en-IN')}</div>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-[#994100] to-[#ff7a23] p-3 rounded-xl text-center text-white">
                          <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">AC</div>
                          <div className="text-xl font-headline font-bold">₹{rate.ac.toLocaleString('en-IN')}</div>
                        </div>
                      </div>
                      <button onClick={() => window.open(`https://wa.me/917003692464?text=${encodeURIComponent(`Hi, I want to book a Pick & Drop to/from ${rate.name.replace(' & ', '/')}. Non-AC: ₹${rate.nonAc} / AC: ₹${rate.ac}`)}`, '_blank')} className="w-full bg-[#322e28] text-white py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#1E293B] transition-colors cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* LOCAL / OUTSTATION: Regular Calculator View */
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                  {/* Car Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Car Type</label>
                    <select 
                      value={carType} 
                      onChange={(e) => { setCarType(e.target.value as CarType); setShowResult(false); }}
                      className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100] cursor-pointer"
                    >
                      <option value="sedan">Executive Sedan</option>
                      <option value="suv">Luxury SUV</option>
                    </select>
                  </div>

                  {/* AC Preference */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Climate Control</label>
                    <select 
                      value={isAc ? 'true' : 'false'} 
                      onChange={(e) => { setIsAc(e.target.value === 'true'); setShowResult(false); }}
                      className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100] cursor-pointer"
                    >
                      <option value="true">AC (Standard)</option>
                      <option value="false">Non-AC (Eco)</option>
                    </select>
                  </div>

                  {/* Night Charges */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Overnight Stay</label>
                    <select 
                      value={nightCharge} 
                      onChange={(e) => { setNightCharge(e.target.value as NightChargeType); setShowResult(false); }}
                      className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100] cursor-pointer"
                    >
                      <option value="none">No Night Charges</option>
                      <option value="half">Half Night (₹250)</option>
                      <option value="full">Full Night (₹500)</option>
                      <option value="next-day">Night + Next Day (₹1000)</option>
                    </select>
                  </div>

                  {/* Hours */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Duration (Hours)</label>
                    <input 
                      type="number" 
                      value={hours} 
                      onChange={(e) => { setHours(e.target.value); setShowResult(false); }} 
                      min="0" 
                      placeholder="e.g. 8"
                      className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100]"
                    />
                  </div>

                  {/* Distance */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#7b766e] mb-2">Distance (KM)</label>
                    <input 
                      type="number" 
                      value={km} 
                      onChange={(e) => { setKm(e.target.value); setShowResult(false); }} 
                      min="0" 
                      placeholder="e.g. 80"
                      className="w-full bg-[#f8f0e5] border-0 rounded-xl py-3.5 px-4 font-body text-[#322e28] focus:ring-2 focus:ring-[#994100]"
                    />
                  </div>
                </div>

                {/* Calculate Button */}
                <button 
                  onClick={() => setShowResult(true)}
                  className="w-full mt-10 bg-gradient-to-br from-[#994100] to-[#ff7a23] text-white py-5 rounded-full font-bold text-lg uppercase tracking-widest shadow-lg shadow-orange-500/20 hover:scale-[1.01] active:scale-95 transition-transform cursor-pointer"
                >
                  Calculate Fare
                </button>

                {/* Results */}
                {showResult && calculation && (
                  <div className="mt-12 pt-10 border-t border-[#efe7dc]">
                    {/* Trip Details Banner (from hero booking bar) */}
                    {(tripPickup || tripDate || tripTime) && (
                      <div className="bg-gradient-to-r from-[#994100]/10 to-[#ff7a23]/10 border border-[#994100]/15 p-4 sm:p-6 rounded-2xl mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="material-symbols-outlined text-[#994100]">route</span>
                          <h3 className="font-headline font-bold text-[#322e28]">Your Trip Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                          {tripPickup && (
                            <div className="md:col-span-2 flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl">
                              <span className="material-symbols-outlined text-[#994100] text-base">pin_drop</span>
                              <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e]">Trip Route</div>
                                <div className="text-sm font-medium text-[#322e28] truncate max-w-[200px] sm:max-w-[400px]" title={tripPickup}>{tripPickup}</div>
                              </div>
                            </div>
                          )}
                          {tripDate && (
                            <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl">
                              <span className="material-symbols-outlined text-[#994100] text-base">calendar_today</span>
                              <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e]">Date</div>
                                <div className="text-sm font-medium text-[#322e28]">{tripDate}</div>
                              </div>
                            </div>
                          )}
                          {tripTime && (
                            <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl">
                              <span className="material-symbols-outlined text-[#994100] text-base">schedule</span>
                              <div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e]">Time</div>
                                <div className="text-sm font-medium text-[#322e28]">{tripTime}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <h3 className="font-headline text-2xl font-extrabold mb-8 text-[#322e28]">Your Fare Breakdown</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="bg-[#f8f0e5] p-5 rounded-2xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e] mb-1">Base Fare</div>
                        <div className="text-xl font-headline font-bold text-[#322e28]">₹{calculation.basePrice}</div>
                      </div>
                      <div className="bg-[#f8f0e5] p-5 rounded-2xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e] mb-1">Extra Hours</div>
                        <div className="text-xl font-headline font-bold text-[#322e28]">₹{calculation.extraHoursCharge}</div>
                      </div>
                      <div className="bg-[#f8f0e5] p-5 rounded-2xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#7b766e] mb-1">Extra KM</div>
                        <div className="text-xl font-headline font-bold text-[#322e28]">₹{calculation.extraKmCharge}</div>
                      </div>
                      <div className="bg-gradient-to-br from-[#994100] to-[#ff7a23] p-5 rounded-2xl text-white">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Total Fare</div>
                        <div className="text-2xl font-headline font-bold">₹{calculation.finalTotal}</div>
                      </div>
                    </div>
                    {calculation.nightChargeAmount > 0 && (
                      <div className="mt-4 bg-[#febb28]/20 text-[#563b00] p-4 rounded-2xl text-sm font-body">
                        Night charge included: ₹{calculation.nightChargeAmount}
                      </div>
                    )}
                    {calculation.appliedPackage && (
                      <div className="mt-4 text-[#5f5b53] text-sm font-body">
                        Best package applied: {calculation.appliedPackage.hours}h / {calculation.appliedPackage.km}km
                      </div>
                    )}
                    <button onClick={() => {
                      let msg = `Hi, I'd like to book a ${packageType === 'outstation' ? 'Outstation' : 'Local'} trip.`;
                      if (tripPickup) msg += `\nTrip Route: ${tripPickup}`;
                      if (tripDate) msg += `\nDate: ${tripDate}`;
                      if (tripTime) msg += `\nTime: ${tripTime}`;
                      msg += `\nCar: ${carType === 'sedan' ? 'Sedan' : 'SUV'} | AC: ${isAc ? 'Yes' : 'No'}`;
                      msg += `\nHours: ${hours} | KM: ${km}`;
                      msg += `\nTotal Fare: ₹${calculation.finalTotal}`;
                      window.open(`https://wa.me/917003692464?text=${encodeURIComponent(msg)}`, '_blank');
                    }} className="w-full mt-8 bg-[#322e28] text-white py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-[#1E293B] transition-colors cursor-pointer">
                      Reserve Now
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ============================================================
// APP (Router)
// ============================================================
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculate" element={<CalculatePage />} />
      </Routes>
    </BrowserRouter>
  );
}
