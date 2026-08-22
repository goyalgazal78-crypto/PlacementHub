// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark-theme';
document.body.classList.add(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    }
  });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navbarCenter = document.querySelector('.navbar-center');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navbarCenter.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navbarCenter.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarCenter.classList.remove('active');
    });
  });
}

// Set active navigation link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.navbar-center a');

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Counter animation for statistics
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 40);
}

// Trigger counter animation on scroll
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains('number')) {
      const target = parseInt(entry.target.getAttribute('data-target')) || 0;
      if (target > 0) {
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.number').forEach(el => observer.observe(el));

// Fade in animation on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-on-scroll').forEach(el => fadeInObserver.observe(el));

// Accordion functionality
function setupAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      // Close all open accordion items
      document.querySelectorAll('.accordion-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });

      // Open clicked item if it wasn't open
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

setupAccordions();

// Form submission handler
function setupFormHandlers() {
  // Forms marked data-custom-submit handle their own submission
  // (e.g. the Share Experience form) and are skipped here.
  const forms = document.querySelectorAll('form:not([data-custom-submit])');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add form submission logic here
      console.log('Form submitted');
      form.reset();
      // Show success message
      alert('Thank you for your submission!');
    });
  });
}

setupFormHandlers();

// Reveal animation on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = '0.6s ease';
  revealObserver.observe(el);
});
