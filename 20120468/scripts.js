$(document).ready(function () {
  $(".side button").click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("isChose");
  });

  $("li").click(function (e) {
    e.preventDefault();
    $("ul .isChose").removeClass("isChose");
    $(this).toggleClass("isChose");
    
  });
});
