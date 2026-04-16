const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    // Scroll state
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link update
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
};

document.querySelector('.contact-form').onsubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! I will get back to you soon.');
    e.target.reset();
};
