$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    //     fade: false,
    adaptiveHeight: false,
    //     infinite: false,
    useTransform: false,
    //     speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

    infinite: true,
    speed: 10,
    fade: true,
    // cssEase: 'linear'
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    console.log("current slide", slick)
    console.log("current slide this", currentSlide)
    if ($(document).width() < 767) {

    }
});

$(document).ready(function () {
    if (window.matchMedia("(max-width: 767px)").matches) {
        // The viewport is less than 768 pixels wide
        console.log("This is a mobile device.");
    } else {
        // The viewport is at least 768 pixels wide
        $('.slider-nav').slick('slickRemove', 4);
        console.log("This is a tablet or desktop.");
    }
});
