/* Using jQuery, select all the article elements */
let articles = $(".article");
// console.log(articles[1]);


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
    this.expandButton = this.element.find(".expandButton");
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    this.expandButton.text("Expand")
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    this.expandButton.click(() => { this.expandArticle() });

    //this is all stretch
    this.markRead = this.element.find(".markRead");
    this.markRead.text("Mark As Read");
    this.markRead.click(() => { this.hideArticle() });
  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
    // this.element.toggleClass("article-open")
    if(this.expandButton.text() === "Expand"){
      this.element.animate({
        //scrollHeight knows how many px an element needs.  this works unless you expand the artical and then resize the screen.
        height: this.element.get(0).scrollHeight,
      }, 1500);
  
      this.expandButton.text("Close");
    } else {
      this.element.animate({
        height: "50px",
      }, 1500);
      this.expandButton.text("Expand");
    }
  }
  //this is to hide article when the button is pressed
  hideArticle() {
    this.element.hide(1500);   
  }
}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map(function(index, element) {
  new Article(element);
});
