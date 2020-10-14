const buttonNewBook = document.querySelector(".new-book");
const buttonClearAll = document.querySelector(".clear-all");
const buttonSave = document.querySelector(".save");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const form = document.querySelector(".form");

buttonNewBook.addEventListener("click", showForm);
buttonSave.addEventListener("click", addBookToLibrary);
//buttonClearAll.addEventListener("click", clearAll);


let myLibrary = [];

// A Book is an object:
//   new Book(String, String, Number, Boolean)
// interpretation: a card with information about books.

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Void -> String
// returns the information of a Book

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} read yet `;
};

// Void -> Array-of-Books
// takes user’s input and store every book object into myLibrary

function addBookToLibrary() {
    hideForm();

    let inputs = form.elements;
    let t = inputs[0].value; 
    let a = inputs[1].value;
    let p = inputs[2].value;
    let r = inputs[3].value;

    myLibrary.push(new Book(t, a, p, r));

    inputs[0].value = ""; 
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";

    const bookLast = getLastBook();
    showBook(bookLast);

    const buttonsDelete = document.querySelectorAll(".button-card");
    buttonsDelete.forEach((button) => {
        button.addEventListener("click", removeBookofLibrary)
    });
}

// Book -> Void
// displays the last book on the page.

function showBook(book) {

    const infoBook = book.info();

    let card = document.createElement("div");
    let par = document.createElement("p");
    let but = document.createElement("button");

    card.classList.add("card");
    par.classList.add("par");
    but.classList.add("button-card");
    but.setAttribute("id", infoBook)

    par.textContent = infoBook;
    but.textContent = "Delete";

    card.appendChild(par);
    card.appendChild(but);
    content.appendChild(card);
}

// Void -> Void
// shows and hide the form, changing the display property

function showForm() {
    form.style.display = "block";
    buttonSave.style.display = "block";
}

function hideForm() {
    form.style.display = "none";
    buttonSave.style.display = "none";
}

// Void -> Book
// gets last Book object form myLibrary

function getLastBook() {
    const indexLast = myLibrary.length;

    return myLibrary[indexLast - 1];
}

// Event -> Void
// delete a Book object from myLibrary

function removeBookofLibrary(e) {
    const bookToDelete = myLibrary.find((book) => book.info() === e.target.id);
    const bookToDeleteIndex = myLibrary.indexOf(bookToDelete);
    myLibrary.splice(bookToDeleteIndex, 1);
    console.log(myLibrary);

    clearScreen();
    showAllBooks();
}

// Void -> Void
// puts all Book objects in the page

function showAllBooks() {
    myLibrary.forEach((book) => showBook(book));
}

// Void -> Void
// delete all cards from content

function clearScreen() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => content.removeChild(card));
}