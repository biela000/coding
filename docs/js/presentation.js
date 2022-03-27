// Global variables
const slides = document.querySelectorAll('article.main-slide');
const nav_wrapper = document.querySelector('div.nav-wrapper');
const hamburgers = document.querySelectorAll('div.hamburger-example');
const horizontal_menu_elements = document.querySelectorAll('article#slide6 div.article-content-wrapper > menu > li');
const horizontal_tutorial_code = document.querySelectorAll('div.horizontal-tutorial-code');
const horizontal_tutorial_code_iframes = document.querySelectorAll('iframe.horizontal-tutorial-iframe');
const horizontal_tutorial_code_place = [];

// Slides count
document.documentElement.style.setProperty('--rowcount', `${slides.length}`)

// Adding hreflinks to slides in navigation
for (let i = 0; i < slides.length; i++) {
    nav_wrapper.innerHTML += `<a href="#${slides[i].id}">${i + 1}</a>`;
}

// Add onclick event for exemplary hamburger menus
for (let i = 0; i < 2; i++) {
    let opened = false;
    const top_line = document.querySelectorAll('div.hamburger-example > div:first-of-type')[i];
    const middle_line = document.querySelectorAll('div.hamburger-example > div:nth-child(2)')[i];
    const bottom_line = document.querySelectorAll('div.hamburger-example > div:last-of-type')[i];
    const menu_list = document.querySelectorAll('menu.hamburger-example-menu')[i];
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

// Add onclick events for exemplary horizontal menu to recreate
for (let i = 0; i < horizontal_menu_elements.length; i++) {
    let underline = document.querySelector('article#slide6 menu > li > span');
    horizontal_menu_elements[i].addEventListener('click', () => {
        underline.style.transform = `translateX(calc(${i} * 100%))`;
    });
}

// Initialize CodeMirror objects
for (let i = 0; i < horizontal_tutorial_code.length; i++) {
    horizontal_tutorial_code_place.push(CodeMirror(document.getElementById(`horizontal-tutorial-code${i + 1}`), {
        lineNumbers: true,
        tabSize: 4,
        matchBrackets: true,
        mode: 'xml',
        theme: 'nord',
        lineWrapping: true,
        readOnly: true
    }));
    horizontal_tutorial_code_place[i].setValue(document.querySelectorAll('div.tutorial-code-content')[i].innerHTML);
    console.log(horizontal_tutorial_code_place[i].getValue());
    setTimeout(() => {
        horizontal_tutorial_code_iframes[i].contentWindow.document.querySelector('body').innerHTML = horizontal_tutorial_code_place[i].getValue();
    }, 1);
    console.log(document.querySelectorAll('div.tutorial-code-content'));
}