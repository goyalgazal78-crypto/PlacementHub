/* Aptitude Page */

/** Mobile nav hamburger */
const setupMobileNav = () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  if (!navbar || !hamburger) return;

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });

  // Tapping a link should close the menu instead of leaving it open behind the page it navigates to.
  navbar.querySelectorAll('.navbar-center a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });

  // Tapping anywhere outside the menu closes it too.
  document.addEventListener('click', (event) => {
    if (navbar.classList.contains('nav-open') && !navbar.contains(event.target)) {
      navbar.classList.remove('nav-open');
    }
  });
};

setupMobileNav();
