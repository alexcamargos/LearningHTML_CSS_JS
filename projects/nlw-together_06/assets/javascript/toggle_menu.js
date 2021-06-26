/*
# -------------------------------------------------------------------------------------------------
#
# Name: toggle_menu.js
# Version: 0.0.1
#
# Summary: NLW/Together - Origin #6
#         
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/

const navBar = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

for (const element of toggle) {
    element.addEventListener('click', function () {
        navBar.classList.toggle('show');
    });
}

for (const link of links) {
    link.addEventListener('click', function () {
        navBar.classList.remove('show');
    });
}
