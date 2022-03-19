// Global variables
const slides = document.querySelectorAll('article.main-slide');
const nav_wrapper = document.querySelector('div.nav-wrapper');

// Slides count
document.documentElement.style.setProperty('--rowcount', `${slides.length}`)

// Adding hreflinks to slides in navigation
for (let i = 0; i < slides.length; i++) {
    nav_wrapper.innerHTML += `<a href="#${slides[i].id}">${i + 1}</a>`;
}