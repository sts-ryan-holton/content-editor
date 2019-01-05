(function($) {
  $.fn.contentEditor = function( options ) {
    const settings = $.extend({
      urlQuery:        null,
      removeFocus:     false,
      excludeItems:    null
    }, options);
    const contentEditor = this
    return this.each(function(t) {
      if (settings.urlQuery != null) {
        if (window.location.href.indexOf(settings.urlQuery) > -1) {
          $(contentEditor).find('*').attr('contenteditable', true);
          if (settings.excludeItems != null) {
            var exclude = settings.excludeItems;
            var excludeElements = exclude.split(",");
            $.each(excludeElements, function(i, val) {
              $(val).attr('contenteditable', false);
            });
          }
        }
      } else {
        $(contentEditor).find('*').attr('contenteditable', true);
        if (settings.excludeItems != null) {
          var exclude = settings.excludeItems;
          var excludeElements = exclude.split(",");
          $.each(excludeElements, function(i, val) {
            $(val).attr('contenteditable', false);
          });
        }
        if (window.location.href.indexOf(settings.urlQuery) > -1) {
          console.log('jQuery Content Editor: Warning: You do not need to specify a URL query with urlQuery enabled.')
        }
      }
      if (settings.removeFocus == true) {
        $(contentEditor).find('*').css('outline', 'none');
        console.log('jQuery Content Editor: For accessibility reasons we recommend keeping focus enabled.')
      }
    })
  }
}(jQuery))
