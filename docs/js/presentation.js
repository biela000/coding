// Global variables
const slides = document.querySelectorAll('article.main-slide');
const nav_wrapper = document.querySelector('div.nav-wrapper');
const hamburgers = document.querySelectorAll('div.hamburger-example');
const horizontal_menu_elements = document.querySelectorAll('article#slide6 div.article-content-wrapper > menu > li');
const tutorial_code = document.querySelectorAll('div.tutorial-code');
const tutorial_code_iframes = document.querySelectorAll('iframe.tutorial-iframe');
const tutorial_code_place = [];
const vertical_menu_elements = document.querySelectorAll('menu.recreated-vertical-menu > li:not(.indicator)');
const vertical_menu_indicator = document.querySelector('li.indicator');
const code_fragments = [
    `<menu class="my-horizontal-menu">
    <li>Główna</li>
    <li>Produkty</li>
    <li>O nas</li>
    <li>Nowości</li>
    <li>Kontakt</li>
</menu>`,
    `<menu class="my-horizontal-menu">
    <li>Główna</li>
    <li>Produkty</li>
    <li>O nas</li>
    <li>Nowości</li>
    <li>Kontakt</li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-horizontal-menu {
        list-style-type: none;
        background-color: #3B4252;
        color: #D8DEE9;
        width: 100%;
        min-width: 655px;
        margin: 20px auto 0 auto;
        font-size: 0;
    }

    menu.my-horizontal-menu > li {
        display: inline-block;
        font-size: 24px;
        width: calc(100% / 5);
        cursor: pointer;
        transition: background-color 0.5s;
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }

    menu.my-horizontal-menu > li:hover {
        background-color: #B48EAD;
    }
</style>`,
    `<menu class="my-horizontal-menu">
    <li>
        Główna
        <span class="current-pointer"></span>
    </li>
    <li>Produkty</li>
    <li>O nas</li>
    <li>Nowości</li>
    <li>Kontakt</li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-horizontal-menu {
        list-style-type: none;
        background-color: #3B4252;
        color: #D8DEE9;
        width: 100%;
        min-width: 655px;
        margin: 20px auto 0 auto;
        font-size: 0;
    }

    menu.my-horizontal-menu > li {
        display: inline-block;
        font-size: 24px;
        width: calc(100% / 5);
        cursor: pointer;
        transition: background-color 0.5s;
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }

    menu.my-horizontal-menu > li:hover {
        background-color: #B48EAD;
    }

    menu.my-horizontal-menu {
        position: relative;
    }

    span.current-pointer {
        display: inline-block;
        position: absolute;
        width: 20%;
        height: 3px;
        background-color: #D8DEE9;
        left: 0;
        top: -3px;
        transition: transform 0.5s;
    }
</style>
<script>
    const horizontalMenuElements = document.querySelectorAll('menu.my-horizontal-menu > li');
    for (let i = 0; i < horizontalMenuElements.length; i++) {
        const underline = document.querySelector('span.current-pointer');
        horizontalMenuElements[i].addEventListener('click', () => {
            underline.style.transform = 'translateX(calc(' + i + ' * 100%))';
        });
    }
</script>`,
    `<menu class="my-horizontal-menu">
    <li>
        Główna
        <span class="current-pointer"></span>
    </li>
    <li class="my-horizontal-menu--drop-down-container">
        Produkty
        <menu class="my-horizontal-menu--drop-down">
            <li>
                <h3>Programowanie</h3>
                <menu>
                    <li>PC-ty</li>
                    <li>Laptopy</li>
                    <li>Tablety</li>
                    <li>Smartfony</li>
                    <li>Klawiatury</li>
                </menu>
            </li>
            <li>
                <h3>TV &amp; Wideo</h3>
                <menu>
                    <li>Telewizory LED</li>
                    <li>Telewizory plazmowe</li>
                    <li>Telewizory 3D</li>
                    <li>Odtwarzacze DVD</li>
                    <li>Odtwarzacze Blu-Ray</li>
                </menu>
            </li>
            <li>
                <h3>Drukarki</h3>
                <menu>
                    <li>Drukarki 3D</li>
                    <li>Drukarki 3D</li>
                    <li>Drukarki 3D</li>
                    <li>Drukarki 3D</li>
                    <li>Drukarki 3D</li>
                </menu>
            </li>
        </menu>
    </li>
    <li>O nas</li>
    <li>Nowości</li>
    <li>Kontakt</li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-horizontal-menu {
        list-style-type: none;
        background-color: #3B4252;
        color: #D8DEE9;
        width: 100%;
        min-width: 655px;
        margin: 20px auto 0 auto;
        font-size: 0;
    }

    menu.my-horizontal-menu > li {
        display: inline-block;
        font-size: 24px;
        width: calc(100% / 5);
        cursor: pointer;
        transition: background-color 0.5s;
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }

    menu.my-horizontal-menu > li:hover {
        background-color: #B48EAD;
    }

    menu.my-horizontal-menu {
        position: relative;
    }

    span.current-pointer {
        display: inline-block;
        position: absolute;
        width: 20%;
        height: 3px;
        background-color: #D8DEE9;
        left: 0;
        top: -3px;
        transition: transform 0.5s;
    }

    menu.my-horizontal-menu--drop-down {
        list-style-type: none;
        position: absolute;
        width: 100%;
        background-color: rgba(46, 52, 64, 0.7);
        left: 0;
        text-align: left;
        justify-content: space-around;
        font-size: 18px;
        display: none;
    }

    menu.my-horizontal-menu--drop-down menu {
        list-style-type: none;
    }

    menu.my-horizontal-menu--drop-down menu > li {
        transition: color 0.5s;
    }

    menu.my-horizontal-menu--drop-down menu > li:hover {
        color: #B48EAD;
    }

    li.my-horizontal-menu--drop-down-container:hover > menu.my-horizontal-menu--drop-down {
        display: flex;
    }
</style>
<script>
    const horizontalMenuElements = document.querySelectorAll('menu.my-horizontal-menu > li');
    for (let i = 0; i < horizontalMenuElements.length; i++) {
        const underline = document.querySelector('span.current-pointer');
        horizontalMenuElements[i].addEventListener('click', () => {
            underline.style.transform = 'translateX(calc(' + i + ' * 100%))';
        });
    }
</script>`,
    `<menu class="my-vertical-menu">
    <li>
        <a href="#">
            <ion-icon name="home-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="compass-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="podium-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="trophy-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="construct-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="diamond-outline"></ion-icon>
        </a>
    </li>
</menu>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
    `<menu class="my-vertical-menu">
    <li>
        <a href="#">
            <ion-icon name="home-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="compass-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="podium-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="trophy-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="construct-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="diamond-outline"></ion-icon>
        </a>
    </li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-vertical-menu {
        list-style-type: none;
        background-color: #D8DEE9;
        color: #3B4252;
        width: fit-content;
        font-size: 36px; /**/
        border-radius: 10px;
        padding: 5px 0; /**/
    }

    menu.my-vertical-menu > li {
        padding: 0 5px; /**/
        cursor: pointer;
    }

    menu.my-vertical-menu a {
        color: var(--bg-color-dark);
        display: flex;
        align-items: center;
        height: 65px; /**/
        width: 65px; /**/
        justify-content: center;
        transition: all 0.5s;
        text-decoration: none;
    }
</style>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
    `<menu class="my-vertical-menu">
    <li class="indicator"></li>
    <li>
        <a href="#">
            <ion-icon name="home-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="compass-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="podium-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="trophy-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="construct-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="diamond-outline"></ion-icon>
        </a>
    </li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-vertical-menu {
        list-style-type: none;
        background-color: #D8DEE9;
        color: #3B4252;
        width: fit-content;
        font-size: 36px; /**/
        border-radius: 10px;
        position: relative;
        padding: 5px 0; /**/
    }

    menu.my-vertical-menu > li {
        padding: 0 5px; /**/
        cursor: pointer;
    }

    menu.my-vertical-menu a {
        color: #3B4252;
        display: flex;
        align-items: center;
        height: 65px; /**/
        width: 65px; /**/
        justify-content: center;
        transition: all 0.5s;
        text-decoration: none;
    }

    menu.my-vertical-menu {
        position: relative;
    }

    li.indicator {
        position: absolute;
        height: 70px; /**/
        width: 70px; /**/
        background-color: #B48EAD;
        border-radius: 50%;
        right: -50%;
        border: 10px solid #3B4252; /**/
        transition: transform 0.5s;
    },
</style>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`,
    `<menu class="my-vertical-menu">
    <li class="indicator"></li>
    <li class="default">
        <a href="#">
            <ion-icon name="home-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="compass-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="podium-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="trophy-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="construct-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <ion-icon name="diamond-outline"></ion-icon>
        </a>
    </li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-vertical-menu {
        list-style-type: none;
        background-color: #D8DEE9;
        color: #3B4252;
        width: fit-content;
        font-size: 36px; /**/
        border-radius: 10px;
        position: relative;
        padding: 5px 0; /**/
    }

    menu.my-vertical-menu > li {
        padding: 0 5px; /**/
        cursor: pointer;
    }

    menu.my-vertical-menu a {
        color: #3B4252;
        display: flex;
        align-items: center;
        height: 65px; /**/
        width: 65px; /**/
        justify-content: center;
        transition: all 0.5s;
        text-decoration: none;
    }

    menu.my-vertical-menu {
        position: relative;
    }

    li.indicator {
        position: absolute;
        height: 70px; /**/
        width: 70px; /**/
        background-color: #B48EAD;
        border-radius: 50%;
        right: -50%;
        border: 10px solid #3B4252; /**/
        transition: transform 0.5s;
    }
</style>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script>
    const menuElements = document.querySelectorAll('menu.my-vertical-menu > li:not(.indicator)');
    const menuElementHyperlinks = document.querySelectorAll('menu.my-vertical-menu a');
    const indicator = document.querySelector('li.indicator');
    
    document.querySelector('li.default > a').style.transform = 'translateX(40px)';

    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener('click', () => {
            menuElementHyperlinks.forEach((listelement) => listelement.style.transform = '');
            menuElementHyperlinks[i].style.transform = 'translateX(40px)'; //
            indicator.style.transform = 'translateY(calc(' + i + '* 64px))';
        });
    }
</script>`,
    `<menu class="my-vertical-menu">
    <li class="indicator"></li>
    <li class="default">
        <a href="#">
            <span class="text">
                HOME
            </span>
            <ion-icon name="home-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="text">
                NAV
            </span>
            <ion-icon name="compass-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="text">
                STATS
            </span>
            <ion-icon name="podium-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="text">
                WIN
            </span>
            <ion-icon name="trophy-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="text">
                SET
            </span>
            <ion-icon name="construct-outline"></ion-icon>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="text">
                VIP
            </span>
            <ion-icon name="diamond-outline"></ion-icon>
        </a>
    </li>
</menu>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    menu.my-vertical-menu {
        list-style-type: none;
        background-color: #D8DEE9;
        color: #3B4252;
        width: fit-content;
        font-size: 36px; /**/
        border-radius: 10px;
        position: relative;
        padding: 5px 0; /**/
    }

    menu.my-vertical-menu > li {
        padding: 0 5px; /**/
        cursor: pointer;
    }

    menu.my-vertical-menu a {
        color: #3B4252;
        display: flex;
        align-items: center;
        height: 65px; /**/
        width: 65px; /**/
        justify-content: center;
        transition: all 0.5s;
        text-decoration: none;
    }

    menu.my-vertical-menu {
        position: relative;
    }

    li.indicator {
        position: absolute;
        height: 70px; /**/
        width: 70px; /**/
        background-color: #B48EAD;
        border-radius: 50%;
        right: -50%;
        border: 10px solid #3B4252; /**/
        transition: transform 0.5s;
    }

    span.text {
        width: min-content;
        word-break: break-all;
        font-size: 12px; /**/
        position: absolute;
        transform: translateX(-55px); /**/
        text-decoration: none;
    }
</style>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
<script>
    const menuElements = document.querySelectorAll('menu.my-vertical-menu > li:not(.indicator)');
    const menuElementHyperlinks = document.querySelectorAll('menu.my-vertical-menu a');
    const indicator = document.querySelector('li.indicator');
    
    document.querySelector('li.default > a').style.transform = 'translateX(40px)';

    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].addEventListener('click', () => {
            menuElementHyperlinks.forEach((listelement) => listelement.style.transform = '');
            menuElementHyperlinks[i].style.transform = 'translateX(40px)'; //
            indicator.style.transform = 'translateY(calc(' + i + '* 64px))';
        });
    }
</script>`
];
// const code_fragments = [ 
//     file_reader.readAsText('../subpages/presentation-examples/00-horizontal.html'), 
//     file_reader.readAsText('../subpages/presentation-examples/01-horizontal.html'), 
//     file_reader.readAsText('../subpages/presentation-examples/02-horizontal.html'), 
//     file_reader.readAsText('../subpages/presentation-examples/03-horizontal.html')
// ];

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
    const underline = document.querySelector('article#slide6 menu > li > span');
    horizontal_menu_elements[i].addEventListener('click', () => {
        underline.style.transform = `translateX(calc(${i} * 100%))`;
    });
}

// Initialize CodeMirror objects
for (let i = 0; i < tutorial_code.length; i++) {
    tutorial_code_place.push(CodeMirror(document.getElementById(`tutorial-code${i + 1}`), {
        lineNumbers: true,
        tabSize: 4,
        matchBrackets: true,
        mode: 'htmlmixed',
        theme: 'nord',
        lineWrapping: true,
        readOnly: true
    }));
    console.log(tutorial_code_iframes[i]);
    tutorial_code_iframes[i].contentWindow.document.designMode = 'on';
    console.log(tutorial_code_iframes[i].contentWindow.document.body.innerHTML);
    // tutorial_code_place[i].setValue(tutorial_code_iframes[i].contentWindow.document.body.innerHTML);
    tutorial_code_place[i].setValue(code_fragments[i]);
    // console.log(code_fragments[i]);
    // console.log(tutorial_code_place[i].getValue());
    // setTimeout(() => {
    //     tutorial_code_iframes[i].contentWindow.document.querySelector('body').innerHTML = tutorial_code_place[i].getValue();
    // }, 1);
    // console.log(document.querySelectorAll('div.tutorial-code-content'));
}

// Add onclick events for exemplary vertical menu elements
for (let i = 0; i < vertical_menu_elements.length; i++) {
    vertical_menu_elements[i].addEventListener('click', () => {
        vertical_menu_elements.forEach((item) => item.classList.remove('active'));
        vertical_menu_elements[i].classList.add('active');
        vertical_menu_indicator.style.transform = `translateY(calc(${i} * 89px))`;
    });
}