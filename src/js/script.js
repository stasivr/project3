$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/prevarrow.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/nextarrow.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
