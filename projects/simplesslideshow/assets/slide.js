/*
# -------------------------------------------------------------------------------------------------
#
# Name: slide.js
# Version: 1.0.0
#
# Summary: JavaScript Simples Slideshow
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/



// 1.) Declaring variables for different slides
// note: make sure to use backticks -> ``, not quotes -> '' 
// when making your own slides, they are don't work the same way

var slide1 = `
    <div class="slide">

        <h3>1. It is the only language used for:</h3>

        <ul>
            <li>Making websites interactive</li>
            <li>Building applications people can run in the browser</li>
        </ul>
        <p>
            Since it's the only language that can do these things, most companies use JavaScript. That makes it a good
            language if you're looking to land your first development job.
        </p>
    </div>
`

var slide2 = `
    <div class="slide">

        <h3>2. But it can also be used for:</h3>

        <ul>
            <li>Programming servers</li>
            <li>Creating mobile apps</li>
            <li>Building Desktop apps</li>
            <li>Processing data</li>
            <li>Making games</li>
            <li>Automating things</li>
            <li>Much much more...</li>
        </ul>
        <p>
            Which means you keep your options open in terms of what you want to be able to do!
        </p>
    </div>
`

var slide3 = `
    <div class="slide">

        <h3>3. Other reasons:</h3>

        <ul>
            <li>Fun way to learn programming</li>
            <li>Easy to start! Just use the browser</li>
            <li>JavaScript allows you to program in multiple "styles"</li>
            <li>Lots of interesing libraries you can use</li>
        </ul>
    </div>
`

// 2.) Declaring function to display each slide

function displaySlide1() {
    document.getElementById('slides').innerHTML = slide1
    document.getElementById('slides').scrollIntoView -= 10;
};

function displaySlide2() {
    document.getElementById('slides').innerHTML = slide2
};

function displaySlide3() {
    document.getElementById('slides').innerHTML = slide3
};


// 3.) Adding the event listeners to the buttons and
// Adding the displaySlide functions as event handlers

document.getElementById('reasons1').addEventListener('click', displaySlide1);
document.getElementById('reasons2').addEventListener('click', displaySlide2);
document.getElementById('reasons3').addEventListener('click', displaySlide3);