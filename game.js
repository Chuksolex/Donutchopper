$(document).ready(function () {
    let score = 0;
    let gameInterval;
    let gameDuration = 30000; // 30 seconds
  
    $('#start-btn').click(function () {
      score = 0;
      $('#score').text("Score: 0");
      $('#game-area').empty();
      clearInterval(gameInterval);
  
      const startTime = Date.now();
      gameInterval = setInterval(() => {
        const now = Date.now();
        if (now - startTime >= gameDuration) {
          clearInterval(gameInterval);
          alert("Game Over! Your score is: " + score);
          return;
        }
        spawnDonut();
      }, 800);
    });
  
    function spawnDonut() {
      const donut = $('<div class="donut"></div>');
      const posX = Math.random() * 250; // 300 - 50
      donut.css({ left: posX + 'px', top: '0px' });
      $('#game-area').append(donut);
  
      const fallSpeed = Math.random() * 3000 + 2000;
  
      donut.animate({ top: '500px' }, fallSpeed, function () {
        $(this).remove();
      });
  
      donut.click(function () {
        score++;
        $('#score').text("Score: " + score);
        $(this).stop().fadeOut(200, function () {
          $(this).remove();
        });
      });
    }
  });
  