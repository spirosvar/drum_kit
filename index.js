
//setup an Event Listener
const numButtons = document.querySelectorAll(" .drum ").length; 
var audio

for(var i = 0; i<=numButtons; i++){
        if(document.querySelectorAll( ".drum" )[i] !== undefined ){
            document.querySelectorAll( ".drum" )[i].addEventListener("click", function(){
            let button = this.innerHTML;
            selectSound(button);
            buttonAnimation(button);
            
            

            }); 
        };
      }        
//set up an event listener to the whole page to listen for a key press
document.addEventListener("keypress", function(event){
   selectSound(event.key);
   buttonAnimation(event.key);
}); 


   
function selectSound(letter){

   switch(letter){
      case "w": 
         audio = new Audio( 'sounds/crash.mp3');
         audio.play();
         break;
      case "a":
         audio = new Audio( 'sounds/kick-bass.mp3');
         audio.play();
         break;
      case "s":
         audio = new Audio( 'sounds/snare.mp3');
         audio.play();
         break;
      case "d":
         audio = new Audio( 'sounds/tom-1.mp3');
         audio.play();
         break;
      case "j":
         audio = new Audio( 'sounds/tom-2.mp3');
         audio.play();
         break;
      case "k":
         audio = new Audio( 'sounds/tom-3.mp3');
         audio.play();
         break;
      case "l":
         audio = new Audio( 'sounds/tom-4.mp3');
         audio.play();
         break;
      default: 
          alert("Something went wrong sorry for the inconvenience. Please refresh the page!");
                             
      }
}

function buttonAnimation(currentKey){
var currentButton =document.querySelector("." + currentKey);
currentButton.classList.add("pressed");
setTimeout(function(){
   currentButton.classList.remove("pressed");
}, 100);
}