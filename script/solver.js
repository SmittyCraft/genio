var activeColor = '';

$(document).ready(function () {
  $('.palette').click(function () {
    activeColor = $(this).css('backgroundColor');
  });

  $('.square').click(function () {
    $(this).css({backgroundColor: activeColor});
  });
});
