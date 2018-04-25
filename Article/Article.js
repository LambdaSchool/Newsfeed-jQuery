/* Using jQuery, select all the article elements */
let articles = $(".article");
let buttons = $(".expandButton");


class Article {
  /* The constructor will take an element as it's only argument */
  constructor(articles, buttons) {
    /* 
      We need to make sure the element being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.element = $(articles);
    /* 
      Using our new reference to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton = $(buttons);
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    this.expandButton = this.element.find(".closeButton").text("Click to close!");
    this.expandButton.click(() => {
      this.closeArticle()
    });
    this.expandButton = this.element.find(".expandButton").text("Click to expand!");
    // this.expandButton = this.element.find(".closeButton").text("Click to close!");
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    this.expandButton.click(() => {
      this.expandArticle()
    });
  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
    this.element.toggleClass("article-open");
  }
  closeArticle() {
    this.element.removeClass("article-open");
  }
}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map((index, element) => {
  new Article(element);
});


// Constructor Function for new Articles

class NewArticle {
  constructor(articleObject) { // This depends on the input of course
    this.title = articleObject.title;
    this.date = articleObject.date;
    this.body = articleObject.body;
    this.img = articleObject.img;
    this.expandButton = `<span class='expandButton'>Click to Expand</span>`;
    this.title.click(() => {
      this.expandArticle()
    })
  }
  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
    this.element.toggleClass("article-open");
    this.expandButton.text("Click to Close");
  }
  makeRoom() {
    const newDiv = document.createElement("div") // create a new div to house our article
    newDiv.classList += "article";
    newDiv.insertAdjacentHTML("beforeend", `${this.title} \n ${this.date} \n ${this.body} \n ${this.img} \n ${this.expandButton}`)
    document.body.appendChild(newDiv);
  }
}