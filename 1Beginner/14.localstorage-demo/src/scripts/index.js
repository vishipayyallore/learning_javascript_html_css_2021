'use strict';

// Global Variables.
let books = getBooksFromStorage();

books?.forEach(function (book) {
    // Add book to UI
    addBookToList(book);
});

function getBooksFromStorage() {
    let data = JSON.parse(localStorage.getItem('books'));
    return data ? data : [];
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

function addBookToList(book) {
    const list = getElementById('booksList');

    // Create tr element
    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td> <i class="fa fa-pencil fa-fw" aria-hidden="true" style="color:blue;"></i> | 
      <i class="fa fa-trash-o fa-lg"  aria-hidden="true" style="color:red;"></i> </td>
    `;

    list.appendChild(row);
}

getElementById("btnAddBook").addEventListener("click", function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value;

    const book = new Book(title, author);

    addBookToList(book);

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    // console.log(`${JSON.stringify(books)}`);
});

function getElementById(elementId) {

    return document.getElementById(elementId);
}

