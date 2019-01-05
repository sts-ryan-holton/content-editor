(function($) {
  $.fn.contentEditor = function( options ) {
    const settings = $.extend({
      url:             null,
      focusable:       false,
      exclude:         null
    }, options)
    const contentEditor = this
    return this.each(function(t) {
      if (settings.url != null && typeof settings.url != 'number') {
        if (window.location.href.indexOf(settings.url) > -1) {
          $(contentEditor).find('*').attr('contenteditable', true)
          if (settings.exclude != null) {
            let exclude = settings.exclude
            let excludeElements = exclude.split(',')
            $.each(excludeElements, function(i, val) {
              $(val).attr('contenteditable', false)
            })
          }
        }
      } else {
        $(contentEditor).find('*').attr('contenteditable', true)
        if (settings.exclude != null) {
          let exclude = settings.exclude
          let excludeElements = exclude.split(',')
          $.each(excludeElements, function(i, val) {
            $(val).attr('contenteditable', false)
          })
        }
      }
      if (settings.focusable === true) {
        $(contentEditor).find('*').css('outline', 'none')
      }
    })
  }
}(jQuery))
