// Global variables
const user_code_areas = document.querySelectorAll('textarea.user-code');
const user_example_areas = document.querySelectorAll('div.user-example');
const finished_example_areas = document.querySelectorAll('div.finished-example');

setInterval(() => {
    user_example_areas[0].innerHTML = user_code_areas[0].value;
}, 1000);