$(document).ready(function(){
  Materialize.updateTextFields();
  $(".button-collapse").sideNav({
    menuWidth: 200
  });
  $('#textarea1').trigger('autoresize');
  $('.submit').click(function () {
    $('.result').toggle();
  });
  $('.checkbox').click(function() {
    let code = $(this).data('code');
    let selected_codes = $('#selected_codes').prop('value');
    if ($(this).prop('checked')) {
      let selected_codes_updates = selected_codes + code + ', ';
      $('#selected_codes').attr('value', selected_codes_updates);
    } else {
      let reg_exp = new RegExp(code + ', ', "g");
      let selected_codes_updates = selected_codes.replace(reg_exp, '');
      $('#selected_codes').attr('value',selected_codes_updates);
    }
  });
});

