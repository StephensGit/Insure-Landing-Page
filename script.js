const hamburger = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('show');
});
