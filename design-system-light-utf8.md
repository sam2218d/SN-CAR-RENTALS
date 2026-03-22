## Design System: SUVE

### Pattern
- **Name:** Minimal Single Column
- **Conversion Focus:** Single CTA focus. Large typography. Lots of whitespace. No nav clutter. Mobile-first.
- **CTA Placement:** Center, large CTA button
- **Color Strategy:** Minimalist: Brand + white #FFFFFF + accent. Buttons: High contrast 7:1+. Text: Black/Dark grey
- **Sections:** 1. Hero headline, 2. Short description, 3. Benefit bullets (3 max), 4. CTA, 5. Footer

### Style
- **Name:** 3D & Hyperrealism
- **Keywords:** Depth, realistic textures, 3D models, spatial navigation, tactile, skeuomorphic elements, rich detail, immersive
- **Best For:** Gaming, product showcase, immersive experiences, high-end e-commerce, architectural viz, VR/AR
- **Performance:** Γ¥î Poor | **Accessibility:** ΓÜá Not accessible

### Colors
| Role | Hex |
|------|-----|
| Primary | #0891B2 |
| Secondary | #22D3EE |
| CTA | #22C55E |
| Background | #ECFEFF |
| Text | #164E63 |

*Notes: Fresh cyan + clean green*

### Typography
- **Heading:** Cormorant
- **Body:** Montserrat
- **Mood:** luxury, high-end, fashion, elegant, refined, premium
- **Best For:** Fashion brands, luxury e-commerce, jewelry, high-end services
- **Google Fonts:** https://fonts.google.com/share?selection.family=Cormorant:wght@400;500;600;700|Montserrat:wght@300;400;500;600;700
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
```

### Key Effects
WebGL/Three.js 3D, realistic shadows (layers), physics lighting, parallax (3-5 layers), smooth 3D (300-400ms)

### Avoid (Anti-patterns)
- Static product pages
- Poor UX

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

