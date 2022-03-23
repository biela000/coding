// Global variables
const user_code_areas = CodeMirror(document.getElementById('user-code'), {
    lineNumbers: true,
    tabSize: 4,
    matchBrackets: true,
    mode: 'htmlmixed',
    theme: 'nord',
    lineWrapping: true,
    matchBrackets: true
});
const user_result_areas = document.querySelectorAll('iframe.user-result');
const finished_example_areas = document.querySelectorAll('div.finished-example');

setInterval(() => {
    user_result_areas[0].contentWindow.document.querySelector('body').innerHTML = user_code_areas.getValue();
}, 1000);