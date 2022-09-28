$(document).ready(function(){
    $('.color-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      speed: 10,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });