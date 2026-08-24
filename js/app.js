/**
 * Wildish Main Application Orchestrator
 * Navigation, Menu Explorer, Flavor Radar, Modals, Reviews
 */

class WildishApp {
  constructor() {
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.activeDietFilter = 'all';
    this.activeRadarDish = 'crab-curry';

    this.radarData = {
      'crab-curry': {
        title: 'Madu Lagoon Crab Curry',
        spiceScore: 92,
        spiceDesc: 'Kochchi Chili & Roasted Curry Heat',
        profile: {
          spice: 0.95,
          char: 0.70,
          citrus: 0.65,
          coconut: 0.92,
          aromatics: 0.96
        },
        pairTitle: 'Sommelier & Bar Pairing',
        pairDesc: 'Pairs exquisitely with Glacier De Menthe botanical soda or a chilled crisp BYOB Sauvignon Blanc to balance the fiery coconut gravy.'
      },
      'wild-surf-grill': {
        title: 'Wild Surf & Turf Grill Platter',
        spiceScore: 68,
        spiceDesc: 'Thai Chili Glaze & Garlic Sesame',
        profile: {
          spice: 0.68,
          char: 0.95,
          citrus: 0.82,
          coconut: 0.45,
          aromatics: 0.88
        },
        pairTitle: 'Sommelier & Bar Pairing',
        pairDesc: 'Best accompanied by Arctic Nona fresh strawberry elixir or a chilled dry Champagne to elevate the sweet rock lobster.'
      },
      'lamb-sando': {
        title: 'Signature Lamb Sando',
        spiceScore: 52,
        spiceDesc: 'Hoisin Glaze & Rosemary Aroma',
        profile: {
          spice: 0.52,
          char: 0.80,
          citrus: 0.58,
          coconut: 0.35,
          aromatics: 0.92
        },
        pairTitle: 'Sommelier & Bar Pairing',
        pairDesc: 'Pairs wonderfully with Dirty Ceylon Chai Latte or a bold BYOB Pinot Noir to match the savory Australian lamb.'
      },
      'hot-shrimp-pizza': {
        title: 'Madu River Hot Shrimp Pizza',
        spiceScore: 86,
        spiceDesc: 'Kochchi Chili & Hot Garlic Shrimp',
        profile: {
          spice: 0.88,
          char: 0.86,
          citrus: 0.72,
          coconut: 0.40,
          aromatics: 0.82
        },
        pairTitle: 'Sommelier & Bar Pairing',
        pairDesc: 'Pair with Frozen Mahaththaya Blue Curaçao cooler or cold Ceylon ginger beer for maximum crispy contrast.'
      },
      'glacier-de-menthe': {
        title: 'Glacier De Menthe & Arctic Nona',
        spiceScore: 12,
        spiceDesc: 'Pure Botanical Palate Cleanser',
        profile: {
          spice: 0.12,
          char: 0.10,
          citrus: 0.98,
          coconut: 0.20,
          aromatics: 0.78
        },
        pairTitle: 'Mixologist Recommendation',
        pairDesc: 'The ultimate refreshing accompaniment to be savored alongside our high-heat Kochchi curries and wok-tossed noodles.'
      }
    };
    
    this.init();
  }

  init() {
    this.initNavbar();
    this.initMenuExplorer();
    this.initFlavorRadar();
    this.initDishModal();
    this.initVideoModal();
    this.initReviewsCarousel();
    this.initSmoothScroll();
    this.initLiveStatus();
  }

  initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navLinks.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll');
      });

      links.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('is-active');
          navLinks.classList.remove('is-open');
          document.body.classList.remove('no-scroll');
        });
      });
    }
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  initFlavorRadar() {
    const dishButtons = document.querySelectorAll('.radar-dish-btn');
    if (!dishButtons.length) return;

    dishButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        dishButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const dishKey = btn.getAttribute('data-dish-key');
        this.updateRadarView(dishKey);
      });
    });

    this.updateRadarView('crab-curry');
  }

  updateRadarView(dishKey) {
    const data = this.radarData[dishKey];
    if (!data) return;

    // Update Headings and Texts
    const heading = document.getElementById('radar-dish-title');
    const spiceVal = document.getElementById('radar-spice-val');
    const spiceBar = document.getElementById('radar-spice-bar');
    const spiceText = document.getElementById('radar-spice-desc');
    const pairTitle = document.getElementById('radar-pair-title');
    const pairDesc = document.getElementById('radar-pair-desc');

    if (heading) heading.textContent = data.title;
    if (spiceVal) spiceVal.textContent = `${data.spiceScore}%`;
    if (spiceBar) spiceBar.style.width = `${data.spiceScore}%`;
    if (spiceText) spiceText.textContent = data.spiceDesc;
    if (pairTitle) pairTitle.innerHTML = `<i class="fa-solid fa-wine-glass text-gold"></i> ${data.pairTitle}`;
    if (pairDesc) pairDesc.textContent = data.pairDesc;

    // Calculate Radar Polygon Points
    // Center is (190, 190), Radius is 120
    const cx = 190;
    const cy = 190;
    const maxRadius = 120;

    // 5 Axis angles: 
    // Axis 0: Top (Spice) -> -PI/2
    // Axis 1: Top Right (Char) -> -PI/2 + 2*PI/5
    // Axis 2: Bottom Right (Citrus) -> -PI/2 + 4*PI/5
    // Axis 3: Bottom Left (Coconut) -> -PI/2 + 6*PI/5
    // Axis 4: Top Left (Aromatics) -> -PI/2 + 8*PI/5
    const angles = [
      -Math.PI / 2,
      -Math.PI / 2 + (2 * Math.PI / 5),
      -Math.PI / 2 + (4 * Math.PI / 5),
      -Math.PI / 2 + (6 * Math.PI / 5),
      -Math.PI / 2 + (8 * Math.PI / 5)
    ];

    const vals = [
      data.profile.spice,
      data.profile.char,
      data.profile.citrus,
      data.profile.coconut,
      data.profile.aromatics
    ];

    const points = angles.map((angle, i) => {
      const r = vals[i] * maxRadius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });

    const polygon = document.getElementById('radar-svg-poly');
    if (polygon) {
      polygon.setAttribute('points', points.join(' '));
    }

    // Update Individual Point Circles
    angles.forEach((angle, i) => {
      const circle = document.getElementById(`radar-point-${i}`);
      if (circle) {
        const r = vals[i] * maxRadius;
        circle.setAttribute('cx', (cx + r * Math.cos(angle)).toFixed(1));
        circle.setAttribute('cy', (cy + r * Math.sin(angle)).toFixed(1));
      }
    });
  }

  initMenuExplorer() {
    const container = document.getElementById('menu-grid-container');
    const categoryTabsContainer = document.getElementById('menu-category-tabs');
    const searchInput = document.getElementById('menu-search-input');
    const dietFilters = document.querySelectorAll('.diet-pill-btn');

    if (!container || !window.WILDISH_MENU) return;

    if (categoryTabsContainer) {
      categoryTabsContainer.innerHTML = `
        <button class="cat-pill active" data-cat="all">
          <i class="fa-solid fa-fire"></i> All Wild Creations
        </button>
      `;

      window.WILDISH_MENU.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-pill';
        btn.setAttribute('data-cat', cat.id);
        btn.innerHTML = `<i class="fa-solid ${cat.icon || 'fa-utensils'}"></i> ${cat.name}`;
        categoryTabsContainer.appendChild(btn);
      });

      categoryTabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          categoryTabsContainer.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeCategory = btn.getAttribute('data-cat');
          this.renderMenu();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderMenu();
      });
    }

    dietFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        dietFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeDietFilter = btn.getAttribute('data-diet');
        this.renderMenu();
      });
    });

    this.renderMenu();
  }

  renderMenu() {
    const container = document.getElementById('menu-grid-container');
    const countBadge = document.getElementById('menu-items-count');
    if (!container || !window.WILDISH_MENU) return;

    let allItems = [];
    window.WILDISH_MENU.forEach(cat => {
      if (this.activeCategory === 'all' || this.activeCategory === cat.id) {
        cat.items.forEach(item => {
          allItems.push({ ...item, categoryName: cat.name });
        });
      }
    });

    if (this.searchQuery) {
      allItems = allItems.filter(item => 
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.desc.toLowerCase().includes(this.searchQuery) ||
        item.categoryName.toLowerCase().includes(this.searchQuery)
      );
    }

    if (this.activeDietFilter !== 'all') {
      allItems = allItems.filter(item => {
        if (this.activeDietFilter === 'veg') return item.badges.includes('veg') || item.badges.includes('vegan');
        if (this.activeDietFilter === 'spicy') return item.spicy || item.badges.includes('spicy');
        if (this.activeDietFilter === 'signature') return item.badges.includes('signature') || item.badges.includes('wild-cookbook');
        if (this.activeDietFilter === 'seafood') return item.badges.includes('seafood');
        return true;
      });
    }

    if (countBadge) {
      countBadge.textContent = `${allItems.length} Dishes Found`;
    }

    if (allItems.length === 0) {
      container.innerHTML = `
        <div class="menu-empty-state">
          <i class="fa-solid fa-magnifying-glass-chart"></i>
          <h3>No dishes matched your criteria</h3>
          <p>Try searching for crab curry, sando, mocktails, pasta, or artisan pizzas.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = allItems.map(dish => {
      const priceFormatted = dish.price.toLocaleString('en-US');
      const atmosphereHtml = this.getDishAtmosphere(dish);
      
      const badgeHtml = dish.badges.map(b => {
        if (b === 'signature') return '<span class="dish-badge badge-signature"><i class="fa-solid fa-crown"></i> Chef Signature</span>';
        if (b === 'wild-cookbook') return '<span class="dish-badge badge-yt"><i class="fa-brands fa-youtube"></i> Wild Cookbook</span>';
        if (b === 'bestseller') return '<span class="dish-badge badge-popular">Bestseller</span>';
        if (b === 'veg') return '<span class="dish-badge badge-veg"><i class="fa-solid fa-leaf"></i> Veg</span>';
        if (b === 'vegan') return '<span class="dish-badge badge-vegan"><i class="fa-solid fa-seedling"></i> Vegan</span>';
        if (b === 'spicy') return '<span class="dish-badge badge-spicy"><i class="fa-solid fa-pepper-hot"></i> Spicy</span>';
        if (b === 'seafood') return '<span class="dish-badge badge-seafood"><i class="fa-solid fa-fish"></i> Fresh Catch</span>';
        return `<span class="dish-badge">${b}</span>`;
      }).join('');

      return `
        <div class="dish-card tilt-card" data-dish-id="${dish.id}">
          <div class="card-glare"></div>
          <div class="dish-img-wrap">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
            <div class="dish-overlay-glow"></div>
            ${atmosphereHtml}
            <div class="dish-badges-list">${badgeHtml}</div>
          </div>
          <div class="dish-body">
            <div class="dish-header">
              <h3 class="dish-title">${dish.name}</h3>
              <div class="dish-price">LKR ${priceFormatted}</div>
            </div>
            <p class="dish-description">${dish.desc}</p>
            <div class="dish-footer">
              <span class="dish-cat-label"><i class="fa-solid fa-utensils"></i> ${dish.categoryName}</span>
              <button class="btn-dish-inspect" onclick="window.wildishApp.inspectDish('${dish.id}')">
                <span>View Details</span> <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.wildishMotion && window.wildishMotion.init3DTilt) {
      window.wildishMotion.init3DTilt();
    }
  }

  getDishAtmosphere(dish) {
    const cat = (dish.categoryName || '').toLowerCase();
    const name = (dish.name || '').toLowerCase();

    // 1. Chilled / Frozen / Cold Desserts & Beverages
    if (cat.includes('mocktail') || cat.includes('refresh') || cat.includes('shake') || 
        cat.includes('smoothie') || cat.includes('squeezed') || cat.includes('iced') || 
        cat.includes('dessert') || name.includes('glacier') || name.includes('arctic') || 
        name.includes('frozen') || name.includes('cheesecake') || name.includes('tart')) {
      return `
        <div class="dish-atmosphere-overlay atm-chilled-frost" title="Chilled Fresh">
          <div class="frost-mist"></div>
          <div class="frost-mist"></div>
          <div class="frost-gleam"></div>
        </div>
      `;
    }

    // 2. Fire & Sizzle / Wood-fired Grill / Steaks / Pizzas
    if (cat.includes('pizza') || name.includes('grill') || name.includes('sizzle') || 
        name.includes('steak') || name.includes('bbq') || name.includes('crunchy') || name.includes('crispy')) {
      return `
        <div class="dish-atmosphere-overlay atm-fire-sizzle" title="Wood-Fired Sizzle">
          <div class="sizzle-heat-wave"></div>
          <div class="ember-spark"></div>
          <div class="ember-spark"></div>
          <div class="ember-spark"></div>
        </div>
      `;
    }

    // 3. Hot Steam (Curries, Soups, Pasta, Mains, Hot Seafood, Rice, Roast Paan)
    return `
      <div class="dish-atmosphere-overlay atm-hot-steam" title="Served Piping Hot">
        <div class="steam-wisp"></div>
        <div class="steam-wisp"></div>
        <div class="steam-wisp"></div>
      </div>
    `;
  }

  inspectDish(dishId) {
    let found = null;
    window.WILDISH_MENU.forEach(cat => {
      const match = cat.items.find(i => i.id === dishId);
      if (match) found = { ...match, categoryName: cat.name };
    });

    if (!found) return;

    const modal = document.getElementById('dish-detail-modal');
    if (!modal) return;

    document.getElementById('modal-dish-img').src = found.image;
    document.getElementById('modal-dish-img').alt = found.name;
    document.getElementById('modal-dish-title').textContent = found.name;
    document.getElementById('modal-dish-cat').textContent = found.categoryName;
    document.getElementById('modal-dish-price').textContent = `LKR ${found.price.toLocaleString('en-US')}`;
    document.getElementById('modal-dish-desc').textContent = found.desc;

    // Inject Atmosphere into Modal
    const modalImgWrap = modal.querySelector('.modal-img-container') || modal.querySelector('div[style*="height: 260px"]');
    if (modalImgWrap) {
      const oldAtm = modalImgWrap.querySelector('.dish-atmosphere-overlay');
      if (oldAtm) oldAtm.remove();
      modalImgWrap.insertAdjacentHTML('beforeend', this.getDishAtmosphere(found));
    }

    const badgeContainer = document.getElementById('modal-dish-badges');
    if (badgeContainer) {
      badgeContainer.innerHTML = found.badges.map(b => `<span class="dish-badge">${b.toUpperCase()}</span>`).join('');
    }

    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  initDishModal() {
    const modal = document.getElementById('dish-detail-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');

    const closeModal = () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);
  }

  initVideoModal() {
    const videoModal = document.getElementById('video-preview-modal');
    const openBtns = document.querySelectorAll('.open-video-modal-btn');
    const iframe = document.getElementById('yt-preview-iframe');

    if (!videoModal) return;

    const closeBtn = videoModal.querySelector('.video-modal-close');
    const backdrop = videoModal.querySelector('.video-modal-backdrop');

    const openVideo = (videoId = 'F4VYncooZE9u-BS5') => {
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/videoseries?list=UU${videoId}&autoplay=1`;
      }
      videoModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    };

    const closeVideo = () => {
      if (iframe) iframe.src = '';
      videoModal.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openVideo();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeVideo);
    if (backdrop) backdrop.addEventListener('click', closeVideo);
  }

  initReviewsCarousel() {
    const rail = document.querySelector('.reviews-slider-track');
    const prevBtn = document.querySelector('.rev-nav-prev');
    const nextBtn = document.querySelector('.rev-nav-next');

    if (!rail) return;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        rail.scrollBy({ left: -380, behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        rail.scrollBy({ left: 380, behavior: 'smooth' });
      });
    }
  }

  initLiveStatus() {
    const statusDot = document.querySelector('.live-status-dot');
    const statusText = document.querySelector('.live-status-text');
    if (!statusText) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDecimal = hours + (minutes / 60);

    const isOpen = currentDecimal >= 11.0 && currentDecimal <= 22.5;

    if (isOpen) {
      if (statusDot) statusDot.classList.add('open');
      statusText.innerHTML = `<strong>Open Now</strong> · Welcoming Guests until 10:30 PM`;
    } else {
      if (statusDot) statusDot.classList.add('closed');
      statusText.innerHTML = `<strong>Opening at 11:00 AM</strong> · Table Reservations Open`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wildishApp = new WildishApp();
});
