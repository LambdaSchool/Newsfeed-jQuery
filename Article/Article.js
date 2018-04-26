/* Using jQuery, select all the article elements */
let articles = $(".article");


class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    /* 
      We need to make sure the element being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.element = $(element); //Does this link our new instanced object to the corresponding element in the DOM?
    // Had to throw a scrollTop up here to scroll to top on page reloads
    this.element.animate({ scrollTop: 0 }, "fast");
    /* 
      Using our new reference to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton = this.element.find(".expandButton");
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    this.expandButton.text("Click to Expand");
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    this.element.click(() => this.resizeArticle()); // This part puzzles me greatly
    /*
     Have my nifty new class throw in a close/dismiss button in the buttom of every article.
    */
    this.element.closeButton = $('<button id="closeButton"></button>').text("Dismiss article.");
    this.element.append(this.element.closeButton);
    /*
     Done with an article? Swipe that thing left!
    */
    this.element.closeButton = this.element.find("#closeButton");
    this.element.closeButton.click(() => this.dismissArticle());
  }

  resizeArticle() {
    /* Using our reference to the article element, add or remove a class */
    // Original Solution
    // this.element.toggleClass("article-open")
    const buttonText = this.expandButton;
    // Thank you, William, for helping me remember I can get text from `text()`
    if (buttonText.text() === "Click to Expand") {
      this.element.animate({height:'+=350px'},300);
      // Until I can work out the css, I'm going to hide the button when it's expanded
      this.expandButton.hide();
      // Due to the nature of my toggle, I still have to change the text
      this.expandButton.text("Click to Collapse");
      // Articles now have a scroll bar. You can read all that lorem ipsum!
      this.element.addClass("article-open");
    } else {
      this.element.animate({height:'-=350px'},300);
      this.expandButton.text("Click to Expand");
      this.expandButton.show();
      // Scrolls to the top of the article. Without it, it will collapse to where ever it was scrolled at last
      this.element.animate({ scrollTop: 0 }, "fast");
      // Get rid of that scroll bar when collapsed
      this.element.removeClass("article-open");
    }
  }

  dismissArticle() {
    this.element.animate({width:'toggle'},200);
  }
}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map((index, element) => new Article(element));

function articleCreator() {
  // I'll probably refactor this into an array or object
  const input = [$("#articleCreatorInputH2").val(), $("#articleCreatorInputDate").val(), $("#articleCreatorTextarea1").val()];
  const articleH2 = $(`<h2></h2>`).text(input[0]);
  const dateP = $(`<p class="date"></p>`).text(input[1]);
  const brBreak = $(`<br>`);
  const textP = $(`<p></p>`).text(input[2]);
  const expButton = $(`<span class='expandButton'></span>`);
  // Make that div and slap it into the DOM
  const newArticleDiv = $(`<div class="article"></div>`).append(articleH2, dateP, brBreak, textP, expButton);
  const articlesDiv = $(".articles");
  articlesDiv.append(newArticleDiv); 
  $(".article").last().map((index, element) => new Article(element));
}
