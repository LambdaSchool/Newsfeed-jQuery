class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    this.element = $(element);

    this.expandButton = this.element.find('.expandButton');
    this.expandButton.text('Click to Expand');
    this.expandButton.click(() => {this.expandArticle()});

    this.closeButton = this.element.find('.close');
    this.closeButton.click(() => { this.removeArticle() });
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
  removeArticle(){
    this.element.remove();
  }
}

// Select all the article elements
// Using map, create a new instance of Article passing in each article element to the constructor
let articles = $('.article');
articles = articles.map((index, element) => new Article(element));

// Stretch Goal: Component Constructor
const articleComponentConstructor = function(articles){
  const articleContainer = $('.articles'),
        template = `<div class="article">
                      <h2></h2>
                      <p class="date"></p>
                      <span class='expandButton'></span>
                      <span class="close"><i class="fas fa-times-circle"></i></span>
                    </div>`;

  articles.forEach(x => {
    // create html based on template
    let newArticle = $(template),
        articleBodyData = x.content.split('\n'),
        articleBody = '';
    
    newArticle.find('h2').text(x.title);
    newArticle.find('.date').text(x.date);
    articleBodyData.forEach(x => {
      let p = $('<p></p>');
      p.html(x);
      newArticle.find('.expandButton').before(p);
    });

    // pass element to new article
    new Article(newArticle);

    // insert into DOM
    articleContainer.append(newArticle);
  });
};

articleComponentConstructor(articleData);