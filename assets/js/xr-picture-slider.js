$('.xr-picture-slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.xr-picture-slider-nav')
    .on('init', function(event, slick) {
        $('.xr-picture-slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 4,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
       }
        }]
    });

$('.xr-picture-slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.xr-picture-slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.xr-picture-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.xr-picture-slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.xr-picture-slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.xr-picture-slider-single').slick('slickGoTo', goToSingleSlide);
});