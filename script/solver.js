    var activeColor = 'white';
    $('.palette').click(function () {
      activeColor = $(this).css('backgroundColor');
    });

    $('.square').click(function () {
      $(this).css({backgroundColor: activeColor});
    });
