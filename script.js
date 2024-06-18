const menu = document.querySelector('#navbar-icon');
const navlist = document.querySelector('.nav-list');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}