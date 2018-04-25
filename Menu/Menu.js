//Using jQuery, select the menu element and the menu-button element

const menu = jQuery(".menu");
const menuButton = jQuery(".menu-button");

console.log(menu.text());

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu

const toggleMenu = () => {
  menu.toggleClass("menu--open");
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.

menuButton.click(toggleMenu);
