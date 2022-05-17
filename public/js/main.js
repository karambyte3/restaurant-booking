'use strict'

// menu slide animation
var lastScrollTop = 0;
function menuAnimation () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var $navMenuEl = $('.nav-menu');
    if (st > lastScrollTop){ // scroll down
        $navMenuEl.addClass('collapsing-menu-down');
        setTimeout(function () {
            $navMenuEl.removeClass('collapsing-menu-down');
            $navMenuEl.addClass('scrolledIn');
        }, 300);
    } else { // scroll up
        $navMenuEl.addClass('collapsing-menu-up');

        setTimeout(function () {
            $navMenuEl.removeClass('collapsing-menu-up');
            $navMenuEl.removeClass('scrolledIn');
        }, 300);
    }
    lastScrollTop = st;
}

// SCROLL SPY
function scrollSpyNavigation () {
    $('body').scrollspy({target: ".navbar"});

    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    var elementTopSpace = 350;
    elems.each(function () {
        var elemTop = $(this).offset().top - elementTopSpace;

        if (currentTop > elemTop) {
            var id = $(this).attr('id');
            var navElem = $('a[href="#' + id + '"]');
            navElem.addClass('active');
            navElem.parent().siblings().find('a').removeClass('active');
        }
    })

    if ($(elems[0]).offset().top > currentTop + elementTopSpace) {
        $('.nav-menu').find('a.active').removeClass('active');
    }
}

function smoothScrollAnimation() {
    $('body').on('click', '.smooth-scroll', function (e) {
        e.preventDefault();
        var $this = $(this);

        $this.removeClass('active');
        $this.addClass('active');
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 1000, 'easeInOutQuart');
    });
}

function initParallax() {
    if (typeof window !== 'undefined') { new window.simpleParallax()}
    var images = document.querySelectorAll('.parallax');
    new window.simpleParallax(images);
}

function initSlickSlider() {
    $('.dishes-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        // speed: 300,
        slidesToShow: 2
    });
}

$(document).ready(function () {
    $(window).on('scroll', function () {
        menuAnimation();
        scrollSpyNavigation();
    });

    smoothScrollAnimation();
    initParallax();
    initSlickSlider();
});
