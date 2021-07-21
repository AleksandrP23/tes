"use strict";

$(document).ready(function () {
  $('.info-slider').slick({
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 525,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
});
$(function () {
  $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
  $(".accordion > .accordion-item").click(function () {
    $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
    $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});
//# sourceMappingURL=main.js.map
