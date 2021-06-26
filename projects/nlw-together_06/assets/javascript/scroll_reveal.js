/*
# -------------------------------------------------------------------------------------------------
#
# Name: scroll_reveal.js
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

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
});

scrollReveal.reveal(
    `
    #home picture,
    #home .main__content,
    #about picture,
    #about .about__content,
    #services header,
    #services .services-video__wrapper,
    #services .services-cards .card,
    #services .services-packages .card,
    #testimonials .testimonials-wrapper,
    #contact header,
    #contact .contacts,
    #contact .google-maps,
    footer .brand,
    footer .social
    `,
    {
        interval: 80,
    }
);
