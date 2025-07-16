const showNav = document.querySelector('.navigationUl');
const growMenu = document.querySelector('#growMenu');
growMenu.addEventListener('click', () => {
    showNav.classList.toggle('open');
    growMenu.classList.toggle('open');
});
