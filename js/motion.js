/**
 * Wildish Interactive Motion Graphics, Particle Canvas & High-Fidelity Audio Lounge Engine
 */

class WildishSoundscapeEngine {
  constructor() {
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.volume = 0.85;
    this.isPlaying = false;
    this.currentTrackIndex = 0;

    this.tracks = [
      {
        title: 'TwinPeaks Jazz Lounge',
        subtitle: 'Rhodes Piano & Upright Bass',
        file: 'assets/audio/twinpeaks-lounge.wav'
      },
      {
        title: 'Ceylon Sunset Acoustic',
        subtitle: 'Fingerpicked Acoustic & Ocean Breeze',
        file: 'assets/audio/ceylon-acoustic.wav'
      },
      {
        title: 'Colombo Chillhop Beats',
        subtitle: 'Mellow Lofi Culinary Beats',
        file: 'assets/audio/colombo-chill-lofi.wav'
      }
    ];

    this.dock = document.getElementById('soundscape-dock');
    this.playBtn = document.getElementById('soundscape-play-btn');
    this.trackSwitchBtn = document.getElementById('soundscape-track-switch');
    this.titleEl = document.getElementById('soundscape-track-title');
    this.subtitleEl = document.getElementById('soundscape-track-sub');

    this.initEvents();
  }

  initEvents() {
    if (!this.playBtn) return;

    this.audio.src = this.tracks[this.currentTrackIndex].file;

    this.playBtn.addEventListener('click', () => this.togglePlayback());

    if (this.trackSwitchBtn) {
      this.trackSwitchBtn.addEventListener('click', () => this.nextTrack());
    }

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback notice:', e);
    });

    // Desktop Autoplay (Mobile remains manual)
    if (window.innerWidth >= 768) {
      const attemptAutoplay = () => {
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.isPlaying = true;
            if (this.dock) this.dock.classList.add('is-playing');
            if (this.playBtn) this.playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            if (this.titleEl) this.titleEl.textContent = this.tracks[this.currentTrackIndex].title;
            if (this.subtitleEl) this.subtitleEl.textContent = this.tracks[this.currentTrackIndex].subtitle;
          }).catch(() => {
            // If browser autoplay policy blocks unprompted audio, trigger on first desktop interaction
            const unlockOnFirstDesktopInteraction = () => {
              if (!this.isPlaying && window.innerWidth >= 768) {
                this.play();
              }
              window.removeEventListener('click', unlockOnFirstDesktopInteraction);
              window.removeEventListener('scroll', unlockOnFirstDesktopInteraction);
              window.removeEventListener('keydown', unlockOnFirstDesktopInteraction);
            };
            window.addEventListener('click', unlockOnFirstDesktopInteraction, { once: true });
            window.addEventListener('scroll', unlockOnFirstDesktopInteraction, { once: true });
            window.addEventListener('keydown', unlockOnFirstDesktopInteraction, { once: true });
          });
        }
      };

      // Slight delay to let page mount smoothly
      setTimeout(attemptAutoplay, 500);
    }
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    const track = this.tracks[this.currentTrackIndex];
    if (this.audio.src.indexOf(track.file) === -1) {
      this.audio.src = track.file;
    }

    this.audio.play().then(() => {
      this.isPlaying = true;
      if (this.dock) this.dock.classList.add('is-playing');
      if (this.playBtn) this.playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (this.titleEl) this.titleEl.textContent = track.title;
      if (this.subtitleEl) this.subtitleEl.textContent = track.subtitle;
    }).catch(err => {
      console.log('Audio autoplay prevented or waiting for interaction:', err);
    });
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    if (this.dock) this.dock.classList.remove('is-playing');
    if (this.playBtn) this.playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }

  nextTrack() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    const track = this.tracks[this.currentTrackIndex];
    this.audio.src = track.file;

    if (this.titleEl) this.titleEl.textContent = track.title;
    if (this.subtitleEl) this.subtitleEl.textContent = track.subtitle;

    if (this.isPlaying) {
      this.play();
    }
  }
}

class WildishMotionEngine {
  constructor() {
    this.canvas = document.getElementById('hero-particle-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.particleCount = window.innerWidth < 768 ? 32 : 65;
    this.mouse = { x: null, y: null, radius: 140, isHovering: false };
    this.animationFrameId = null;

    this.init();
  }

  init() {
    if (this.canvas) {
      this.resizeCanvas();
      window.addEventListener('resize', () => this.resizeCanvas());
      window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      window.addEventListener('mouseleave', () => this.handleMouseLeave());
      
      // Mobile touch support
      this.canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const rect = this.canvas.getBoundingClientRect();
          this.mouse.x = e.touches[0].clientX - rect.left;
          this.mouse.y = e.touches[0].clientY - rect.top;
          this.mouse.isHovering = true;
        }
      }, { passive: true });

      this.canvas.addEventListener('touchend', () => {
        this.mouse.x = null;
        this.mouse.y = null;
        this.mouse.isHovering = false;
      }, { passive: true });

      this.createParticles();
      this.animateParticles();
    }

    this.init3DTilt();
    this.initCounters();
    this.initIntersectionAnimations();
    this.initMagneticButtons();
    
    // Initialize Soundscape engine
    window.wildishSoundscape = new WildishSoundscapeEngine();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.offsetWidth || window.innerWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight || window.innerHeight;
  }

  handleMouseMove(e) {
    const rect = this.canvas ? this.canvas.getBoundingClientRect() : null;
    if (!rect) return;
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
    this.mouse.isHovering = true;
  }

  handleMouseLeave() {
    this.mouse.x = null;
    this.mouse.y = null;
    this.mouse.isHovering = false;
  }

  createParticles() {
    this.particles = [];
    const colors = [
      'rgba(223, 177, 91, ',   // Gold
      'rgba(255, 115, 0, ',    // Fiery orange ember
      'rgba(245, 213, 144, ',  // Bright Champagne gold
      'rgba(46, 125, 82, ',    // Botanical leaf green
      'rgba(255, 235, 180, '   // Champagne glow
    ];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * (this.canvas ? this.canvas.width : window.innerWidth),
        y: Math.random() * (this.canvas ? this.canvas.height : window.innerHeight),
        size: Math.random() * 3.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() * -0.9) - 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  animateParticles() {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let p of this.particles) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.angle) * 0.35;
      p.angle += p.angularSpeed;
      p.pulseVal += p.pulseSpeed;

      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 3;
          p.y += Math.sin(angle) * force * 3;
        }
      }

      if (p.y < -10) {
        p.y = this.canvas.height + 10;
        p.x = Math.random() * this.canvas.width;
      }
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;

      const currentAlpha = Math.max(0.05, Math.min(0.9, p.baseAlpha + Math.sin(p.pulseVal) * 0.25));

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p.colorPrefix}${currentAlpha})`;
      this.ctx.shadowColor = p.colorPrefix + '0.8)';
      this.ctx.shadowBlur = p.size * 3.5;
      this.ctx.fill();
      this.ctx.restore();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animateParticles());
  }

  init3DTilt() {
    const tiltCards = document.querySelectorAll('.tilt-card, .signature-card, .experience-card');
    
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        
        const glare = card.querySelector('.card-glare');
        if (glare) {
          const moveX = (x / rect.width) * 100;
          const moveY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(243, 208, 129, 0.22) 0%, transparent 60%)`;
          glare.style.opacity = '1';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        const glare = card.querySelector('.card-glare');
        if (glare) glare.style.opacity = '0';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
      });
    });
  }

  initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.3s ease';
      });

      btn.addEventListener('mouseenter', () => {
        btn.style.transition = 'none';
      });
    });
  }

  initCounters() {
    const statCounters = document.querySelectorAll('[data-counter-target]');
    if (!statCounters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseFloat(target.getAttribute('data-counter-target'));
          const suffix = target.getAttribute('data-counter-suffix') || '';
          const prefix = target.getAttribute('data-counter-prefix') || '';
          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = (easeProgress * countTo);

            if (countTo % 1 === 0) {
              target.textContent = `${prefix}${Math.floor(currentVal)}${suffix}`;
            } else {
              target.textContent = `${prefix}${currentVal.toFixed(1)}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              target.textContent = `${prefix}${countTo}${suffix}`;
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.3 });

    statCounters.forEach(c => observer.observe(c));
  }

  initIntersectionAnimations() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wildishMotion = new WildishMotionEngine();
});
