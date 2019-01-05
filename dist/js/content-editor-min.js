"use strict";

!function (n) {
  n.fn.contentEditor = function (u) {
    var l = n.extend({
      url: null,
      focusable: !1,
      exclude: null
    }, u),
        e = this;
    return this.each(function (u) {
      if (null != l.url && "number" != typeof l.url) {
        if (window.location.href.indexOf(l.url) > -1 && (n(e).find("*").attr("contenteditable", !0), null != l.exclude)) {
          var _u = l.exclude.split(",");

          n.each(_u, function (u, l) {
            n(l).attr("contenteditable", !1);
          });
        }
      } else if (n(e).find("*").attr("contenteditable", !0), null != l.exclude) {
        var _u2 = l.exclude.split(",");

        n.each(_u2, function (u, l) {
          n(l).attr("contenteditable", !1);
        });
      }

      !0 === l.focusable && n(e).find("*").css("outline", "none");
    });
  };
}(jQuery);