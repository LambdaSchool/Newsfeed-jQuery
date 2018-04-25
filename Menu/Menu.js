//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");
const menuButton = $(".menu-button");

//Create a callback that will be passed to the menuButton click event listener
//Inside this callback a class should be either added or removed from menu
const toggleMenu = () => {
  if (menu.width() == 0){
    TweenMax.to(menu[0], 1, {
      width: '350'
    });
  }
  else {
    TweenMax.to(menu[0], 1, {
      width: '0'
    });
  }
}




//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
menuButton.click(toggleMenu);
