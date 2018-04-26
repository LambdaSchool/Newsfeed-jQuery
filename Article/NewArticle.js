// Constructor Function for new Articles
// This Class relies on the input passing an Object, calling new NewArticle and then calling it's make Room function
// to manipulate the DOM in a way that it is added. 
// The new Article will use all existing css / and animations

class NewArticle {
    constructor(articleObject) { // My Constructor will accept an Object and extracts Title, Date, Body (Text), and an Image
        this.title = articleObject.title;
        this.date = articleObject.date;
        this.body = articleObject.body;
        this.img = articleObject.img;
        this.expandButton = `<span class='expandButton'>Click to Expand</span>`; // It also adds a Button and an event-listener 
        this.title.click(() => { // to each new Article
            this.expandArticle()
        })
    }
    expandArticle() { // function to Open / Close Article
        /* Using our reference to the article element, add or remove a class */
        this.element.toggleClass("article-open");
        this.expandButton.text("Click to Close");
    }
    makeRoom() { // function to add our article to the DOM
        const newDiv = document.createElement("div") // create a new div to house our article
        newDiv.classList += "article"; // assign needed class
        // Insert our created Article into the created Div
        newDiv.insertAdjacentHTML("beforeend", `${this.title} \n ${this.date} \n ${this.body} \n ${this.img} \n ${this.expandButton}`)
        // Add our propped up div to the body of our DOM
        document.body.appendChild(newDiv);
    }
}