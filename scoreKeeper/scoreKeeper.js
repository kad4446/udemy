console.log("Connected");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var scoreH1 = document.querySelector("h1");
var p1Header = document.getElementById("p1Score");
var p2Header = document.getElementById("p2Score");
var maxScoreInput = document.querySelector("input");
var maxScoreInputHeader = document.getElementById("maxScoreInput");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
   if (!gameOver) {
      p1Score++;
      if (p1Score === maxScore) {
         p1Header.classList.add("winner");
         gameOver = true;
      }
   }

   p1Header.textContent = p1Score;
   // if (Number(maxScoreInput.value) !== 0) {
   //    maxScore = Number(maxScoreInput.value);
   // }
});
p2Button.addEventListener("click", function() {
   if (!gameOver) {
      p2Score++;
      if (p2Score === maxScore) {
         p2Header.classList.add("winner");
         gameOver = true;
      }
   }

   p2Header.textContent = p2Score;
   // if (Number(maxScoreInput.value) !== 0) {
   //    maxScore = Number(maxScoreInput.value);
   // }
});
reset.addEventListener("click", function() {
   p1Score = 0;
   p2Score = 0;
   p1Header.textContent = p1Score;
   p2Header.textContent = p2Score;
   p1Header.classList.remove("winner");
   p2Header.classList.remove("winner");
   gameOver = false;
});
maxScoreInput.addEventListener("change", function() {
   maxScore = Number(maxScoreInput.value);
   maxScoreInputHeader.textContent = maxScore;
});





