const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const breakfastMenu = document.querySelector('#breakfast__navbar');
    const dinnerMenu = document.querySelector('#dinner__navbar');
    const dessertMenu = document.querySelector('#dessert__navbar');
    const specialMenu = document.querySelector('#special__navbar');
    const footerMenu = document.querySelector('#footer__navbar');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 800 && scrollPos < 800) {
      breakfastMenu.classList.add('highlight');
      footerMenu.classList.remove('highlight');
      dinnerMenu.classList.remove('highlight');
      specialMenu.classList.remove('highlight');
      dessertMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 800 && scrollPos < 1300) {
      dinnerMenu.classList.add('highlight');
      footerMenu.classList.remove('highlight');
      breakfastMenu.classList.remove('highlight');
      specialMenu.classList.remove('highlight');
      dessertMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 800 && scrollPos < 1700) {
      dessertMenu.classList.add('highlight');
      footerMenu.classList.remove('highlight');
      dinnerMenu.classList.remove('highlight');
      specialMenu.classList.remove('highlight');
      breakfastMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 800 && scrollPos < 2000) {
        specialMenu.classList.add('highlight');
        footerMenu.classList.add('highlight');
        dinnerMenu.classList.remove('highlight');
        breakfastMenu.classList.remove('highlight');
        dessertMenu.classList.remove('highlight');
        return;
    }
  
    if ((elem && window.innerWIdth < 800 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);

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