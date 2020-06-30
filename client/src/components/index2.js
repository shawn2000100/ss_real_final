(function($) {
    "use strict";
    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    })

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-md').addClass('navbar-trans');
            $('.navbar-expand-md').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

})(jQuery);