jQuery(function ($) {

  // ハンバーガーボタンのクリックイベント
  $("body").on("click", ".burger-menu__btn, .burger-overlay", function () {
    const selectors = [
      // "body",
      ".burger-menu",
      ".burger-menu__btn",
      ".burger-menu-line",
      ".burger-menu__nav",
      ".burger-overlay",
    ];
    $(selectors.join(', ')).toggleClass("open");
  });

  // グローバルナビのサブメニュー開閉イベント
  $("body").on("click", ".menu-item.accordion > a", function () {
    const $subMenu = $(this).next();
    $subMenu.slideToggle("fast", "swing")
  });
  
});