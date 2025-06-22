// $(document).ready(function () {
//     let score = 0;
//     let gameInterval;
//     let gameDuration = 30000; // 30 seconds

//     $('#start-btn').click(function () {
//       score = 0;
//       $('#score').text("Score: 0");
//       $('#game-area').empty();
//       clearInterval(gameInterval);

//       const startTime = Date.now();
//       gameInterval = setInterval(() => {
//         const now = Date.now();
//         if (now - startTime >= gameDuration) {
//           clearInterval(gameInterval);
//           alert("Game Over! Your score is: " + score);
//           return;
//         }
//         spawnDonut();
//       }, 800);
//     });

//     function spawnDonut() {
//       const donut = $('<div class="donut"></div>');
//       const posX = Math.random() * 250; // 300 - 50
//       donut.css({ left: posX + 'px', top: '0px' });
//       $('#game-area').append(donut);

//       const fallSpeed = Math.random() * 3000 + 2000;

//       donut.animate({ top: '500px' }, fallSpeed, function () {
//         $(this).remove();
//       });

//       donut.click(function () {
//         score++;
//         $('#score').text("Score: " + score);
//         $(this).stop().fadeOut(200, function () {
//           $(this).remove();
//         });
//       });
//     }
//   });
//1. Get click to start game


let score = 0;
let gameInterval;
let gameDuration = 30000;
//declaration of variables

$("#start-btn").click(function () {
  const startTime = Date.now();

  gameInterval = setInterval(function () {
                  const currentTime = Date.now();

                if (currentTime - startTime >= gameDuration) {
                  clearInterval(gameDuration);
                  alert("Game Over! Your score is: " + score);
                      return;
                }

                 createDonut();
                 
               }, 800);
});

///start button ended here

function createDonut() {
  const donut = $("<img class='donut' src='donut.png'>");
  const positionX = Math.random() * 250;
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
