//Using jQuery, select the menu element and the menu-button element
const menu = $('.menu');
const menuButton = $('.menu-button');

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
    console.log();
    if (menu.hasClass('menu--open')) {
        menu.toggleClass('menu--open');
        menu.animate( {
            zIndex: 2
        }, )
        menu.animate( {
            // display: 'block',
            // left: 0
            opacity: 1
        }, 1000 )
    } else {
        menu.toggleClass('menu--open');
        menu.animate( {
            // display: 'block',
            // left: 0
            opacity: 0,
            zIndex: -2
        }, 1000 )
    }
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);