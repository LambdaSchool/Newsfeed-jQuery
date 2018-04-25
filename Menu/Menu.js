//Using jQuery, select the menu element and the menu-button element
const menu = $(".menu");
const menuButton = $(".menu-button")

var tl = new TimelineLite({paused:true, reversed:true});

tl.staggerFromTo(menu, 1.5,
    {rotationX:-90, transformOrigin:"50% 0%"},
    {rotationX:0, ease:Elastic.easeOut}, 0.4)

menuButton.on('click', function() {
    
  menu.toggleClass("menu--open");

  tl.reversed() ? tl.play() : tl.pause(0).reversed(true);
  
});