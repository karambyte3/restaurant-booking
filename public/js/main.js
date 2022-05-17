'use strict'

$(document).ready(function () {
    $('.dishes-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        // speed: 300,
        slidesToShow: 2
      });

      $(window).scroll(function() {

        });

    var lastScrollTop = 0;
    $(window).on('scroll', function () {
        $("#skin_h").removeClass("skin");

        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){ // scroll down
            $('.nav-menu').addClass('collapsing-menu-down');
            setTimeout(function () {
                $('.nav-menu').removeClass('collapsing-menu-down');
                $('.nav-menu').addClass('scrolledIn');
            }, 300);
        } else { // scroll up
            $('.nav-menu').addClass('collapsing-menu-up');

            setTimeout(function () {
                $('.nav-menu').removeClass('collapsing-menu-up');
                $('.nav-menu').removeClass('scrolledIn');
            }, 300);
        }
        lastScrollTop = st;
    })

    $('body').on('click', '.smooth-scroll', function (e) {
        e.preventDefault();
        $('.smooth-scroll').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 1000, 'easeInOutQuart');
    });

    $('body').scrollspy({target: ".navbar"})

    if (typeof window !== 'undefined') { new window.simpleParallax()}
    var images = document.querySelectorAll('.parallax');
    new window.simpleParallax(images);

});
