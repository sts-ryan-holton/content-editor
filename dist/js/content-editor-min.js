!function(e){e.fn.contentEditor=function(n){const o=e.extend({enableUrlQuery:!1,urlQuery:"contentEditable",removeFocus:!1,excludeItems:null},n),t=this;return this.each(function(n){if(1==o.enableUrlQuery){if(window.location.href.indexOf(o.urlQuery)>-1&&(e(t).find("*").attr("contenteditable",!0),null!=o.excludeItems)){var r=o.excludeItems.split(",");e.each(r,function(n,o){e(o).attr("contenteditable",!1)})}}else{if(e(t).find("*").attr("contenteditable",!0),null!=o.excludeItems){r=o.excludeItems.split(",");e.each(r,function(n,o){e(o).attr("contenteditable",!1)})}window.location.href.indexOf(o.urlQuery)>-1&&console.log("jQuery Content Editor: Warning: You do not need to specify a URL query with enableUrlQuery set to false.")}1==o.removeFocus&&(e(t).find("*").css("outline","none"),console.log("jQuery Content Editor: For accessibility reasons we recommend keeping focus enabled."))})}}(jQuery);