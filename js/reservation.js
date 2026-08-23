/**
 * Wildish VIP Table Reservation & Digital Boarding Pass Engine
 */

class WildishReservationSystem {
  constructor() {
    this.form = document.getElementById('reservation-form');
    this.mealRadios = document.querySelectorAll('input[name="meal_type"]');
    this.timeSelect = document.getElementById('res-time-slot');
    this.dateInput = document.getElementById('res-date');
    this.ticketModal = document.getElementById('res-ticket-modal');
    
    this.init();
  }

  init() {
    if (!this.form) return;

    this.setupDateConstraints();
    this.populateTimeSlots('dinner'); // Default dinner

    this.mealRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.populateTimeSlots(e.target.value);
      });
    });

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // Close modal triggers
    const closeBtn = document.querySelector('.ticket-modal-close');
    const modalBackdrop = document.querySelector('.ticket-modal-backdrop');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeTicket());
    if (modalBackdrop) modalBackdrop.addEventListener('click', () => this.closeTicket());
  }

  setupDateConstraints() {
    if (!this.dateInput) return;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    
    // Set min to today
    this.dateInput.min = `${yyyy}-${mm}-${dd}`;
    this.dateInput.value = `${yyyy}-${mm}-${dd}`;

    // Max 45 days in advance
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 45);
    const max_yyyy = maxDate.getFullYear();
    const max_mm = String(maxDate.getMonth() + 1).padStart(2, '0');
    const max_dd = String(maxDate.getDate()).padStart(2, '0');
    this.dateInput.max = `${max_yyyy}-${max_mm}-${max_dd}`;
  }

  populateTimeSlots(mealType) {
    if (!this.timeSelect) return;
    this.timeSelect.innerHTML = '';

    const lunchSlots = [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM'
    ];

    const dinnerSlots = [
      '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
      '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM'
    ];

    const slots = mealType === 'lunch' ? lunchSlots : dinnerSlots;

    slots.forEach(slot => {
      const opt = document.createElement('option');
      opt.value = slot;
      opt.textContent = slot;
      this.timeSelect.appendChild(opt);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('res-name').value.trim();
    const phone = document.getElementById('res-phone').value.trim();
    const email = document.getElementById('res-email') ? document.getElementById('res-email').value.trim() : 'diner@wildish.lk';
    const date = document.getElementById('res-date').value;
    const time = this.timeSelect ? this.timeSelect.value : '07:30 PM';
    const guests = document.getElementById('res-guests').value;
    const seating = document.getElementById('res-seating') ? document.getElementById('res-seating').value : 'Open Kitchen Lounge';
    const occasion = document.getElementById('res-occasion') ? document.getElementById('res-occasion').value : 'Dining Experience';
    const notes = document.getElementById('res-note').value.trim();

    if (!name || !phone || !date || !guests) {
      alert('Please fill out all required fields to reserve your table.');
      return;
    }

    const bookingRef = 'WLD-' + Math.floor(100000 + Math.random() * 900000);
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Populate Boarding Pass Modal
    document.getElementById('pass-ref').textContent = bookingRef;
    document.getElementById('pass-name').textContent = name;
    document.getElementById('pass-phone').textContent = phone;
    document.getElementById('pass-date').textContent = formattedDate;
    document.getElementById('pass-time').textContent = time;
    document.getElementById('pass-guests').textContent = guests;
    document.getElementById('pass-seating').textContent = seating;
    document.getElementById('pass-occasion').textContent = occasion;
    if (document.getElementById('pass-notes')) {
      document.getElementById('pass-notes').textContent = notes ? `"${notes}"` : 'None';
    }

    // Show modal
    if (this.ticketModal) {
      this.ticketModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    // Play subtle success chime / confetti if available
    this.triggerBookingParticles();
  }

  closeTicket() {
    if (this.ticketModal) {
      this.ticketModal.classList.remove('is-active');
      document.body.style.overflow = '';
      this.form.reset();
      this.setupDateConstraints();
    }
  }

  triggerBookingParticles() {
    // Subtle festive flash
    const passCard = document.querySelector('.ticket-card');
    if (passCard) {
      passCard.style.animation = 'ticketPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.wildishReservation = new WildishReservationSystem();
});
