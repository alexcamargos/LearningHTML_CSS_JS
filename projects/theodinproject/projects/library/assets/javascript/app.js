// -------------------------------------------------------------------------------------------------
// Name: app.js
// Version: 0.0.1
//
// Summary: alexcamargos.github.io
//          My Personal Portfolio.
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------


var dialog = document.getElementById("add_book_dialog");

function showDialog() {
    dialog.show();
    dialog.classList.add("dialog-scale");
}

function closeDialog() {
    dialog.close();
    dialog.classList.remove("dialog-scale");
}