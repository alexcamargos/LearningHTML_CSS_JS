var header = $('body');

var backgrounds = new Array(
    'url(/img/showcase.jpg)',
    'url(/img/showcase1.jpg)',
    'url(/img/showcase2.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);