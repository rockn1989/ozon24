'use strict';

$(function() {

$('.main-slider').slick({
	arrows: false,
	dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  cssEase: 'slideToShow',
  customPaging: function(slider, i) {
  	return '<button><svg class="slider__btn"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/img/icon-svg/sprite-svg.svg#btn-'+(i+1)+'"></use></svg></button>'
  }
});


});
