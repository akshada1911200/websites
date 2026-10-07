// Explore India Travel Interactive Script

function handleBooking(event) {
    event.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    if(name && email && destination) {
        document.getElementById('travelForm').reset();
        const confirmation = document.getElementById('bookingConfirmation');
        confirmation.style.display = 'flex';
        
        setTimeout(() => {
            confirmation.style.display = 'none';
        }, 5000);
    }
}

// Navbar scroll highlight or effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
