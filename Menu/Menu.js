//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");

const menuButton = $(".menu-button");


// const menuButton1 = document.querySelector(".header h1")
// const menuButton2 = document.querySelector(".header .menu-button")

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu

const toggleMenu = (e) => {
    e.stopPropagation();
    menu.slideToggle("slow"); //first part of stretch
}

//slideUp only
const menuUpOutside = () => { 
    menu.slideUp("slow");
}

//stop events
const clickInsideMenu = (e) => {
    e.stopPropagation();
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.

menuButton.click(toggleMenu);

//if a click is made anywhere on the document, the menuUpOutside function is called
$(document).click(menuUpOutside);

//if a click is made inside the expanded menu, the events are stopped
menu.click(clickInsideMenu);

// menuButton2.addEventListener('mousedown', () => {
//     toggleMenu()
// },);