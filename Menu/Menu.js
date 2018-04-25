/* 
## Part 1: The Menu

* Import menu.less from the correct path into index.less (follow the lead for header if you’re not sure how to write the correct path)
* Use jQuery to select the menu and menu button components from the HTML. Look at the HTML code to determine the class names of both.
* Write a callback function that add and removes a class to the menu when called. Hint: Look in the Menu.less file for the name of the class. 
* Look at the LESS and determine what Is happening when the classes are added or removed. 
Using jQuery, pass the callback to a click event listener on the button.
 */



//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");
const menuButton = $(".menu-button");

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
    menu.toggleClass("menu--open");
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);

