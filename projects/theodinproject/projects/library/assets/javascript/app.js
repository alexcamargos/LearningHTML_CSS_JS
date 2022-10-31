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
import { populateLibrary } from './utils/test_data.js';
import { myLibrary } from './utils/test_data.js';

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

window.addBookToLibrary = function () {
    // Add a new book to the library.
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let release = parseInt(document.getElementById('book-release-year').value);
    let pages = parseInt(document.getElementById('book-total-pages').value);
    let pagesRead = parseInt(document.getElementById('book-pages-read').value);
    let read = document.getElementById('book-read').checked;

    // Create a new book.
    let book = new Book(title, author, release, pages, pagesRead, read);
    myLibrary.addBook(book);

    closeDialog();
    render();
};

// On page load, populate the library with the default data.
window.addEventListener('load', () => {
    populateLibrary();
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
        let title =
            element.target.parentNode.parentNode.children[0].children[0]
                .innerHTML;
        title = title.split(':')[1].trim();
        myLibrary.removeBook(title);

        render();
    }

    // If the user clicks on the edit button, the dialog is shown with the book's information.
    if (element.target && element.target.id == 'btn-edit') {
        // Get the book for edit.
        let title =
            element.target.parentNode.parentNode.children[0].children[0]
                .innerHTML;
        title = title.split(':')[1].trim();
        // Get the book from the library.
        let book = myLibrary.getBook(title);

        // Populate the dialog with the book's information.
        document.getElementById('book-title').value = book.title;
        document.getElementById('book-author').value = book.author;
        document.getElementById('book-release-year').value = book.release;
        document.getElementById('book-total-pages').value = book.pages;
        document.getElementById('book-pages-read').value = book.pagesRead;
        document.getElementById('book-read').checked = book.read;
        showDialog();

        // When the user clicks on the save button,
        // the old book is removed from the library and a new one is added.
        myLibrary.removeBook(book.title);

        // Create a new book with the new information.
        title = document.getElementById('book-title').value;
        author = document.getElementById('book-author').value;
        release = parseInt(document.getElementById('book-release-year').value);
        pages = parseInt(document.getElementById('book-total-pages').value);
        pagesRead = parseInt(document.getElementById('book-pages-read').value);
        read = document.getElementById('book-read').checked;
        newBook = new Book(title, author, release, pages, pagesRead, read);
        updateBookInLibrary(newBook);

        render();
    }
});
