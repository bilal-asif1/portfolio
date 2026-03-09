'use strict';

/**
 * Modern Portfolio JavaScript
 * Enhanced functionality with smooth animations and interactions
 */

// DOM Elements
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarMenu = document.querySelector("[data-navbar-menu]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const backTopBtn = document.querySelector("[data-back-to-top]");
const contactForm = document.getElementById("contactForm");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navbarList = document.querySelector(".navbar-list");

/**
 * Navigation Toggle
 */
navToggleBtn.addEventListener("click", function () {
  const isActive = navbarMenu.classList.contains("active");
  navbarMenu.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  navToggleBtn.setAttribute("aria-expanded", !isActive);
  document.body.style.overflow = !isActive ? "hidden" : "";
});

/**
 * Close mobile menu when clicking on links
 */
navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbarMenu.classList.remove("active");
    navToggleBtn.classList.remove("active");
    navToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

/**
 * Close mobile menu when clicking outside
 */
document.addEventListener("click", function (e) {
  if (!header.contains(e.target) && navbarMenu.classList.contains("active")) {
    navbarMenu.classList.remove("active");
    navToggleBtn.classList.remove("active");
    navToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

/**
 * Header scroll effect
 */
window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 100) {
    header.classList.add("scrolled");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("scrolled");
    backTopBtn.classList.remove("active");
  }
});

/**
 * Back to top functionality
 */
backTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

/**
 * Typing Animation for Hero Section
 */
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const texts = typingElement.getAttribute('data-typing').split(',');
  let currentIndex = 0;
  let currentText = '';
  let isDeleting = false;

  function typeText() {
    const current = texts[currentIndex];
    if (isDeleting) {
      currentText = current.substring(0, currentText.length - 1);
    } else {
      currentText = current.substring(0, currentText.length + 1);
    }
    typingElement.textContent = currentText;
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === current) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
    }
    setTimeout(typeText, typeSpeed);
  }

  typeText();
}

/**
 * Intersection Observer for Animations
 */
function initScrollAnimations() {
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        if (entry.target.classList.contains('skill-category')) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => { bar.style.width = width; }, 200);
          });
        }
      }
    });
  }, observerOptions);

  const elementsToObserve = document.querySelectorAll('.portfolio-card, .skill-category, .highlight-item');
  elementsToObserve.forEach(el => observer.observe(el));
}

/**
 * Contact Form Handler with EmailJS Integration
 */
function handleContactForm() {
  if (!contactForm) return;

  contactForm.removeAttribute('action');
  contactForm.removeAttribute('method');
  contactForm.setAttribute('method', 'POST');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    const formData = new FormData(contactForm);
    const name = formData.get('from_name');
    const email = formData.get('from_email');
    const message = formData.get('message');
    const toEmail = formData.get('to_email') || 'bilalasif921@gmail.com';

    if (!name || !email || !message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    showNotification('Sending message...', 'info');

    // Send using EmailJS sendForm method
    if (typeof emailjs !== 'undefined') {
      emailjs.sendForm("service_swz36fd", "template_nceg0bh", "#contactForm")
        .then(function(response) {
          console.log('EmailJS SUCCESS:', response.status, response.text);
          showNotification('Message sent successfully.', 'success');
          contactForm.reset();
        })
        .catch(function(error) {
          console.log('EmailJS ERROR:', error);
          showNotification('Failed to send message. Please try again.', 'error');
        });
    } else {
      console.log('EmailJS not loaded');
      showNotification('Email service not available. Please try again later.', 'error');
    }
  });
}

/**
 * Email validation
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) existingNotification.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'success' ? '#10b981' : '#6366f1'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  document.body.appendChild(notification);

  setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => { notification.remove(); }, 300);
  }, 3000);
}

/**
 * Initialize Portfolio on DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function () {
  initTypingAnimation();
  initScrollAnimations();
  handleContactForm();
  console.log('Portfolio initialized successfully!');
});