// nav button open
var $toggleButton = $(".nav-toggler");
$menuWrap = $(".nav-dropdown-menu");

$toggleButton.on("click", function () {
  $(this).toggleClass("button-open");
  $menuWrap.toggleClass("menu-show");
});

$(document).ready(function () {
  function adjustNavPadding() {
    if ($(window).width() > 1200) {
      if ($(window).scrollTop() > 0) {
        $(".nav").css("padding", "20px 100px");
      } else {
        $(".nav").css("padding", "45px 100px");
      }
    } else if ($(window).width() > 768) {
      $(".nav").css("padding", "20px 50px");
    } else if ($(window).width() > 650) {
      $(".nav").css("padding", "20px 50px");
    } else if ($(window).width() > 500) {
      $(".nav").css("padding", "20px 30px");
    } else {
      $(".nav").css("padding", "15px 15px");
    }
  }

  // 初始載入時調整導覽列的 padding
  adjustNavPadding();

  // 監聽滾動和視窗大小調整事件
  $(window).on("scroll resize", function () {
    adjustNavPadding();
  });
});

