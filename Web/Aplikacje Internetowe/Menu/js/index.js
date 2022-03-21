// Global variables
const lesson_display = document.querySelector('li.selected-lesson');
const lessons = document.querySelectorAll('a.lessons-link');
let left = false;

// Event listeners
for (let i = 0; i < lessons.length; i++) {
    lessons[i].addEventListener('mouseenter', () => {
        if (window.matchMedia('(min-width: 686px)')) {
            lesson_display.innerText = `[${lessons[i].getAttribute('lesson').toUpperCase()}]`;
            left = false;
        }
    });
    lessons[i].addEventListener('mouseleave', () => {
        left = true;
        if (window.matchMedia('(min-width: 686px)')) {
            setTimeout(() => {
                if (left == true) {
                    lesson_display.innerText = '[WYBIERZ]';
                }
            }, 100);
        }
    });
}