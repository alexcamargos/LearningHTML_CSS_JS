/*
# -------------------------------------------------------------------------------------------------
#
# Name: main.js
# Version: 1.0
#
# Summary: Simples Online Web Editor
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/


function refresh() {
    let textContent = document.getElementById('editor').value;
    document.getElementById('viewer').srcdoc = textContent;
}