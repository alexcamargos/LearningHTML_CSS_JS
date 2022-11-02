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

class Book {
    // Book has a title, author, release year, total pages, pages read and a read status.
    // The read status is a boolean value that can be changed by the user.
    constructor(id, title, author, release, pages, pagesRead = 0, read = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.release = release;
        this.pages = pages;
        this.pagesRead = pagesRead;
        this.read = read;
    }
}

// Convert the JSON object to a Book object.
const convertJSONToBook = (book) => {
    return new Book(
        book.id,
        book.title,
        book.author,
        book.release,
        book.pages,
        book.pagesRead,
        book.read
    );
};


export { Book, convertJSONToBook };
