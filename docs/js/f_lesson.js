// Global variables
const userCodeArea = CodeMirror(document.getElementById('user-code'), {
    lineNumbers: true,
    tabSize: 2,
    matchBrackets: true,
    mode: 'htmlmixed',
    theme: 'nord',
    lineWrapping: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});
const codeSection = document.querySelector('section.first-exercise');
const userResultArea = document.querySelector('iframe.user-result');
const finishedExampleArea = document.querySelector('div.finished-example');
const navElements = document.querySelectorAll('menu.nav-menu > li');
const imageCode = document.querySelector('div.finished-example > img');
const mailSender = document.querySelector('section.mail-sender');
const mailSenderTextarea = document.querySelector('section.mail-sender textarea');
const copyButton = document.querySelector('button.copy-button');
const userCode = ['', '', '']
let currentExercise = 0;

if (localStorage.getItem(`userCode${currentExercise}`)) {
    userCodeArea.setValue(localStorage.getItem(`userCode${currentExercise}`));
}
else {
    userCodeArea.setValue('');
}
userResultArea.contentWindow.document.open();
userResultArea.contentWindow.document.write(userCodeArea.getValue());
userResultArea.contentWindow.document.close();

for (let i = 0; i < navElements.length - 1; i++) {
    navElements[i].addEventListener('click', () => {
        codeSection.style.display = 'block';
        mailSender.style.display = 'none';
        currentExercise = i;
        //userCodeArea.setValue(userCode[currentExercise]);
        if (localStorage.getItem(`userCode${currentExercise}`)) {
            userCodeArea.setValue(localStorage.getItem(`userCode${currentExercise}`));
        }
        else {
            userCodeArea.setValue('');
        }
        userResultArea.contentWindow.document.open();
        userResultArea.contentWindow.document.write(userCodeArea.getValue());
        userResultArea.contentWindow.document.close();
        if (i > 1) {
            imageCode.style.display = 'none';
        }
        else {
            imageCode.setAttribute('src', `../img/exercise${i + 1}.gif`);
        }
    });
}

navElements[navElements.length - 1].addEventListener('click', () => {
    codeSection.style.display = 'none';
    mailSender.style.display = 'block';
    mailSenderTextarea.value = localStorage.getItem('userCode0') + '\n\n/*Koniec*/\n' + localStorage.getItem('userCode1') + '\n\n/*Koniec*/\n' + localStorage.getItem('userCode2') + '\n\n/*Koniec*/\n';
});

copyButton.addEventListener('click', () => {
    mailSenderTextarea.select();
    document.execCommand('copy');
});

userCodeArea.on('change', () => {
    // userResultArea.contentWindow.document.body.innerHTML = userCodeArea.getValue();
    userResultArea.contentWindow.location.reload();
    userResultArea.contentWindow.document.open();
    userResultArea.contentWindow.document.write(userCodeArea.getValue());
    userResultArea.contentWindow.document.close();
    userCode[currentExercise] = userCodeArea.getValue();
    localStorage.setItem(`userCode${currentExercise}`, userCodeArea.getValue());
});

// setInterval(() => {
//     userResultArea.contentWindow.document.body.innerHTML = userCodeArea.getValue();
// }, 100);