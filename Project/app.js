const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 800 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.getElementById("navbar__logo").onclick = function () {
    location.href = "#home";
};

document.getElementById("footer__logo").onclick = function () {
    location.href = "#home";
};

document.getElementById("breakfast__navbar").onclick = function () {
    location.href = "#breakfast";
};

document.getElementById("dinner__navbar").onclick = function () {
    location.href = "#dinner";
};

document.getElementById("dessert__navbar").onclick = function () {
    location.href = "#dessert";
};

document.getElementById("footer__navbar").onclick = function () {
    location.href = "#footer";
};

document.getElementById("special__navbar").onclick = function () {
    location.href = "#special";
};