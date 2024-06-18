"use strict";

let targetNumber = Math.trunc(Math.random() * 20) + 1;
console.log(targetNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess < 0 || !guess) {
    displayMessage("Введите корректное число");
    //если мы угадали
  } else if (guess === targetNumber) {
    displayMessage("Вы угадали!");
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = guess;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
    //если мы не угадали
  } else if (guess !== targetNumber) {
    if (score > 0) {
      if (guess < targetNumber) {
        displayMessage("Искомое число больше");
        score--;
        document.querySelector(".score").textContent = score;
      } else if (guess > targetNumber) {
        displayMessage("Искомое число меньше");
        score--;
        document.querySelector(".score").textContent = score;
      }
    } else if (score == 0) {
      displayMessage("Вы проиграли");
    }
  }
});

//начинаем новую игру
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.background = "black";
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(targetNumber);
  displayMessage("Начните угадывать");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
