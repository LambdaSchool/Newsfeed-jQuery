/* Using jQuery, select all the article elements */
let articles = $('.article');


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
    this.expandButton = this.element.find('.expandButton');
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    this.expandButton.text('Click to expand');
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    this.element.click(() => {this.expandArticle()});
    this.articleP = this.element.find('.articleP')
    

  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
    this.element.toggleClass('article-open');
    this.articleP.slideToggle().css('display', 'block');
    if(this.element[0].classList[1] === 'article-open') {
      this.expandButton.text('Click to close');
    }else{
      this.expandButton.text('Click to expand');
    }
  }

}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/

articles = articles.map(function (index, element) {
  new Article(element);
});

let createArticle = function (h2, date, p) {
  let articleDiv = $("<div class='article'></div>");
  let h2El = $(`<h2>${h2}</h2>`);
  articleDiv.prepend(h2El)
  articleDiv.append($(`<p class='date'>${date}</p>`))
  articleDiv.append($("<div class='articleP'></div>"))
  articleDiv.find('.articleP').prepend($(`<p>${p}</p>`))
  articleDiv.append($("<span class='expandButton'>Click to expand</span>"))
  $('.articles').append(articleDiv)


  let showArticle = function () {
    articleDiv.toggleClass('article-open');
    articleP = articleDiv.find('.articleP')
    expandButton = articleDiv.find('.expandButton');
    articleP.slideToggle().css('display', 'block');
    if (articleDiv[0].classList[1] === 'article-open') {
      expandButton.text('Click to close');
    } else {
      expandButton.text('Click to expand');
    }
  } 
}






$('.addArticle').click(() => {
  createArticle('Intro to React', 'Nov 29th, 2018', 'dasdasdasdsa');

})