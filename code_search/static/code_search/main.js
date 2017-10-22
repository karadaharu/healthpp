console.log('main');
$(".button-collapse").sideNav();
$('#textarea1').trigger('autoresize');
$('.result').hide();
$('.submit').click(function () {
  $('.result').show();
});
