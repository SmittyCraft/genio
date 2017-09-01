var activeColor = '';

$(document).ready(function () {
  $('.palette').click(function () {
    activeColor = $(this).css('backgroundColor');
  });

  $('.square').click(function () {
    $(this).css({backgroundColor: activeColor});
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
  
  return centers.yellow.css('backgroundColor') === 'rgb(255, 255, 0)' && centers.orange.css('backgroundColor') === 'rgb(255, 159, 0)' && centers.blue.css('backgroundColor') === 'rgb(20, 38, 173)' && centers.red.css('backgroundColor') === 'rgb(173, 20, 20)' && centers.green.css('backgroundColor') === 'rgb(0, 145, 0)' && centers.white.css('backgroundColor') === 'rgb(255, 255, 255)';
}

// An object storing more objects in which pieces' posistions and more are held
// If you don't know how to solve a Rubik's Cube, this cube will make NO sense. I would recommend you understand the Rubik's cube before messing with the code.
var positions = {
  corners: {
    wrb: null,
    wbo: null,
    wog: null,
    wgr: null,
    ybr: null,
    yrg: null,
    ygo: null,
    yob: null
  },
  
  edges: {
    wr: null,
    wb: null,
    wo: null,
    wg: null,
    yb: null,
    yr: null,
    yg: null,
    yo: null
  }
};



$('#solve').click(function () {
  if (validateCube()) {
    
  } else {
    alert('Uh oh, your cube is invalid. Make sure you didn\'t change the color of any center pieces, and that you have nine of each color on the cube.');
  }
});
