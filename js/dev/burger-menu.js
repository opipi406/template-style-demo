jQuery(function ($) {

  // ハンバーガーボタンのクリックイベント
  $("body").on("click", ".burger-menu__btn, .burger-overlay, .burger-menu__nav .menu__item", function () {
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
  
});