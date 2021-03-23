'use strict';

// Global Variables.
const localStorageBookKey = 'books';
let books = getBooksFromStorage();

books?.forEach(function (book) {
    addBookToTable(book);
});

function getLocalStorageItem(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
}

function setLocalStorageItem(itemName, itemValue) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
}

function getBooksFromStorage() {
    let data = getLocalStorageItem(localStorageBookKey);
    return data ? data : [];
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

function addBookToTable(book) {
    const list = getElementById('booksList');

    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td> <a href="#"> <i class="fa fa-pencil fa-fw" aria-hidden="true" style="color:blue;"></i> </a> </td>
      <td> <a href="#"> <i class="fa fa-trash-o fa-lg"  aria-hidden="true" style="color:red;"></i> </a> </td>
    `;

    list.appendChild(row);
}

getElementById("btnAddBook").addEventListener("click", function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value;

    const book = new Book(title, author);

    addBookToTable(book);

    books.push(book);

    setLocalStorageItem(localStorageBookKey, books);
});

function getElementById(elementId) {

    return document.getElementById(elementId);
}

