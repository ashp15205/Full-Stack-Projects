const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const dropBtn = document.querySelector('.drop-btn');
const dropdown = document.querySelector('.dropdown');

// Mobile Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mobile Dropdown Toggle
dropBtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 850) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    }
});

// Scroll Header State
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
