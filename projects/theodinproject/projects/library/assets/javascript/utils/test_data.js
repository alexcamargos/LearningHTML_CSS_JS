// -------------------------------------------------------------------------------------------------
// Name: test_data.js
// Version: 0.0.1
//
// Summary: Full Stack JavaScript Path
//          Project: Library
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

import { Book } from '../models/books.js';
import { Library } from '../models/library.js';

// Create a new library.
var myLibrary = new Library();

// Create a sample library.
function populateLibrary() {
    // A default data whit Game os Thrones books.
    const DEFAULT_DATA = [
        {
            title: 'A Game of Thrones',
            author: 'George R. R. Martin',
            release: 1996,
            pages: 694,
            pagesRead: 694,
            read: true,
        },
        {
            title: 'A Clash of Kings',
            author: 'George R. R. Martin',
            release: 1998,
            pages: 768,
            pagesRead: 768,
            read: true,
        },
        {
            title: 'A Storm of Swords',
            author: 'George R. R. Martin',
            release: 2000,
            pages: 973,
            pagesRead: 973,
            read: true,
        },
        {
            title: 'A Feast for Crows',
            author: 'George R. R. Martin',
            release: 2005,
            pages: 753,
            pagesRead: 42,
            read: false,
        },
        {
            title: 'A Dance with Dragons',
            author: 'George R. R. Martin',
            release: 2011,
            pages: 1016,
            pagesRead: 0,
            read: false,
        },
    ];

    for (let i = 0; i < DEFAULT_DATA.length; i++) {
        let book = new Book(
            DEFAULT_DATA[i].title,
            DEFAULT_DATA[i].author,
            DEFAULT_DATA[i].release,
            DEFAULT_DATA[i].pages,
            DEFAULT_DATA[i].pagesRead,
            DEFAULT_DATA[i].read
        );

        myLibrary.addBook(book);

        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }
}

export { populateLibrary };
export { myLibrary };
