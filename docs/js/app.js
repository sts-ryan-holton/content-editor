"use strict";

(function ($) {
  $.fn.contentEditor = function (options) {
    var settings = $.extend({
      url: null,
      focusable: false,
      exclude: null
    }, options);
    var contentEditor = this;
    return this.each(function (t) {
      if (settings.url != null && typeof settings.url != 'number') {
        if (window.location.href.indexOf(settings.url) > -1) {
          $(contentEditor).find('*').attr('contenteditable', true);

          if (settings.exclude != null) {
            var exclude = settings.exclude;
            var excludeElements = exclude.split(',');
            $.each(excludeElements, function (i, val) {
              $(val).attr('contenteditable', false);
            });
          }
        }
      } else {
        $(contentEditor).find('*').attr('contenteditable', true);

        if (settings.exclude != null) {
          var _exclude = settings.exclude;

          var _excludeElements = _exclude.split(',');

          $.each(_excludeElements, function (i, val) {
            $(val).attr('contenteditable', false);
          });
        }
      }

      if (settings.focusable === true) {
        $(contentEditor).find('*').css('outline', 'none');
      }
    });
  };
})(jQuery);

$(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  $(".js_version-btn").click(function () {
    $(".js_version-dropdown").toggleClass("is-active");
  });

  function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

  $("#npm").click(function () {
    copyToClipboard('npm_text');
    $(this).text('Copied!');
    setTimeout(function () {
      $('#npm').text('Copy');
    }, 500);
  });

  if (Modernizr.contenteditable) {
    $('.js__support-notice').remove();
  } else {
    $('.js__support-notice').removeClass('is-hidden');
  }
});