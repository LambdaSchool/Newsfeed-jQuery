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
        this.expandButton = `<span class='expandButton newExpandButton'>Click to Expand</span>`; // It also adds a Button and an event-listener 
        // this.ex.click = function () { // to each new Article
        //     this.expandArticle()
        // }
    }
    expandArticle() { // function to Open / Close Article
        /* Using our reference to the article element, add or remove a class */
        this.element.toggleClass("article-open");
        this.expandButton.text("Click to Close");
    }
    makeRoom() { // function to add our article to the DOM
        const newDiv = document.createElement("div") // create a new div to house our article
        newDiv.classList += "article newArticles"; // assign needed class
        // Insert our created Article into the created Div
        newDiv.insertAdjacentHTML("beforeend", `${this.title} \n ${this.date} \n ${this.body} \n ${this.expandButton}`)
        // Add our propped up div to the body of our DOM
        document.querySelector(".articles").insertAdjacentElement("beforeend", newDiv);
    }
}

// Vars to grab Submit button off the DOM & definition of Obj
const submitBtn = $("input[type=submit]")

let articleObject = {
    title: '',
    date: '',
    body: ''
}

// Function grabbing new input & creating the needed Object using the user provided input
function createObject() {
    // let title =

    articleObject.title = `<h2>${$("#title").val()}</h2>`
    articleObject.date = `<p class="date">${$("[type=date]").val()}</p>`
    articleObject.body = `<p>${$("#body").val()}</p>`
}

$(submitBtn).click(() => {
    createObject();
    const newestArticle = new NewArticle(articleObject)
    newestArticle.makeRoom();
    $(".newExpandButton").click(() => {
        $(".newArticles").toggleClass("article-open")
    })
})