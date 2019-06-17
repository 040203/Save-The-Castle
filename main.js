











window.onload = function(){

//VARIABLE SONIDO
let audio = new Audio("./audio/Game 4.mp3");
audio.play()




  

//silenciar o reproducir sonido
function muteSound() {
    if (audio.paused) {
      audio.play();
      $(".audio").attr("src", "./img/music on.svg");
    } else {
      audio.pause();
      $(".audio").attr("src", "./img/music off.svg");
    }
  }



 $(".audio").click(function() {
   muteSound();
 });


}