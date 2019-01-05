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