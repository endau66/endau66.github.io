// nav button open
var $toggleButton = $(".nav-toggler");
$menuWrap = $(".nav-dropdown-menu");

$toggleButton.on("click", function () {
  $(this).toggleClass("button-open");
  $menuWrap.toggleClass("menu-show");

  // 檢查菜單是否顯示，並設定頁面滾動
  // if ($menuWrap.hasClass("menu-show")) {
  //   $("body").css("overflow", "hidden"); // 禁止頁面滾動
  // } else {
  //   $("body").css("overflow", ""); // 啟用頁面滾動
  // }
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

// 窗口宽度小于等于1200px时的特殊设置
// $(document).ready(function () {
//   function adjustNavPadding() {
//     if ($(window).width() > 1200) {
//       if ($(window).scrollTop() > 0) {
//         $(".nav").css("padding", "20px 100px");
//       } else {
//         $(".nav").css("padding", "45px 100px");
//       }
//     } else if ($(window).width() < 850) {
//       $(".nav").css("padding", "20px 80px");
//     } else {
//       // 窗口宽度小于等于1200px时的特殊设置
//       $(".nav").css("padding", "20px 50px");
//     }
//   }

//   // 初始加载时调整导航栏padding
//   adjustNavPadding();

//   // 监听滚动和调整窗口大小事件
//   $(window).on("scroll resize", function () {
//     adjustNavPadding();
//   });
// });

//window nav setting
// $(document).ready(function() {
//   $(window).on('scroll resize', function() {
//     if ($(window).width() > 1200) {
//       if ($(this).scrollTop() > 0) {
//         $('.nav').css('padding', '25px 100px');
//       } else {
//         $('.nav').css('padding', '45px 100px');
//       }
//     }
//   });
//   $(window).resize(function() {
//     if ($(window).width() <= 1200) {
//       $('.nav').css('padding', '45px 100px');
//     }
//   });
// });

// 原始觸發
// $(document).ready(function() {
//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 0) {
//       $('.nav').css('padding', '25px 100px');
//     } else {
//       $('.nav').css('padding', '45px 100px');
//     }
//   });
// });
