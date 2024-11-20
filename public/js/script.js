"use client";

$(window).on("load", function () {
  $("#preloader").fadeOut();
});
$(document).ready(function () {
  /*open transfer method*/
  $(".btn_addTransfer").click(function () {
    $("body,html").addClass("transfer-toggle");
    $(".btn_addTransfer").addClass("active");
  });
  $(".back_btn").click(function () {
    $("body,html").removeClass("transfer-toggle");
    $(".btn_addTransfer").removeClass("active");
  });

  /*open menu*/
  $(".menu-trigger").click(function () {
    var thisclick = $(".menu-trigger");
    if (thisclick.hasClass("active") != true) {
      thisclick.addClass("active");
      $("body,html").addClass("menu-toggle");
    } else {
      thisclick.removeClass("active");
      $("body,html").removeClass("menu-toggle");
    }
  });

  $(".js-select").each(function (i, v) {
    var that = $(this);
    var placeholder = $(that).attr("data-placeholder");
    $(that).select2({
      placeholder: placeholder,
      minimumResultsForSearch: Infinity,
    });
  });

  $(".dropdown_sort a").click(function () {
    $(".btn_filter:first-child").text($(this).text());
    $(".btn_filter:first-child").val($(this).text());

    $(".dropdown_sort").removeClass("show");
    $(".btn_filter").removeClass("show");
    return false;
  });
});
