//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");
const menuButton = $(".menu-button");

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
   menu.toggleClass("menu--open");
   menu.animate({ left: -100}, 500);
   menu.animate({left: 0,}, 500);
}
//how come the period is not required in the class?  

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);