import "./header.sass";

document.addEventListener("DOMContentLoaded", function() {
  const $window = $(window);
  const $burger = $(".js-burger");
  const $burgerItem = $burger.find(".header__burger-item");
  const $menu = $(".js-open-nav");

  $window.on(
    "resize",
    function() {
      if ($window.outerWidth() > 768) {
        $menu.css("display", "");
        $burgerItem.hasClass("header__burger-item--open")
          ? $burgerItem.removeClass("header__burger-item--open")
          : null;
      }
    }
  );

  $burger.on("click", function() {
    $menu.slideToggle().css("display", "flex");
    $burgerItem.toggleClass("header__burger-item--open");
  });
});
