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
    document.body.classList.add("guess-win");
    document.querySelector(".number").textContent = guess;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
    //если мы не угадали
  } else if (guess !== targetNumber) {
    if (score > 1) {
      if (guess < targetNumber) {
        score--;
        document.querySelector(".score").textContent = score;
        displayMessage("Искомое число больше");
      } else if (guess > targetNumber) {
        score--;
        document.querySelector(".score").textContent = score;
        displayMessage("Искомое число меньше");
      }
    } else {
      displayMessage("Вы проиграли");
      document.querySelector("h1").textContent = "Загаданное число";
      document.body.classList.add("guess-lose");
      document.querySelector(".number").classList.add("number-lose");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = targetNumber;
    }
  }
});

//начинаем новую игру
document.querySelector(".again").addEventListener("click", function () {
  document.body.classList.remove("guess-win");
  document.body.classList.remove("guess-lose");
  document.querySelector(".number").classList.remove("number-lose");
  document.querySelector("h1").textContent = "Угадайте число";
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(targetNumber);
  displayMessage("Введите число");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
