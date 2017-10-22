$(document).ready(function(){
  Materialize.updateTextFields();
  $(".button-collapse").sideNav({
    menuWidth: 200
  });
  $('.on-edit').hide();
  $('#textarea1').trigger('autoresize');
  $('.submit').click(function () {
    if ($('.on-edit').is(":visible")) {
      $('.off-edit').empty();
      // let label = $('<p></p>').text('Treatment');
      let label = $('<label></label>').text('Treatment').attr('for','textarea1');//.addClass('label-off');
      label.css('margin-top','-25px');
      label.css('font-size','0.8rem');
      $('.off-edit').append(label);
      let content = $('#textarea1').text();
      let sentenses = content.split("\n\n");
      let colors = ['#b4dcea', '#fccae6', '#ffe4c2'];
      for (let i in sentenses) {
        let sentense = sentenses[i];
        let p = $('<p></p>').append(sentense);
        p.css('background-color',colors[i]);
        $('.off-edit').append(p);
      }
    } 
    $('.on-edit').toggle();
    $('.off-edit').toggle();
    // let div = $('<div></div>').addClass('styled-textarea materialize-textarea');
    // $('.edit-col').append(div);
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

