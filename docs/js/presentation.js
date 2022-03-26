// Global variables
const slides = document.querySelectorAll('article.main-slide');
const nav_wrapper = document.querySelector('div.nav-wrapper');
const hamburgers = document.querySelectorAll('div.hamburger-example');

// Slides count
document.documentElement.style.setProperty('--rowcount', `${slides.length}`)

// Adding hreflinks to slides in navigation
for (let i = 0; i < slides.length; i++) {
    nav_wrapper.innerHTML += `<a href="#${slides[i].id}">${i + 1}</a>`;
}

// Add onclick event for exemplary hamburger menus
for (let i = 0; i < 2; i++) {
    let opened = false;
    let top_line = document.querySelectorAll('div.hamburger-example > div:first-of-type')[i];
    let middle_line = document.querySelectorAll('div.hamburger-example > div:nth-child(2)')[i];
    let bottom_line = document.querySelectorAll('div.hamburger-example > div:last-of-type')[i];
    let menu_list = document.querySelectorAll('menu.hamburger-example-menu')[i];
    hamburgers[i].addEventListener('click', () => {
        if (!opened) {
            top_line.style.top = '50%';
            top_line.style.transform = 'rotate(45deg) translateY(-50%)';
            bottom_line.style.top = '50%';
            bottom_line.style.transform = 'rotate(-45deg) translateY(-50%)';
            middle_line.style.opacity = '0';
            menu_list.style.opacity = '1';
            menu_list.style.transform = 'scaleX(1)';
            opened = true;
        }
        else {
            top_line.style.top = '0';
            top_line.style.transform = '';
            bottom_line.style.top = 'unset';
            bottom_line.style.bottom = '0';
            bottom_line.style.transform = '';
            middle_line.style.opacity = '1';
            menu_list.style.opacity = '0';
            menu_list.style.transform = 'scaleX(0)';
            opened = false;
        }
    });
}