'use strict';

// Global Variables.
const localStorageBookKey = 'books';

displayBooks();

function displayBooks() {
    getElementById('booksList').innerText = '';

    getBooksFromStorage()?.forEach(function (book) {
        addBookToTable(book);
    });
}

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
    const table = getElementById('booksList');

    const row = document.createElement('tr');

    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td> <a href="#" class="button-edit"> <i class="fa fa-pencil fa-fw" aria-hidden="true" style="color:blue;"></i> </a> </td>
      <td> <a href="#" class="button-delete"> <i class="fa fa-trash-o fa-lg"  aria-hidden="true" style="color:red;"></i> </a> </td>
    `;

    table.appendChild(row);
}

function setMessage(formControl, message){
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showError(input, message) {
    const formControl = input.parentElement;
    // formControl.className = 'form-control error';
    // const small = formControl.querySelector('small');
    // small.innerText = message;
    setMessage(formControl, message);
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    setMessage(formControl, '');
    // formControl.className = 'form-control success';
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateRequiredFields(requiredFields) {
    let valid = true;

    requiredFields.forEach(function (field) {
        if (field.value.trim() === '') {
            showError(field, `${getFieldName(field)} is required`);
            valid = false;
        } else {
            showSuccess(field);
        }
    });

    return valid;
}

getElementById("buttonAddBook").addEventListener("click", function (event) {
    event.preventDefault();

    const titleField = getElementById('title'),
        authorField = getElementById('author');

    // TODO: Validate the fileds
    const isFormValid = validateRequiredFields([titleField, authorField]);
    console.log(`Form Valid: ${isFormValid}`);

    if(!isFormValid){
        return;
    }

    if (verifyItemExistsInLocalStorage(titleField.value.trim())) {
        // getElementById('errorForTitle').innerText = 'Book with same title already exists';

        titleField.focus();
    } else {
        const book = new Book(titleField.value, authorField.value);

        addBookToTable(book);

        addBookToLocalStorage(book);
    }
});

getElementById("buttonClear").addEventListener("click", function (event) {
    event.preventDefault();

    getElementById('title').value = '';
    getElementById('author').value = '';

    getElementById('title').focus();
});

getElementById("buttonUpdate").addEventListener("click", function (event) {
    event.preventDefault();

    const title = getElementById('title').value,
        author = getElementById('author').value;

    const booksList = getBooksFromStorage();

    booksList.forEach(function (book, index) {
        if (book.title === title) {
            booksList[index] = new Book(title, author);
        }
    });

    setLocalStorageItem(localStorageBookKey, booksList);

    displayBooks();
});

getElementById('booksList').addEventListener('click', function (e) {
    e.preventDefault();

    let currentElement = e.target;
    const bookTitle = currentElement.parentElement.parentElement.parentElement.cells[0].innerText;
    const bookAuthor = currentElement.parentElement.parentElement.parentElement.cells[1].innerText;

    if (currentElement.parentElement.className === 'button-delete') {
        currentElement.parentElement.parentElement.parentElement.remove();

        removeBookFromLocalStorage(bookTitle);
    }
    else if (currentElement.parentElement.className === 'button-edit') {
        getElementById('title').value = bookTitle;
        getElementById('author').value = bookAuthor;
    }

});

function removeBookFromLocalStorage(bookTitle) {
    const booksList = getBooksFromStorage();

    booksList.forEach(function (book, index) {
        if (book.title === bookTitle) {
            booksList.splice(index, 1);
        }
    });

    setLocalStorageItem(localStorageBookKey, booksList);
}

function verifyItemExistsInLocalStorage(bookTitle) {
    let bookFound = false;
    const booksList = getBooksFromStorage();

    booksList.forEach(function (book, index) {
        if (book.title === bookTitle) {
            bookFound = true;
        }
    });

    return bookFound;
}


function addBookToLocalStorage(book) {
    const booksList = getBooksFromStorage();

    booksList.push(book);

    setLocalStorageItem(localStorageBookKey, booksList);
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

