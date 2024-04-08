import { plus, minus } from './store.js';
const header = document.querySelector('header');

window.addEventListener('click', (e) => {
    if (e.target.closest('#chevron')) {
        e.target.closest('#chevron').classList.toggle('active_chevron');
        header.classList.toggle('h-lg-active');

    }
    if (e.target.closest('#open__feature') || e.target.querySelector('#open__feature')) {
        const btn = document.querySelector('#open__feature');
        const content = document.querySelector('#content');
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            btn.innerHTML = minus;
        }
        else {
            content.classList.add('hidden');
            btn.innerHTML = plus;
        }
    }
    if (e.target.closest('#close__btn')) {
        document.querySelector('#small__preview').classList.add('right-[-1000%]');
    }
    if (e.target.closest('#hambuger')) {
        document.querySelector('#small__preview').classList.remove('right-[-1000%]');
    }
})

Array.from(document.querySelectorAll('.year')).forEach(item => item.innerHTML = new Date().getFullYear());

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scroll__header');
    }
    else {
        header.classList.remove('scroll__header');
    }
})