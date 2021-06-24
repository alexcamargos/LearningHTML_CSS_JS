const backToTopButton = document.getElementById('back-to-top');

console.log(backToTopButton);


window.addEventListener('scroll', function () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
