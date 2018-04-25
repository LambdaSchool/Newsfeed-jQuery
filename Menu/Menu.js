//Using jQuery, select the menu element and the menu-button element
const menu = $('.menu');
const menuButton = $('.menu-button');

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
    $('.menu').toggleClass('menu--open')
}

// let heading = $('.headerOne');

// heading.addEventListener('click', () => {
//     TweenMax.to('.headerOne', 3, {
//         rotation:360,
//     });
// });


// menuButton.addEventListener('click', () =>{
//     TweenMax.to('.menu', 4, {
//         display:'block'
//     })
// });

// button.addEventListener('click', () => {
//     TweenMax.to(".block", 4, {
//         marginLeft:400,
//         backgroundColor:'black',
//         rotation:360,
//         ease: Elastic. easeOut.config( 1, 0.3), 
//     })
// });



//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.

$(".menu-button").click(toggleMenu);
