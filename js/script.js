$(document).ready(function () {

    $('.header__menu-btn').click(function () {
        $('.header__menu-btn, .header__nav').toggleClass('active');
        $('body').toggleClass('lock')
    });

    $('.screenshots .slick-slider').slick({
        appendArrows: $('.screenshots .slick-arrows'),
        fade: true,
        infinite: false,
        mobileFirst: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    draggable: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    fade: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            }
        ],
    });

    $('.feedback .slick-slider').slick({

        adaptiveHeight: true,
        appendArrows: $('.feedback .slick-arrows'),
        draggable: false,
        fade: true,
        infinite: false,
        mobileFirst: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                    fade: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            }
        ],

    });

    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();
        $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('.tabs-content__item').removeClass('tabs-content__item--active');
        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    $('.tabs-triggers__item:first-child').click();

});