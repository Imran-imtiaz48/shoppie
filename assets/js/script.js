'use strict';

/** 
 * ===============================
 * Mobile Navbar Toggle Functionality 
 * ===============================
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

// Toggle the "active" class on the navbar when the toggler is clicked
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/** 
 * ===============================
 * Header Scroll Activation 
 * ===============================
 */
const header = document.querySelector("[data-header]");

// Add 'active' class to header when scrolled beyond 50px, remove otherwise
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
