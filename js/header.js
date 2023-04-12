// 햄버거버튼
const burger = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const navList = document.querySelector('.nav__list');
const item = document.querySelectorAll('.item__1depth');

burger.addEventListener('click', function (e) {
  e.preventDefault();
  this.classList.toggle('active-1');
  headerNav.classList.toggle('open');
  navList.classList.toggle('open');

  // open 클래스 붙여서 버튼누르면 나오는 텍스트 모션
  item.forEach(function (el) {
    el.classList.toggle('open');
  });
});

// 모바일 메뉴 아코디언
$('.item__2depth').hide(); // 처음엔 숨겨져있기

$('.item__1depth').click(function () {
  $('.item__2depth').slideUp();

  $('.item__1depth__menu')
    .not($(this).children('.item__1depth__menu'))
    .css('color', '#444');
  // 클릭한 .item__1depth 요소 이외의 모든 .item__1depth__menu의 컬러를 #444로 변경

  if ($(this).children('.item__2depth').is(':hidden')) {
    $(this).children('.item__2depth').slideDown();
    $(this).children('.item__1depth__menu').css('color', '#0a54b8');
  } else {
    $(this).children('.item__2depth').slideUp();
    $(this).children('.item__1depth__menu').css('color', '#444');
  }
});

// 헤더 pc 메뉴 hover시 작동
$('.pcnav__list__1depth').hover(
  function () {
    $(this).children('.pcnav__list__2depth').css('display', 'block');
  },
  function () {
    var $this = $(this);
    var $child = $this.children('.pcnav__list__2depth');
    if ($child.length && !$child.is(':hover')) {
      $child.css('display', 'none');
    }
  }
);
