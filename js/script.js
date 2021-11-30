window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})

$(document).ready(function() {
    var height = $(window).height();
    $('#slider').height(height);
});

/* Sticky Header */

var headerPosition = $('.header').offset().top;

$(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    if(scrollalue > headerPosition) {
        $('.header').addClass('sticky');
        $('.logo').addClass('logoSticky');
    } else {
        $('.header').removeClass('sticky');
        $('.logo').removeClass('logoSticky');
    }
});