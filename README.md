# WILDISH Restaurant — Brand Rebuild & Culinary Motion Experience

> **"So good. It gets Wild."**  
> An immersive, brand-aligned fine-dining web application built for **WILDISH by Wild Cookbook** (Chef Charith N. Silva) at **Capitol TwinPeaks, Colombo 02, Sri Lanka**.

---

## 🌟 Key Features

1. **Obsidian & Champagne Gold Luxury Aesthetic**: Multi-tonal dark dining atmosphere with Ceylon rainforest emerald auras and gold foil typography.
2. **Interactive Motion Graphics & Particle Engine**: HTML5 Canvas ember/steam particles, 3D mouse-tracking card tilt with specular glare, and magnetic interaction buttons.
3. **"Wild Fire & Spice" Interactive Sensory Flavor Radar**: Dynamic 5-point SVG Spider Graph mapping Kochchi spice, smoke, citrus tang, coconut richness, and aromatics with live pairing recommendations.
4. **High-Fidelity Dining Music Lounge**: 3-track Web Audio lounge player (*TwinPeaks Jazz*, *Ceylon Sunset Acoustic*, *Colombo Chillhop*) with animated live soundwave equalizer.
5. **Complete 70+ Item Menu Explorer**: Categorized across 19 sections with instant search, dietary tags (*Veg*, *Spicy*, *Chef Signature*, *Seafood*), and interactive dish modal inspector.
6. **VIP Table Reservation & Digital Boarding Pass**: Real-time date/meal window selector (Lunch & Dinner) generating printable/savable dining pass tickets.
7. **Capitol TwinPeaks Concierge & Socials**: Dark-mode interactive map locator, 1-click Google Maps launcher, and floating VIP WhatsApp concierge.

---

## 🚀 Quick Start

To preview locally:
```bash
# Clone the repository
git clone https://github.com/damithde/wildish-restaurant.git
cd wildish-restaurant

# Launch local preview server
python3 -m http.server 8088
```

Open your browser at `http://localhost:8088`.

---

## 📁 Project Structure

```
wildish-rebuild/
├── index.html              # Main interactive single-page experience
├── menu.html               # Dedicated full menu discovery page
├── css/
│   ├── main.css            # Multi-tonal palette, typography & layout tokens
│   ├── components.css      # UI components, flavor radar, soundscape dock, cards
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

## 👨‍🍳 Credits & Heritage
- **Chef & Founder**: Charith N. Silva (Wild Cookbook, 10.8M+ YouTube Subscribers)
- **Location**: Ground Floor, Capitol Twin Peaks, 24 Staple Street, Colombo 02, Sri Lanka
