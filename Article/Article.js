/* Using jQuery, select all the article elements */
let articles = $('.articles').map(function(index, element){})



  class Article {
    /* The constructor will take an element as it's only argument */
    constructor(element, expandButton) {


      /* 
        We need to make sure the element being passed to us is a jQuery element.
        To do so, wrap the element in jQuery syntax. 
      */
      this.element = $(expandButton);
      /* 
        Using our new reference to the element, find the expand button within 
        the element and set a new property on the Article class. 
      */
      this.expandButton.text('Click to Expand')
      /* 
        Using our new reference to the expandButton, use jQuery to set the inner
        text on the button. 
      */
      this.expandButton.click(this.expandArticle)
      /* 
        Set a click handler on the expand button (or article element), calling 
        the expandArticle method. 
      */
    }

    expandArticle() { article.removeClass('h2')
      /* Using our reference to the article element, add or remove a class */
    }
  }

  
  

