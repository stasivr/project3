// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     adaptiveHeight: true,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="../icons/prevarrow.png"></button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="../icons/nextarrow.png"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   });
// });

// const slider = tns({
//   container: ".carousel__inner",
//   items: 1,
//   slideBy: "page",
//   autoplay: false,
//   controls: false,
//   nav: false,
// });

// document.querySelector(".prev").addEventListener("click", function () {
//   slider.goTo("prev");
// });
// document.querySelector(".next").addEventListener("click", function () {
//   slider.goTo("next");
// });
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      900: {},
    },
    items: 1,
    loop: true,
    autoHeight: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    navText: [
      '<span class="arrow-owl arrow-left"><img src="icons/prevarrow.png"></span>',
      '<span class="arrow-owl arrow-right"><img src="icons/nextarrow.png"></span>',
    ],
  });
});
