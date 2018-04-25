//Using jQuery, select the menu element and the menu-button element
const menu = $('.menu');
const menuButton = $('.menu-button');

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
//Added stretch goal: animate menu open/close
const toggleMenu = () => {
  (menu.hasClass('menu--open')) ? animateMenuClose() : animateMenuOpen();
  menu.toggleClass('menu--open');
};

const animateMenuOpen = function(){
  menu.animate({
    left: '0',
    opacity: '1'
  });
};

const animateMenuClose = function(){
  menu.animate({
    left: '-350px',
    opacity: '0'
  });
};

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);