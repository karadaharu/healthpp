$(document).ready(function(){
  Materialize.updateTextFields();
  $(".button-collapse").sideNav({
    menuWidth: 200
  });
  $('.on-edit').hide();
  $('#textarea1').trigger('autoresize');
  $('.submit').click(function () {
    if ($('.on-edit').is(":visible")) {
      // $('.off-edit').empty();
      // let label = $('<label></label>').text('Describe treatments here').attr('for','textarea1');
      // label.css('margin-top','-25px');
      // label.css('font-size','0.8rem');
      // $('.off-edit').append(label);
      // let content = $('#textarea1').text();
      // let sentenses = content.split("\n\n");
      // let colors = ['#b4dcea', '#c8e6c9', '#ffe4c2'];
      // for (let i in sentenses) {
      //   let sentense = sentenses[i];
      //   let p = $('<p></p>').append(sentense);
      //   p.css('background-color',colors[i]);
      //   $('.off-edit').append(p);
      // }
    } 
    $('.on-edit').toggle();
    $('.off-edit').toggle();
    $('.result').toggle();
  });

  $('.off-edit').click(function() {
    $('.on-edit').toggle();
    $('.off-edit').toggle();
    $('.result').toggle();
  });

  // Code Selection
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

  let colors = ['#b4dcea', '#c8e6c9'];
  $('.procedure-1').css('background-color', colors[0]);
  $('.tab-a').click(function() {
    let target = parseInt($(this).data('target'));
    $('.procedure-'+target).css('background-color', colors[target-1]);
    if (target == 1) {
      $('.procedure-2').css('background-color', 'transparent');
    } else {
      $('.procedure-1').css('background-color', 'transparent');
    }
  });

  // Toggle Favorite 
  $('.icon-favorite').click(function () {
    let icon = $(this).children().first()
    if ( icon.text() === 'star') {
      icon.text('star_border');
    } else {
      icon.text('star');
    }
  });

  // Initialize description
  let descriptions = $('.description');
  for (var i = 0; i < descriptions.length; ++i) {
    let full_text = $(descriptions[i]).data('full');
    let max_len = 60;
    if (full_text.length > max_len) {
      $(descriptions[i]).text(full_text.slice(0, max_len) + '...');
      $(descriptions[i]).data('isfull', 'false');

      $(descriptions[i]).click(function() {
        console.log('aaa');
        full_text = $(this).data('full');
        if ( $(this).data('isfull') === 'false') {
          $(this).text(full_text);
          $(this).data('isfull', 'true');
        } else {
          $(this).text(full_text.slice(0, max_len) + '...');
          $(this).data('isfull', 'false');
        }
      });

    } else {
      $(descriptions[i]).text(full_text);
    }
  }
  
});

