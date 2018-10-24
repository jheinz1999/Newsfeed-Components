
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.

  if (!menuState) {

    menu.classList.toggle('menu--open');
    TweenMax.to(menu, 1, {css:{left: '0px'}, ease: Power2.easeInOut});

  }

  else {

    TweenMax.to(menu, 1, {css:{left: '-350px'}, ease: Power2.easeInOut});
    setTimeout(() => menu.classList.toggle('menu--open'), 1000);

  }

  menuState = !menuState;

}

// Holds whether menu is on or off
let menuState = false;

// Menu off click event listener
document.addEventListener('click', function(event) {

  if (event.target != menu && event.target != menuButton && menuState)
    toggleMenu();

});

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Custom hover animation

const menuLinks = document.querySelectorAll('.menu ul li');

menuLinks.forEach(link => {

  link.addEventListener('mouseenter', () => TweenMax.to(link, 1, {css:{backgroundColor: '#388E3C'}}));
  link.addEventListener('mouseleave', () => TweenMax.to(link, 1, {css:{backgroundColor: '#81C784'}}));

});
