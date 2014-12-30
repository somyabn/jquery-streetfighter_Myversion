$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
 .mousedown(function() {
    playHadouken(); 
    $('.how-to').hide();   
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
  .animate(
        {'left': '300px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '-212px');
        }
      );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    $('.how-to').show();
  });
})
$(document).keydown(function(event) 
 {
    if (event.keyCode == 88) 
    {
      playCool();
      $('.how-to').hide();
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
       $('.ryu-cool').show();

    }   
  })
 .keyup(function(event) 
 {
    if (event.keyCode == 88) 
    {
      $('#cool')[0].pause();
      $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-ready').show();
      $('.how-to').show();
    }
  })
function playHadouken ()
  {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
  }
  function playCool()
  {
  $('#cool')[0].volume = 0.5;
  $('#cool')[0].load();
  $('#cool')[0].play();
  }
 