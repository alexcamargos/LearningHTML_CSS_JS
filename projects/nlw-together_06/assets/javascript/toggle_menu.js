
const navBar = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
    element.addEventListener('click', function () {
        navBar.classList.toggle('show');
    })
}

const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        navBar.classList.remove('show');
    })
}