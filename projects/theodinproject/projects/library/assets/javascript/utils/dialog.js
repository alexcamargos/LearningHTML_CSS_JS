// -------------------------------------------------------------------------------------------------
// Name: dialog.js
// Version: 0.0.5
//
// Summary: Full Stack JavaScript Path
//          Project: Library
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Get the dialog elements.
let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let bookRelease = document.getElementById('book-release-year');
let bookPages = document.getElementById('book-total-pages');
let bookPagesRead = document.getElementById('book-pages-read');
let bookRead = document.getElementById('book-read');

function getDialogValues() {
    // Get the values from the dialog.

    return {
        title: bookTitle.value,
        author: bookAuthor.value,
        release: parseInt(bookRelease.value),
        pages: parseInt(bookPages.value),
        pagesRead: parseInt(bookPagesRead.value),
        read: bookRead.checked,
    };
}

function setDialogValues(book) {
    // Set the values in the dialog.

    bookTitle.value = book.title;
    bookAuthor.value = book.author;
    bookRelease.value = book.release;
    bookPages.value = book.pages;
    bookPagesRead.value = book.pagesRead;
    bookRead.checked = book.read;
}

export { getDialogValues, setDialogValues };
