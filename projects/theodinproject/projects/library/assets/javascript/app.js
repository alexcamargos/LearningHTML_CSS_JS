// -------------------------------------------------------------------------------------------------
// Name: app.js
// Version: 0.0.8
//
// Summary: Full Stack JavaScript Path
//          Project: Library
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

import { Book } from './models/books.js';
import { localStorage, checkLocalStorage } from './models/localstorage.js';
import { myLibrary } from './utils/test_data.js';
import { getDialogValues, setDialogValues } from './utils/dialog.js';

// Show/Hide the dialog to add/edit a new book.
var dialog = document.getElementById('add_book_dialog');
var overlay = document.getElementById('overlay');

window.showDialog = function () {
    // Show the dialog.
    dialog.show();
    dialog.classList.add('dialog-scale');
    overlay.classList.add('active');
};

window.closeDialog = function () {
    // Hide the dialog.
    dialog.close();
    dialog.classList.remove('dialog-scale');
    overlay.classList.remove('active');
};

// Add new book to the library.
function render() {
    let bookList = document.getElementById('books-library');
    bookList.innerHTML = '';

    let totalBooks = document.getElementById('total-books');
    totalBooks.innerHTML = `${myLibrary.length()}`;

    let totalPages = document.getElementById('total-pages');
    totalPages.innerHTML = `${myLibrary.getTotalPages()}`;

    let totalPagesRead = document.getElementById('total-pages-read');
    totalPagesRead.innerHTML = `${myLibrary.getTotalPagesRead()}`;

    let totalReadBooks = document.getElementById('read-books');
    totalReadBooks.innerHTML = `${myLibrary.getTotalReadBooks()}`;

    let addBook = document.createElement('div');
    addBook.classList.add('add-book');

    // When the user clicks on the add book button, the dialog is shown.
    addBook.addEventListener('click', showDialog);
    addBook.innerHTML = `
            <picture>
                <img
                    src="assets/img/icons/add-book.svg"
                    alt="Add Book"
                />
            </picture>
        `;

    // For each book in the library, create a div with the book's information.
    myLibrary.getBooks().forEach((book) => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
                <div class="book-card-header">
                    <h5>Title: ${book.title}</h5>
                    <span>Author: ${book.author}</span>
                </div>
                <div class="book-card-body">
                    <span>Release Year: ${book.release}</span>
                    <span>Total Pages: ${book.pages}</span>
                    <span>Pages Read: ${book.pagesRead}</span>
                    <span>Read: ${book.read ? 'Read' : 'Not Read'}</span>
                </div>

                <div class="book-card-footer">
                    <button id="btn-edit" class="btn_edit">Edit</button>
                    <button id="btn-delete" class="btn_delete">Delete</button>
                </div>
            `;
        bookList.appendChild(bookCard);
        bookList.appendChild(addBook);
    });
}

window.clearLibrary = function () {
    // Clear the local storage.
    localStorage.clearLibrary();
    render();
};

window.addBookToLibrary = function () {
    // Add a new book to the library.

    // Get the values from the dialog.
    let newBookData = getDialogValues();

    // Create a new book.
    let book = new Book(
        myLibrary.length() + 1,
        newBookData.title,
        newBookData.author,
        newBookData.release,
        newBookData.pages,
        newBookData.pagesRead,
        newBookData.read
    );

    myLibrary.addBook(book);

    localStorage.saveLibrary(myLibrary);

    closeDialog();
    render();
};

// On page load, populate the library with the default data.
window.addEventListener('load', () => {
    checkLocalStorage();
    render();
});

// Update the book in the library.
function updateBookInLibrary(book) {
    myLibrary.updateBook(book);
}

// Delete/Edit a book from the library.
document.addEventListener('click', (element) => {
    // If the user clicks on the delete button, the book is removed from the library.
    if (element.target && element.target.id == 'btn-delete') {
        // Get the book title.
        let title =
            element.target.parentNode.parentNode.children[0].children[0]
                .innerHTML;
        // Remove the "Title: " string from the title.
        title = title.split(':')[1].trim();

        // Remove the book from the library.
        myLibrary.removeBook(title);
        localStorage.saveLibrary(myLibrary);

        render();
    }

    // If the user clicks on the edit button, the dialog is shown with the book's information.
    if (element.target && element.target.id == 'btn-edit') {
        // Get the book for edit.
        let title =
            element.target.parentNode.parentNode.children[0].children[0]
                .innerHTML;
        // Remove the "Title: " string from the title.
        title = title.split(':')[1].trim();
        // Get the book from the library.
        let bookData = myLibrary.getBook(title);

        // Populate the dialog with the book's information.
        setDialogValues(bookData);
        showDialog();

        // When the user clicks on the save button,
        // the old book is removed from the library and a new one is added.
        myLibrary.removeBook(bookData.title);

        // Create a new book with the new information.
        let newBookData = getDialogValues();
        let newBook = new Book(
            myLibrary.length() + 1,
            newBookData.title,
            newBookData.author,
            newBookData.release,
            newBookData.pages,
            newBookData.pagesRead,
            newBookData.read
        );
        updateBookInLibrary(newBook);
        localStorage.saveLibrary(myLibrary);

        render();
    }
});
