$('document').ready(function () { 

   
});

const menu = $('.menu').click((event) => {
    console.log(event)
});
//Using jQuery, select the menu element and the menu-button element

const menuButton = $('.menu-button').click((event) => {
    toggleMenu()
});

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
    console.log('function triggered')
    $('.menu').toggleClass("menu--open");
    console.log(menuButton);
    
    
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
