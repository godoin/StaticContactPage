const menuButton = document.querySelector('#menu-btn');

const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})