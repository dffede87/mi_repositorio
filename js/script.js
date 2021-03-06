window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
    $('.animate__animated').addClass('animate__fadeInDown')
})

$(document).ready(function() {
    var height = $(window).height();
    $('#slider').height(height);
});

/* Sticky Header */

var headerPosition = $('.header').offset().top;

$(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    if(scrollValue > headerPosition) {
        $('.header').addClass('sticky');
        $('.header').removeClass('unsticky');
        $('.logoImg').addClass('logoSticky');
    } else {
        $('.header').removeClass('sticky');
        $('.header').addClass('unsticky');
        $('.logoImg').removeClass('logoSticky');
    }
});