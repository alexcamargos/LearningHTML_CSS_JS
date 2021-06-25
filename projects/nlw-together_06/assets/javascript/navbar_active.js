const sections = document.querySelectorAll('main section[id]');

function activateSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        console.log(document.querySelector('.menu-bar ul li a[href*=' + sectionId + ']'))

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector('.menu-bar ul li a[href*=' + sectionId + ']')
                .classList.add('active');
        } else {
            document
                .querySelector('.menu-bar ul li a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    }
}

window.addEventListener('scroll', function () {
    activateSection();
});
