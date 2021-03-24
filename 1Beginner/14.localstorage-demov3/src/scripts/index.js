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
      <td> <a href="#" class="button-delete"> <i class="fa fa-trash-o fa-lg"  aria-hidden="true" style="color:red;"></i> </a> </td>
    `;

    list.appendChild(row);
}

getElementById("buttonAddBook").addEventListener("click", function (event) {
    event.preventDefault();

    const title = getElementById('title').value,
        author = getElementById('author').value;

    const book = new Book(title, author);

    addBookToTable(book);

    books.push(book);

    setLocalStorageItem(localStorageBookKey, books);
});

getElementById('buttonClear').addEventListener("click", function (event) {
    event.preventDefault();

    getElementById('title').value = '';
    getElementById('author').value = '';
});

getElementById("buttonUpdate").addEventListener("click", function (event) {
    event.preventDefault();

    let title = getElementById('title').value,
        author = getElementById('author').value;

    let currentElement = e.target;
    title.value = currentElement.parentElement.parentElement.parentElement.cells[0].innerText;
    author.value = currentElement.parentElement.parentElement.parentElement.cells[1].innerText;

    console.log(`${e} ${currentElement}`);
    console.log(`${currentElement.parentElement.parentElement.parentElement.cells[0].innerText}`);
});

getElementById('booksList').addEventListener('click', function (e) {
    e.preventDefault();

    let currentElement = e.target;
    const bookTitle = currentElement.parentElement.parentElement.parentElement.cells[0].innerText;

    console.log(`${e} ${currentElement}`);
    console.log(`${currentElement.parentElement.parentElement.parentElement.cells[0].innerText}`);

    if (currentElement.parentElement.className === 'button-delete') {
        currentElement.parentElement.parentElement.parentElement.remove();

        removeBookFromLocalStorage(bookTitle);
    }

});

function removeBookFromLocalStorage(bookTitle) {
    const booksList = getBooksFromStorage();

    booksList.forEach(function (book, index) {
        if (book.title === bookTitle) {
            books.splice(index, 1);
        }
    });

    setLocalStorageItem(localStorageBookKey, booksList);
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

