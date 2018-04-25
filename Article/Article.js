// // Using jQuery, select all the items with the class of 'article'
// let articles = $('.article');

// // Here we are creating our new component class
// class Article {
//   //the constructor will take an element as it's only argument
//   constructor(element) {

//     this.element = $(element);
//     this.expandButton = this.element.find('.expandButton');
//     this.expandButton.text('Click to Expand');
//     this.element.click(() => { this.expandArticle() })

//     /* 
//       We need to make sure the element being passed to us is a jQuery element.
//       To do so, wrap the element in jQuery syntax. 
//     */
//     this.element = $();
//     /* 
//       Using our new reference to the element, find the expand button within 
//       the element and set a new property on the Article class. 
//     */
//     this.expandButton;
//     /* 
//       Using our new reference to the expandButton, use jQuery to set the inner
//       text on the button. 
//     */

//     /* 
//       Set a click handler on the expand button (or article element), calling 
//       the expandArticle method. 
//     */

//   }

//   expandArticle() {
//     this.element.toggleClass('article-open')

//     //Animation Goal #2 Animate the article opening:

//     // if (this.element[0].style.height === '400px'){
//     //   this.element.animate({ height: '50px' }, 500)
//     //   this.expandButton.text('Click to Close')
//     // } else {
//     //   this.element.animate({height: '400px'}, 500)
//     //   this.expandButton.text('Click to Expand')
//     // }
//   }
// }


// // Use jQuery's .map function to map over the array of jQuery elements
// // Within .map, create a new instance of Article passing in each element to the constructor
// articles = articles.map((_, item) => new Article(item));

// /* 
//   Use jQuery's .map function to map over the array of jQuery elements
//   Within .map, we create a new instance of Article passing in each article element 
//   to the constructor
// */
// articles = articles.map();
// >>>>>>> master
