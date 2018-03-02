var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector("#p1Display");
var numInput = document.querySelector("input");
var limitDisplay = document.querySelector("#limitDisplay")
var p1Score = 0;
var p2Score = 0;
var scoreLimit = 5;
var gameOver = false;

function p1ScoreUp(){
  if (!gameOver){
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score >= scoreLimit){
      p1Display.style.color = "green";
      gameOver = true;
    }
  }

}

function p2ScoreUp(){
  if (!gameOver){
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score >= scoreLimit){
      p2Display.style.color = "green";
      gameOver = true;
    }
  }

}

function resetScore(){
  p1Score = 0;
  p1Display.style.color = "black";
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.style.color = "black";
  p2Display.textContent = p2Score;
  gameOver = false;
}

function updateLimit(){
  limitDisplay.textContent = numInput.value;
  scoreLimit = numInput.value
  resetScore();
}

p1Button.addEventListener("click", p1ScoreUp)
p2Button.addEventListener("click", p2ScoreUp)
resetButton.addEventListener("click", resetScore)
numInput.addEventListener("change", updateLimit)
