//Marco A. Guzman Pull commence.
//Using jQuery, select the menu element and the menu-button element

const menu = $(".menu");
const menuButton = $(".menu-button");



//Create a callback that will be passed to the menuButton click event listener
$(".menu-button").click(function () {
    alert("Dont Forget Your LambdaNews.");
    
    
});

//Inside this callback a class should be either added or removed from menu


//Using jQuery, add a click event to the menuButton, passing it the toggleMenu function.
const toggleMenu = () => {
    $(".menu").toggleClass("menu ul li");
}
$(".menu-button").click(toggleMenu);

class MenuButton {
    constructor(element) {
        this.element = $(element)
        this.element.click(() => { this.buttonClick() })

    }
    buttonClick(event) {
        console.log("button clicked!");
    



    