/*
# -------------------------------------------------------------------------------------------------
#
# Name: header_scroll.js
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

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
