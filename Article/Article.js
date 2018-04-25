/* Using jQuery, select all the article elements */
let articles = $('.article');

class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    this.element = $(element);

    this.expandButton = this.element.find('.expandButton');
    this.expandButton.text('Click to Expand');
    this.expandButton.click(() => {this.expandArticle()});

    this.closeButton = this.element.find('.close');
    this.closeButton.click(() => { this.closeArticle() });
  }
  expandArticle() {
    if(this.element.hasClass('article-open')){
      this.animateCloseArticle();
    } else {
      this.animateOpenArticle();
    }
  }
  animateOpenArticle(){
    this.element.animate({
      height: '400px'
    }, () => {
      this.element.toggleClass('article-open');
      this.expandButton.text('Click to Close');
    });
  }
  animateCloseArticle(){
    this.element.animate({
      height: '50px'
    }, () => {
      this.element.toggleClass('article-open');
      this.expandButton.text('Click to Expand');
    });
  }
  closeArticle(){
    this.element.remove();
  }
}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map((index, element) => new Article(element));