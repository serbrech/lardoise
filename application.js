
function resize_header(){
  var h = $(window).height();
  $("header-outer").height(h);
}

$(function(){
  resize_header();
});
