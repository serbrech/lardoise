(function() {
  var $ = jQuery;
  var resize_header = function () {
    var h = $(window).height();
    $("header-outer").height(h);
  }

  $(function(){
    resize_header();
  });
})();
