// -------------------------------------------------------------------------------------------------
// Name: models.js
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

import {localStorage} from './localstorage.js';

class Library {
    // Library has a list of books.
    // The library has a method to add a book to the library.
    // The library has a method to remove a book from the library.
    // The library has a method to check if a book is in the library.
    // The library has a method to get a book from the library.
    // The library has a method to get all books from the library.
    constructor() {
        // Create a new library.
        this.books = [];
    }

    addBook(addBook) {
        // Add a book to the library.
        if (!this.isInLibrary(addBook)) {
            this.books.push(addBook);
        } else {
            return false;
        }
    }

    removeBook(bookTitle) {
        // Remove a book from the library.
        this.books = this.books.filter((book) => book.title !== bookTitle);
    }

    updateBook(updateBook) {
        // Update a book in the library.
        this.books = this.books.map((book) =>
            book.title === updateBook.title ? updateBook : book
        );
    }

    isInLibrary(newBook) {
        // Check if a book is in the library.
        return this.books.some(
            (book) =>
                book.title === newBook.title && book.author === newBook.author
        );
    }

    getBook(bookTitle) {
        // Get a book from the library.
        return this.books.find((book) => book.title === bookTitle);
    }

    getBooks() {
        // Get all books from the library.
        return this.books;
    }

    length() {
        // Get the number of books in the library.
        return this.books.length;
    }

    getTotalPages() {
        // Return the sum of all pages for each book in the library.
        return this.books.reduce((total, book) => total + book.pages, 0);
    }

    getTotalPagesRead() {
        // Get the total number of pages read in the library.
        return this.books.reduce((total, book) => total + book.pagesRead, 0);
    }

    getTotalReadBooks() {
        // Get the total number of read books in the library.
        return this.books.filter((book) => book.read === true).length;
    }
}

export { Library };
