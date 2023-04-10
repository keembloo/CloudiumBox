$('.with__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 600,
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  asNavFor: '.withImg__list',
});
$('.withImg__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.with__list',
  dots: false,
  arrows: false,
  variableWidth: true,
  speed: 600,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 961,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        centerMode: true,
      },
    },
  ],
});
