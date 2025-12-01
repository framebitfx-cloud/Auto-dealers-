// Navigation & Page Switching
function showPage(pageId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('d-none'));
    document.getElementById(pageId).classList.remove('d-none');
}

// Vehicle Detail & Booking
function showVehicleDetail() { showPage('vehicle-detail'); }
function showBookingModal() { new bootstrap.Modal(document.getElementById('bookingModal')).show(); }
function validateOTP() { alert('OTP Sent! (Integration required for real SMS)'); }
function confirmBooking() {
    // Simulate confirmation
    showPage('confirmation');
    // Simulate notification trigger (integrate with webhook/SMS API)
    console.log('Notification sent to dealer via webhook/SMS.');
}

// EMI Calculator (Slide 9)
function calculateEMI() {
    const price = 500000; // Sample
    const downPayment = parseFloat(document.querySelector('input[placeholder="Down Payment %"]').value) / 100 * price;
    const tenure = parseInt(document.querySelector('input[placeholder="Tenure (months)"]').value);
    const interest = 0.1; // 10%
    const loan = price - downPayment;
    const emi = (loan * interest / 12) / (1 - Math.pow(1 + interest / 12, -tenure));
    document.getElementById('emi-result').textContent = `EMI: ₹${emi.toFixed(0)}/month`;
}

// Admin Functions
function showInventory() { document.getElementById('inventory-list').classList.remove('d-none'); document.getElementById('bookings-list').classList.add('d-none'); }
function showBookings() { document.getElementById('bookings-list').classList.remove('d-none'); document.getElementById('inventory-list').classList.add('d-none'); }
function showAddForm() { alert('Add Vehicle Form (integrate with backend)'); }

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    // Admin Access (Demo)
    if (window.location.hash === '#admin') {
        const pass = prompt('Admin Password:');
        if (pass === 'demo') showPage('admin');
    }
});
