
$(document).ready(function() {
  let originalDiverPosition = { left: $(".diver").position().left, bottom: $(".diver").css("bottom") };
  let originalSharkPosition = { left: $(".shark").position().left, bottom: $(".shark").css("bottom") };
  let originalBuoyPosition = $(".buoy").position();
  $("#startGame").on("click", function() {
    startTheGame();
  });

  $(".restart").on("click", function() {
    $(".buoy").css({top:originalBuoyPosition.top,left:originalBuoyPosition.left});
    $(".diver").css({bottom:originalDiverPosition.bottom,left:originalDiverPosition.left});
    $(".shark").css({bottom:originalSharkPosition.bottom,left:originalSharkPosition.left});
    $(".player2win, .player1win").fadeOut();
    startTheGame();
  });
});
function startTheGame() {
  $(".menu").fadeOut();
  $(document).on("keydown", function (e) {
  switch (e.which) {
    case 38: //move Diver
     $(".diver, .shark").finish().animate({
         "left": "+=20",
         "bottom": "+=10"
         });
     break;
    case 68: //move Buoy
     $(".buoy").finish().animate({
             "left": "+=25"
     });
     break;
  }
  console.log($(".diver").position().left+$(".diver").width(), $(".boat").position().left);
  if ($(".diver").position().left+$(".diver").width() >= $(".boat").position().left) {
    $(".player2win").css({
      "display": "block"
    });
    document.getElementById("soundOff").play();
    $(document).off("keydown");
  }
  else if ($(".buoy").position().left+$(".buoy").width() >= $(".boat").position().left) {
    $(".player1win").css({
      "display": "block"
    });
    document.getElementById("soundOn").play();
    $(document).off("keydown");
}
});

}
