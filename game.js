

let score = 0;
let gameInterval;
let gameDuration = 30000;
//declaration of variables

$("#start-btn").click(function () { // Clicking of Button To Start the game
  const startTime = Date.now();

  gameInterval = setInterval(function () {
                  const currentTime = Date.now();

                if (currentTime - startTime >= gameDuration) {
                  clearInterval(gameDuration);
                  alert("Game Over! Your score is: " + score);
                      return;
                }

                 createDonut();
                 
               }, 800);// Create A new donout after every 0.8secs
});

///start button ended here

function createDonut() {
  const donut = $("<img class='donut' src='donut.png'>"); //bring the donut into the dom
  const positionX = Math.random() * 250;  // Put the donut in a random position on x-axis inside the 300px with
  donut.css({ left: positionX + "px", top: "0px" });
  $("#game-area").append(donut);

   const fallSpeed = Math.random() * 3000 + 2000;

   $(donut).animate({top: "500px"}, fallSpeed, function() {
     this.remove();
    
   })
   
  $(donut).click(function(){
     score++;
     const sound = new Audio('heavysound.mp3');
     $('#score').text("Score:" + score);
    $(this).stop().fadeOut(200, function () {
      $(this).remove();
      sound.play();
    })
   })
}
