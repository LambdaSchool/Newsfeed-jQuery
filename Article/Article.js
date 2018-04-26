/* Using jQuery, select all the article elements */
let articles = jQuery(".article");

class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {

    /*
    We need to make sure the element being passed to us is a jQuery element.
    To do so, wrap the element in jQuery syntax.
    */

    this.element = $(element);

    /*
    Using our new reference to the element, find the expand button within
    the element and set a new property on the Article class.
    */

    this.expandButton = $(element).find(".expandButton").css({"color": "white", "background": "#388E3C", "font-size": "15px", "box-sizing": "border-box", "padding": "2px", "border": "1px solid black", "border-radius": "5px"});

    /*
    Using our new reference to the expandButton, use jQuery to set the inner
    text on the button.
    */

    this.expandButton.text("Click to Expand");

    /*
    Set a click handler on the expand button (or article element), calling the expandArticle method.
    */

    // this.expandButton.click(() => {
    //  this.expandArticle()});

    this.expandButton.click(() => {
      this.changeButtonText()});
  }

  /* Using our reference to the article element, add or remove a class */
  // expandArticle(event) {
  //  this.element.toggleClass("article-open");
  // }

  changeButtonText(event) {
    if (this.expandButton[0].innerHTML === "Click to Expand") {
      this.expandButton.text("Click to Close");
    }
    else {
      this.expandButton.text("Click to Expand");
    }
  }
}

/*
Use jQuery's .map function to map over the array of jQuery elements Within .map, we create a new instance of Article passing in each article element to the constructor
*/

articles = articles.map((index, element) => {
  new Article(element);
});
