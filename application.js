(function($) {
  var resize_header = function () {
    var h = $(window).height();
    $(".header-outer").height(h);
  }

  $(function(){
    resize_header();
    $(window).resize(function(){
      resize_header();
    });
  });
})(jQuery);
