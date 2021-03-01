/////////////////////////
// Controller imports
/////////////////////////
import { elements } from './views/selectors.js';
import * as navModel from './models/Nav.js';
import * as navView from './views/navView.js';
import * as cardView from './views/cardView.js'; // show the project cards
import { consoleMessages } from './models/ConsoleMessage.js'; // show console messages
import { observerTrigger } from './models/Observer.js';

consoleMessages();


/////////////////////////
// Nav Controller
/////////////////////////
const {burgerIcon, navLinks, navMenu, nav, arrowUp, sections } = elements; 

// Nav / Burger Menu Controller
//
burgerIcon.addEventListener('click', navModel.burgerMenuToggle);

// Nav / Links
//
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(function() { 
      if (navMenu.classList.contains("menu-active")) {
        navView.displayMenuToggle(); 
      }
    }, 620);
  })
});

// Nav / on Scroll change color navbar
//
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
// Scroll up Arrow
  if (document.body.scrollTop >= 1100 || document.documentElement.scrollTop >= 1100) {
    arrowUp.classList.add("arrow-up-active");
  } else {
    arrowUp.classList.remove("arrow-up-active");
  }
};


// Spy Scroll for NAV
//
document.addEventListener('DOMContentLoaded', function(){ 
  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => navLinks[link].classList.add("link-active");
  const removeActive = (link) => navLinks[link].classList.remove("link-active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  const sectionMargin = 200;
  let currentActive = 0;
  // listen for scroll events
  window.addEventListener("scroll", () => {
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1

    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);

/////////////////////////
// Intersection Observer API
/////////////////////////

// Trigger animation & lazy load when images are on the screen
//
let animatedImg; 
let bioImg; 
let firstThumbImg; 

window.addEventListener("load", (event) => {
  // targets
  animatedImg = document.querySelectorAll('.js-animate-img'); 
  bioImg = document.querySelector('.js-animate-bio__img');
  firstThumbImg = document.querySelector('.js-animate-img');
  // call the observer function
  observerTrigger(animatedImg, 'isAnimated', '5px');
  observerTrigger(bioImg, 'isAnimated-bio__img', '5px');
  observerTrigger(firstThumbImg, 'isAnimated-firstThumb', '5px');
}, false);