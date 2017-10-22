$(document).ready(function(){
  $(".button-collapse").sideNav({
    menuWidth: 200
  });
  $('#textarea1').trigger('autoresize');
  $('.submit').click(function () {
    $('.result').toggle();
  });
});

