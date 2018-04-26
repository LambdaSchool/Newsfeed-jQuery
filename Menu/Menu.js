//Using jQuery, select the menu element and the menu-button element
const menu = $('.menu')
const menuButton = $('.menu-button')

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu

// const toggleMenu = () => {
//     $(menu).toggleClass("menu--open");
// } 
// Realized I needed to comment this out if I wanted to have a smooth transition close for the menu

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
// $(menuButton).click(toggleMenu);

// Stretch goals
$(menuButton).click(function () {
    if ($(menu).css('display') == 'none' || $(menu).css('left') == '-350px') {    
    $(menu).css('display', 'block')
        $(menu).css('left', '-350px');
        $('.menu').animate({
            left: "0",
        }, 5000)
    } else if ($(menu).css('display') == 'block') {
        $('.menu').animate({
            left: "-350px",
        }, 5000)
    }
})
$(menuButton).click(function() {
    if ($('.article').css('height') == '50px') {
    $('.articles').css('width','100%'),
    $('.article').animate({
        height: '450px',
        marginLeft: '350px',
        marginRight: '0',
    }, 5000)
    } else  {
        $('.article').animate ({
            height: '50px',
            marginLeft: '10%',
            marginRight: '10%',
        }, 5000)
    }
})
