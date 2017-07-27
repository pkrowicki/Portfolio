$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {

    if (!active1) $(this).find('.test1').css({'background-color': '#282828', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'background-color': '#282828', 'transform': 'none'});
     if (!active2) $(this).find('.test2').css({'background-color': '#282828', 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({'background-color': '#141414', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': '#282828', 'transform': 'translate(105px,60px)'});
    else $(this).find('.test3').css({'background-color': '#141414', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': '#282828', 'transform': 'translate(125px,0px)'});
    else $(this).find('.test4').css({'background-color': '#141414', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;

    });
});
