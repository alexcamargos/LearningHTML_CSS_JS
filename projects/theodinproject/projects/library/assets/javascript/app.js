// -------------------------------------------------------------------------------------------------
// Name: app.js
// Version: 0.0.12
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
import { render } from './render.js';
import { getDialogValues, setDialogValues } from './utils/dialog.js';

// Show/Hide the dialog to add/edit a new book.
var dialog = document.getElementById('add_book_dialog');
var overlay = document.getElementById('overlay');

window.showDialog = function () {
    // Show the dialog and overlay.
    dialog.show();
    dialog.classList.add('dialog-scale');
    overlay.classList.add('active');
};

window.closeDialog = function () {
    // Hide the dialog and overlay.
    dialog.close();
    dialog.classList.remove('dialog-scale');
    overlay.classList.remove('active');
};

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

        // Update the book in the library.
        myLibrary.updateBook(newBook);
        localStorage.saveLibrary(myLibrary);

        render();
    }
});
