/*var startButton = document.querySelector(".start-button");




function startGame() {
    timerCount = 60;
    startButton.disabled = true;
    startTimer();
  }
  


function startTimer() {
    // Sets timer
    timer = setInterval(function () {
      timerCount--;
      timerElement.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }*/
  
  var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timerCount = 60;
var timer;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.disabled = true;
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}


