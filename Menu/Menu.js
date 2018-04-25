//Using jQuery, select the menu element and the menu-button element
$('.menu');
$('.menuButton');

// Create a callback that will be passed to the menuButton click event listener
// Inside this callback a class should be either added or removed from menu
const toggleMenu = (() => {
    $('.menu').toggleClass('menu--open');
});

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
$('.menu-button').click(toggleMenu);

