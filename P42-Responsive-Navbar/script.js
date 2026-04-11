// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('open'));
  navLinks.classList.toggle('open');
});

// Mobile dropdown toggle
document.querySelectorAll('.has-dropdown').forEach(item => {
  item.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      item.classList.toggle('open');
    }
  });
});

// Close menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(){
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll shadow
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 10);
});
