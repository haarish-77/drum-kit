var d=document.getElementsByClassName("drum");
for (var i = 0; i < d.length; i++) {
 d[i].addEventListener("click",clickFunction);
}
 function clickFunction() {
   var innerhtml = this.innerHTML;
   makeSound(innerhtml);
   buttonAnimation(innerhtml);

 }
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})
function  buttonAnimation(currentKey) {
   document.querySelector("."+currentKey).classList.add("pressed");
   setTimeout(function(){ document.querySelector("."+currentKey).classList.remove("pressed");},100);
}
function makeSound(key){
  switch (key) {
    case "w":
      var audio =new Audio("sounds/tom-1.mp3");
       audio.play();
     break;
     case "a":
       var audio =new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
     case "s":
        var audio =new Audio("sounds/tom-3.mp3");
         audio.play();
     break;
     case "d":
         var audio =new Audio("sounds/snare.mp3");
          audio.play();
     break;
     case "j":
       var audio =new Audio("sounds/tom-4.mp3");
        audio.play();
      break;
      case "k":
        var audio =new Audio("sounds/crash.mp3");
         audio.play();
       break;
       case "l":
         var audio =new Audio("sounds/tom-2.mp3");
          audio.play();
        break;

    default:console.log(buttonInnerHtml);

  }



}
