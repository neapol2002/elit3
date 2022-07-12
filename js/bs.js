let header_burger = document.querySelector('.header_burger');
let nav_burger = document.querySelector('.nav');
let back = document.querySelector('body');
let nav__link = document.querySelector('.header__navigation-link');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    nav_burger.classList.toggle('active');
    back.classList.toggle('lock');
}

nav__link.onclick = function (){
    nav__link.classList.remove('active');
    back.classList.toggle('lock');
}
