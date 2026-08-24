# WILDISH Restaurant — Brand Rebuild & Culinary Motion Experience

> **"So good. It gets Wild."**  
> An immersive, brand-aligned fine-dining web application built for **WILDISH by Wild Cookbook** (Chef Charith N. Silva) at **Capitol TwinPeaks, Colombo 02, Sri Lanka**.

---

## 🛠️ Technology Stack & Architecture

This project is built as a **zero-dependency, ultra-high-performance Vanilla Web Engine** engineered for 60fps animations, instant loading, complete SEO/AEO/GEO optimization, and universal device compatibility.

| Layer | Technologies & APIs | Purpose |
| :--- | :--- | :--- |
| **Core Architecture** | Semantic HTML5, CSS3 Custom Properties (Tokens), Vanilla Modern JavaScript (ES6+ Classes) | Clean, blazing-fast foundation without heavy framework overhead or build tool friction. |
| **Visual Design System** | Obsidian Multi-Tonal System, Glassmorphism, CSS Grid, Flexbox, `clamp()` fluid typography | Luxury dark dining ambiance with Ceylon rainforest emerald auras and champagne gold foil styling. |
| **Graphics & Physics** | HTML5 Canvas 2D Context, Interactive Touch & Mouse Physics, SVG Geometry Manipulation | Realistic floating embers/steam particle engine, 3D perspective card tilt with specular glare, and dynamic radar polygon morphing. |
| **Audio Engineering** | Web Audio API + HTML5 Audio Streaming (16-bit 44.1kHz Stereo PCM) | 3-track procedural & studio-grade dining lounge soundscape player with live 5-bar animated soundwave equalizer. |
| **State & Data Store** | In-memory Structured JSON Model (`menu-data.js`), Real-Time Search & Multi-Tag Filtering Engine | Instant sub-millisecond filtering across 70+ dishes and 19 menu categories. |
| **SEO, AEO & GEO** | Schema.org JSON-LD `@graph` (`Restaurant`, `Person`, `FAQPage`, `Menu`), Geo Tags, OpenGraph Protocol, Twitter Cards, `robots.txt`, `sitemap.xml` | Search Engine Optimization, Answer Engine Optimization (ChatGPT, Perplexity, Gemini, Claude, Applebot), and Geographic Local SEO. |

---

## 🌟 Key Features

1. **Obsidian & Champagne Gold Luxury Aesthetic**: Multi-tonal dark dining atmosphere with Ceylon rainforest emerald auras and gold foil typography.
2. **Interactive Motion Graphics & Particle Engine**: HTML5 Canvas ember/steam particles with mouse & touch tracking, 3D card tilt with specular reflection, and magnetic interaction buttons.
3. **"Wild Fire & Spice" Interactive Sensory Flavor Radar**: Dynamic 5-point SVG Spider Graph mapping Kochchi spice, smoke, citrus tang, coconut richness, and aromatics with sommelier pairing recommendations.
4. **High-Fidelity Dining Music Lounge**: 3-track Web Audio lounge player (*TwinPeaks Jazz*, *Ceylon Sunset Acoustic*, *Colombo Chillhop*) with animated live soundwave equalizer.
5. **Complete 70+ Item Menu Explorer**: Categorized across 19 sections with instant search, dietary tags (*Veg*, *Spicy*, *Chef Signature*, *Seafood*), and interactive dish modal inspector.
6. **VIP Table Reservation & Digital Boarding Pass**: Real-time date/meal window selector (Lunch & Dinner) generating printable/savable dining pass tickets.
7. **Capitol TwinPeaks Concierge & Socials**: Dark-mode interactive map locator, 1-click Google Maps launcher, and floating VIP WhatsApp concierge.

---

## 🚀 Quick Start & Local Preview

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/damithde/wildish-restaurant.git
cd wildish-restaurant

# Launch local preview server (using Python 3)
python3 -m http.server 8088
```

Open your browser at **`http://localhost:8088`**.

---

## 📁 Project Structure

```
wildish-rebuild/
├── index.html              # Main interactive single-page experience
├── menu.html               # Dedicated full menu discovery page
├── robots.txt              # Search & AI crawler directives (Google, Bing, GPTBot, Perplexity)
├── sitemap.xml             # XML Sitemap index
├── css/
│   ├── main.css            # Multi-tonal palette, typography & layout tokens
│   ├── components.css      # UI components, flavor radar, soundscape dock, cards, responsive media queries
│   └── animations.css      # Keyframes, soundwave equalizer & scroll reveals
├── js/
│   ├── app.js              # Application controller, flavor radar & menu explorer
│   ├── motion.js           # Particle canvas, 3D tilt & audio lounge engine
│   ├── menu-data.js        # Comprehensive 70+ dish database with LKR pricing
│   └── reservation.js      # Booking validation & digital boarding pass generator
└── assets/
    ├── audio/              # High-fidelity stereo lounge music tracks (.wav)
    ├── favicons/           # Complete favicon suite & web manifest
    └── images/             # Official vectors, chef photos & culinary imagery
```

---

## 🌐 Deployment

Because this project is built with clean static standards, it can be deployed instantly to any modern hosting platform:
- **GitHub Pages**: Go to Repo Settings ➔ Pages ➔ Select `main` branch ➔ Save.
- **Vercel / Netlify / Cloudflare Pages**: Connect repository for zero-config automatic deployments.

---

## 👨‍🍳 Credits & Heritage
- **Chef & Founder**: Charith N. Silva (Wild Cookbook, 10.8M+ YouTube Subscribers)
- **Location**: Ground Floor, Capitol Twin Peaks, 24 Staple Street, Colombo 02, Sri Lanka
