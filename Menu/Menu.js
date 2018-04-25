//Using jQuery, select the menu element and the menu-button element
const menu = $('.menu'),
      menuButton = $('.menu-button'),
      body = $('body');

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
//Added stretch goal: animate menu open/close
const toggleMenu = () => {
  (menu.hasClass('menu--open')) ? animateMenuClose() : animateMenuOpen();
};

const animateMenuOpen = function(){
  menu.animate({
    left: '0',
    opacity: '1'
  }, () => menu.toggleClass('menu--open'));
};

const animateMenuClose = function(){
  menu.animate({
    left: '-350px',
    opacity: '0'
  }, () => menu.toggleClass('menu--open'));
};

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);
body.click((event) => {
  if ($(event.target).closest(menuButton).length === 0 && $(event.target).closest(menu).length === 0) {
    if(menu.hasClass('menu--open')) animateMenuClose();
  }
});