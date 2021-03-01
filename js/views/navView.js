import {elements} from '../views/selectors.js';

export function displayMenuToggle() {
  elements.navMenu.classList.toggle("menu-active");
  document.body.classList.toggle("u-noScroll");
  isRotated();
}

export function isRotated() {
  elements.burgerIcon.classList.toggle('burger-animate')
}

