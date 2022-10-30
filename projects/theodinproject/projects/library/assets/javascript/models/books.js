// -------------------------------------------------------------------------------------------------
// Name: models.js
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

var bookID = 0;

class Book {
    // Book has a title, author, release year, total pages, pages read and a read status.
    // The read status is a boolean value that can be changed by the user.
    constructor(title, author, release, pages, pagesRead = 0, read = false) {
        this.id = bookID;
        this.title = title;
        this.author = author;
        this.release = release;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.read = read;
        bookID++;
    }
}

export { Book };
