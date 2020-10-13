const buttonNewBook = document.querySelector(".new-book");
const buttonSave = document.querySelector(".save");
const container = document.querySelector(".container");
const form = document.querySelector(".form");

buttonNewBook.addEventListener("click", showForm);
buttonSave.addEventListener("click", addBookToLibrary);

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
}

// Book -> Void
// displays the last book on the page.

function showBook(book) {
    // myLibrary.forEach(book => createCard(book));

    let card = document.createElement("div");
    let par = document.createElement("p");

    card.classList.add("card");
    par.classList.add("par");
    par.textContent = book.info();

    card.appendChild(par);
    container.appendChild(card);
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







