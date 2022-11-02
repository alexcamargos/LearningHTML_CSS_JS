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

import { convertJSONToBook } from './books.js';
import { populateLibrary, myLibrary } from '../utils/test_data.js';

class LocalStorage {
    // LocalStorage has a method to save the library in the local storage.
    // LocalStorage has a method to get the library from the local storage.
    // LocalStorage has a method to clear the library from the local storage.

    constructor(storageName) {
        // Create a new local storage.
        this.storage = window.localStorage;
        this.storageName = storageName;
    }

    saveLibrary() {
        // Save the library in the local storage.
        this.storage.setItem(this.storageName, JSON.stringify(myLibrary));
    }

    getLibrary() {
        // Get the library from the local storage.
        return this.storage.getItem(this.storageName);
    }

    clearLibrary() {
        // Clear the library from the local storage.
        this.storage.removeItem(this.storageName);
    }
}

let localStorage = new LocalStorage('myLibrary');

function checkLocalStorage() {
    // Check if myLibrary is saved in the local storage.
    let myLibraryInLocalStorage = JSON.parse(localStorage.getLibrary());
    
    if (myLibraryInLocalStorage && myLibraryInLocalStorage.books.length > 0) {
        myLibraryInLocalStorage.books.forEach((book) => {
            myLibrary.addBook(convertJSONToBook(book));
        });
    } else {
        populateLibrary();
    }
}

export { localStorage, checkLocalStorage };
