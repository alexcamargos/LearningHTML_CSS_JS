/*
# -------------------------------------------------------------------------------------------------
#
# Name: back_to_top.js
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

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
