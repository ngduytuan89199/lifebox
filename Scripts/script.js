

$(function () {
    $("#main-carousel .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
    });

    $("#product-special .owl-carousel").owlCarousel({
        loop: true,
        margin:30,
        nav: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
        }
    });

    $("#gallery-carousel.owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
        }
    });

    $("#main-carousel .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
    });

    $("#back-top").click(function () {
        $("html,body").animate({ scrollTop: $("#main-menu").offset().top }, "3000");
        return false;
    });

    var $easyzoom = $('.easyzoom').easyZoom();

    var api1 = $easyzoom.filter('.easyzoom').data('easyZoom');

    $("#gallery-carousel img").click(function (e) {
        e.preventDefault();
        var src = $(this).attr("src");

        api1.swap(src, src);
    })

    $("#gallery-carousel img").hover(function (e) {
        e.preventDefault();
        var src = $(this).attr("src");

        api1.swap(src, src);
    })
});