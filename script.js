const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const body = document.body;

// Hamburger menu toggle
hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});