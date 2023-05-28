window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('menu-active');
    });
})