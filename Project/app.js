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
    if (window.innerWidth > 800 && scrollPos < 300) {
      breakfastMenu.classList.remove('highlight');
      footerMenu.classList.remove('highlight');
      dinnerMenu.classList.remove('highlight');
      specialMenu.classList.remove('highlight');
      dessertMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 800 && scrollPos < 800) {
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
  
    if ((elem && window.innerWIdth < 800 && scrollPos < 300) || elem) {
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


var EPPZScrollTo =
{
    documentVerticalScrollPosition: function()
    {
        if (self.pageYOffset) return self.pageYOffset;
        if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    },

    viewportHeight: function()
    { return (document.compatMode === "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight; },

    documentHeight: function()
    { return (document.height !== undefined) ? document.height : document.body.offsetHeight; },

    documentMaximumScrollPosition: function()
    { return this.documentHeight() - this.viewportHeight(); },

    elementVerticalClientPositionById: function(id)
    {
        var element = document.getElementById(id);
        var rectangle = element.getBoundingClientRect();
        return rectangle.top;
    },

    scrollVerticalTickToPosition: function(currentPosition, targetPosition)
    {
        var filter = 0.2;
        var fps = 60;
        var difference = parseFloat(targetPosition) - parseFloat(currentPosition);

        var arrived = (Math.abs(difference) <= 0.5);
        if (arrived)
        {
            scrollTo(0.0, targetPosition);
            return;
        }

        currentPosition = (parseFloat(currentPosition) * (1.0 - filter)) + (parseFloat(targetPosition) * filter);

        scrollTo(0.0, Math.round(currentPosition));

        setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+currentPosition+", "+targetPosition+")", (1000 / fps));
    },

    scrollVerticalToElementById: function(id, padding)
    {
        var element = document.getElementById(id);
        if (element == null)
        {
            console.warn('Cannot find element with id \''+id+'\'.');
            return;
        }

        var targetPosition = this.documentVerticalScrollPosition() + this.elementVerticalClientPositionById(id) - padding;
        var currentPosition = this.documentVerticalScrollPosition();

        var maximumScrollPosition = this.documentMaximumScrollPosition();
        if (targetPosition > maximumScrollPosition) targetPosition = maximumScrollPosition;

        this.scrollVerticalTickToPosition(currentPosition, targetPosition);
    }
};

document.getElementById("navbar__logo").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('home', 100)};

document.getElementById("footer__logo").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('home', 100)};

document.getElementById("breakfast__navbar").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('breakfast', 100)};

document.getElementById("dinner__navbar").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('dinner', 100)};

document.getElementById("dessert__navbar").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('dessert', 100)};

document.getElementById("footer__navbar").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('footer', 100)};

document.getElementById("special__navbar").onclick = function () {
  EPPZScrollTo.scrollVerticalToElementById('special', 100)};