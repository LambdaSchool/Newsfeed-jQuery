/* Using jQuery, select all the article elements */
const articles = $(".articles");

class Article {
  /* The constructor will take an element as it's only argument */
  constructor(article) {
    /* 
      We need to make sure the element being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.article = $(article);
    /* 
      Using our new reference to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton = $(article).find('.expandButton');
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    let expansion = this.expandButton.val("Click to expand");
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    let expandArticle = () => {
      let article = $(this);
      article.toggleClass("article-open");
    };

  expansion.click(() => {
    /* Using our reference to the article element, add or remove a class */
  this.expandArticle();
});

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map();
articles.map(function(index, article){
  console.log(article.innerHTML)
});