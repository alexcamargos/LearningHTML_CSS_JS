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

import { myLibrary } from './utils/test_data.js';

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

export { render };
