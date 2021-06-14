/*
# -------------------------------------------------------------------------------------------------
#
# Name: typing.js
# Version: 0.0.2
#
# Summary: alexcamargos.github.io
#          My Personal Portfolio.
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/


// TypeIt - The most versatile animated typing utility on the planet.
// Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
// URL: https://typeitjs.com

new TypeIt('#typing', {
    strings: [
        'student.',
        'developer.',
        'back-end developer.',
        'front-end developer.',
        'Junior full stack developer.'
    ],
    waitUntilVisible: true,
    speed: 150,
    deleteSpeed: 75,
    delay: 500,
    lifeLike: true,
    breakLines: false,
    loop: true,
}).go();