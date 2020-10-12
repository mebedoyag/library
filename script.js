const button = document.querySelector(".new-book");
const container = document.querySelector(".container");
const form = document.querySelector(".form") ;

button.addEventListener("click", showForm);

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
    let flag = true;

    while (flag) {
        const t = prompt("Title: ", 0);
        const a = prompt("Author: ", 0);
        const p = prompt("Pages: ", 0);
        const r = prompt("Read: ", 0);

        const more = prompt("Do you want add more? ");
        
        myLibrary.push(new Book(t, a, p, r));

        if( more === "no") flag = false; 
    }

    return myLibrary;
}

// Void -> Void
// loops through the array and displays each book on the page.

function showBooks() {
    myLibrary.forEach(book => createCard(book));
}

// Book -> Void
// creates the box which contains each Book

function createCard(book) {
    let card = document.createElement("div");
    let par = document.createElement("p");

    card.classList.add("card");
    par.classList.add("par");
    par.textContent = book.info();

    card.appendChild(par);
    container.appendChild(card);
}

// Void -> Void
// shows the form, changing the display property

function showForm() {
    form.style.display = "block";
}






