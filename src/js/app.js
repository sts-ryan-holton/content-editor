$(function() {
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }
  $("#npm").click(function() {
    copyToClipboard('npm_text');
    $(this).text('Copied!');
    setTimeout(function(){
      $('#npm').text('Copy');
    }, 500);
  });
  if (Modernizr.contenteditable) {
    $('.js__support-notice').remove();
  } else {
    $('.js__support-notice').removeClass('is-hidden');
  }
});
