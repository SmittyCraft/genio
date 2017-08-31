var activeColor = '';

$(document).ready(function () {
  $('.palette').click(function () {
    activeColor = $(this).css('backgroundColor');
  });

  $('.square').click(function () {
    $(this).css({backgroundColor: activeColor});
    alert(activeColor);
  });
});

function validateCube () {
  var centers = {
    yellow: $('#4'),
    orange: $('#13'),
    blue: $('#22'),
    red: $('#31'),
    green: $('#40'),
    white: $('#49')
  };
  
  return centers.yellow.css('backgroundColor') === 'rgb(255, 255, 0)' && centers.orange.css('backgroundColor') === 'rgb(255, 159, 0)' && centers.blue.css('backgroundColor') === 'rgb(20, 38, 173)' && centers.red.css('backgroundColor') === 'rgb(173, 20, 20)' && centers.green.css('backgroundColor') === 'rgb(0, 145, 0)';
}

$('#solve').click(function () {
  
});
