//Using jQuery, select the menu element and the menu-button element
//const $el = $('.className h3'); 

const menu = $(".menu");
const menuButton = $(".menu-button");
//console.log("menu", menu);
//console.log("menu-button", menuButton);

//.menu 



//.menu-button

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
    menu.toggleClass("menu--open");
    // console.log("xyz");
}

//$el.click(() => { /* Function to run after event is fired */});
menuButton.click(toggleMenu);


//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
