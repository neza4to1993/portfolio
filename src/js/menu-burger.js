const menuCross = document.getElementById('menuToggle');
const menu = document.getElementById('theMenu');
const normalNenu = document.querySelector('.toggle-normal');
normalNenu.addEventListener('click', openMenu);

function openMenu() {
	menuCross.classList.toggle('active');
	menu.classList.toggle('menu-open');
}