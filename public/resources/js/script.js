$(document).ready(function () {


    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Hello World!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Strings can be removed')
        .pauseFor(2500)
        .deleteChars(7)
        .typeString('<strong>altered!</strong>')
        .pauseFor(2500)
        .start();



    var modal = document.getElementById("modal");
    var bigBox = document.getElementById("id01")
    window.onclick = function (event) {
        if (event.target == bigBox) {
            bigBox.style.display = "none";
        }
    }
        
  /*  var nav = document.getElementById('nav');

    window.onscroll = function () {

        if (window.pageYOffset > 100) {

            nav.style.position = "fixed";
            nav.style.top = 0;

        } else {
            // nav.style.position = "absolute";
            nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
        }
    }


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});





