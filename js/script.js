/*
# -------------------------------------------------------------------------------------------------
#
# Name: script.js
# Version: 1.0.0
#
# Summary: Sign In / Sign Up
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/


var btn_signin = document.querySelector("#signin");
var btn_signup = document.querySelector("#signup");

var body = document.querySelector("body");

btn_sigin.addEventListener("click", function () {
    body.className = "sign-in-js"
});

btn_signup.addEventListener("click", function () {
    body.className = "sign-up-js"
});