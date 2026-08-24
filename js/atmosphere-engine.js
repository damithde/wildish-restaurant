/**
 * Wildish Photorealistic Culinary Thermal Steam Engine
 * Spawns organic billowing culinary vapor directly from the food surface on hover.
 */

class CulinaryAtmosphereEngine {
  constructor() {
    this.activeCanvases = new Map();
    this.init();
  }

  init() {
    this.attachToCards();
    window.addEventListener('resize', () => {
      this.activeCanvases.forEach((state, canvas) => {
        if (canvas.parentElement) {
          canvas.width = canvas.parentElement.offsetWidth || 340;
          canvas.height = canvas.parentElement.offsetHeight || 220;
        }
      });
    });
  }

  attachToCards() {
    const cards = document.querySelectorAll('.dish-card, .signature-card, .modal-img-container, #modal-dish-img-wrap, .dish-img-wrap, .signature-img-wrap');
    
    cards.forEach(card => {
      // Find image wrapper
      const imgWrap = card.classList.contains('dish-img-wrap') || card.classList.contains('signature-img-wrap') 
        ? card 
        : (card.querySelector('.dish-img-wrap') || card.querySelector('.signature-img-wrap') || card);
      
      if (!imgWrap || imgWrap.querySelector('.dish-fluid-canvas')) return;

      // Determine Atmosphere Type
      let type = 'hot-steam';
      const titleEl = card.querySelector('.dish-title, .signature-title, #modal-dish-title') || card.parentElement.querySelector('.dish-title, .signature-title');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';

      if (title.includes('glacier') || title.includes('arctic') || title.includes('frozen') || title.includes('shake') || title.includes('mocktail') || title.includes('juice') || title.includes('tart') || title.includes('cheesecake') || title.includes('ice cream')) {
        type = 'chilled-frost';
      } else if (title.includes('grill') || title.includes('pizza') || title.includes('sizzle') || title.includes('steak') || title.includes('crispy') || title.includes('turf')) {
        type = 'fire-sizzle';
      }

      // Create Canvas Overlay
      const canvas = document.createElement('canvas');
      canvas.className = 'dish-fluid-canvas';
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '6';
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 0.45s ease';

      imgWrap.style.position = 'relative';
      imgWrap.appendChild(canvas);

      const state = {
        canvas,
        ctx: canvas.getContext('2d'),
        type,
        particles: [],
        animId: null,
        isHovered: false,
        imgWrap
      };

      this.activeCanvases.set(canvas, state);

      // Listeners for Hover
      const triggerEl = card.classList.contains('dish-card') || card.classList.contains('signature-card') ? card : imgWrap;
      
      triggerEl.addEventListener('mouseenter', () => this.startEffect(state));
      triggerEl.addEventListener('mouseleave', () => this.stopEffect(state));
      triggerEl.addEventListener('touchstart', () => this.startEffect(state), { passive: true });
      triggerEl.addEventListener('touchend', () => setTimeout(() => this.stopEffect(state), 2500), { passive: true });
    });
  }

  startEffect(state) {
    state.isHovered = true;
    state.canvas.style.opacity = '1';

    // Resize canvas precisely
    state.canvas.width = state.imgWrap.offsetWidth || 340;
    state.canvas.height = state.imgWrap.offsetHeight || 220;

    if (!state.animId) {
      this.loop(state);
    }
  }

  stopEffect(state) {
    state.isHovered = false;
    state.canvas.style.opacity = '0';
  }

  loop(state) {
    const ctx = state.ctx;
    const canvas = state.canvas;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'screen';

    // Spawn new steam/sizzle particles directly from food center
    if (state.isHovered) {
      if (state.type === 'hot-steam') {
        // Continuous organic billowing stream
        for (let i = 0; i < 2; i++) {
          if (Math.random() < 0.75) {
            state.particles.push(this.createSteamWisp(w, h));
          }
        }
      } else if (state.type === 'fire-sizzle') {
        if (Math.random() < 0.6) {
          state.particles.push(this.createSizzleSparks(w, h));
        }
        if (Math.random() < 0.5) {
          state.particles.push(this.createSteamWisp(w, h, 'sizzle'));
        }
      } else if (state.type === 'chilled-frost') {
        if (Math.random() < 0.6) {
          state.particles.push(this.createChilledMist(w, h));
        }
      }
    }

    // Update & Render Particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
      const p = state.particles[i];
      p.life++;

      if (state.type === 'hot-steam' || (state.type === 'fire-sizzle' && !p.isEmber)) {
        // Thermal upward buoyancy + natural vortex draft
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.life * p.curlSpeed + p.seed) * (p.life * 0.08);
        p.radius += p.expansion;
        p.rotation += p.rotSpeed;

        const progress = p.life / p.maxLife;
        // Smooth bell curve opacity (fade-in quickly, linger, dissolve smoothly)
        let alpha = 0;
        if (progress < 0.2) {
          alpha = (progress / 0.2) * p.baseAlpha;
        } else {
          alpha = (1 - (progress - 0.2) / 0.8) * p.baseAlpha;
        }

        if (p.life >= p.maxLife || alpha <= 0.005) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        // Warm culinary steam gradient
        grad.addColorStop(0, `rgba(255, 250, 240, ${alpha * 0.95})`);
        grad.addColorStop(0.25, `rgba(255, 242, 225, ${alpha * 0.7})`);
        grad.addColorStop(0.6, `rgba(255, 245, 235, ${alpha * 0.25})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

      } else if (state.type === 'fire-sizzle' && p.isEmber) {
        // Glowing ember spark rising off grill char
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.life * 0.1) * 0.5;
        const alpha = 1 - (p.life / p.maxLife);

        if (p.life >= p.maxLife) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${p.green}, 20, ${alpha})`;
        ctx.shadowColor = '#ff6600';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();

      } else if (state.type === 'chilled-frost') {
        // Cold mist falling and swirling around glass base
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.life * 0.04) * 0.4;
        p.radius += p.expansion;

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * p.baseAlpha;

        if (p.life >= p.maxLife) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(225, 248, 255, ${alpha * 0.85})`);
        grad.addColorStop(0.45, `rgba(190, 235, 255, ${alpha * 0.35})`);
        grad.addColorStop(1, 'rgba(200, 240, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    if (state.particles.length > 0 || state.isHovered) {
      state.animId = requestAnimationFrame(() => this.loop(state));
    } else {
      state.animId = null;
      ctx.clearRect(0, 0, w, h);
    }
  }

  createSteamWisp(w, h, subType = 'standard') {
    // Emitter origin: directly on the food surface in center of plate
    const foodCenterX = w * 0.5;
    const foodCenterY = h * 0.62; // Center of plate food mass

    return {
      x: foodCenterX + (Math.random() * w * 0.32 - w * 0.16),
      y: foodCenterY + (Math.random() * h * 0.18 - h * 0.09),
      radius: Math.random() * 8 + 6, // Starts small at the hot surface
      expansion: Math.random() * 0.55 + 0.45, // Expands as it rises into air
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() * -1.2) - 0.9, // Buoyant upward thermal draft
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      curlSpeed: Math.random() * 0.035 + 0.015,
      seed: Math.random() * 10,
      baseAlpha: subType === 'sizzle' ? 0.3 : (Math.random() * 0.28 + 0.28),
      life: 0,
      maxLife: Math.floor(Math.random() * 45 + 55)
    };
  }

  createSizzleSparks(w, h) {
    const foodCenterX = w * 0.5;
    const foodCenterY = h * 0.65;

    return {
      isEmber: true,
      x: foodCenterX + (Math.random() * w * 0.4 - w * 0.2),
      y: foodCenterY + (Math.random() * h * 0.15 - h * 0.05),
      radius: Math.random() * 2.2 + 1.2,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() * -2.2) - 1.2,
      green: Math.floor(Math.random() * 120 + 100),
      life: 0,
      maxLife: Math.floor(Math.random() * 25 + 30)
    };
  }

  createChilledMist(w, h) {
    const glassCenterX = w * 0.5;
    const glassRimY = h * 0.28;

    return {
      x: glassCenterX + (Math.random() * w * 0.35 - w * 0.175),
      y: glassRimY + (Math.random() * h * 0.1),
      radius: Math.random() * 10 + 8,
      expansion: Math.random() * 0.4 + 0.25,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() * 0.8) + 0.4, // Sinking cold air
      baseAlpha: Math.random() * 0.3 + 0.2,
      life: 0,
      maxLife: Math.floor(Math.random() * 35 + 45)
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.culinaryAtmosphere = new CulinaryAtmosphereEngine();
});
