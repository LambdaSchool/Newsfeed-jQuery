//Using jQuery, select the menu element and the menu-button element
let $menu = $(".menu");
let $menuButton = $(".menu-button");

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
let toggleMenu = () => {
    $(".menu").toggleClass("menu--open");
}

//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
$(".menu-button").click(toggleMenu);

//animations
$( ".menu-button" ).click(function() {
    $( ".menu" ).animate({
      opacity: .50,
      left: "+=50",
      height: "toggle"
    }, 1000, function() {
      // Animation complete.
    });
  });