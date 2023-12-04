const fantanaButton = document.getElementById("fantana_btn");
const foarfeceButton = document.getElementById("foarfece_btn");
const hartieButton = document.getElementById("hartie_btn");
const allBtn = document.querySelectorAll(".all_btn");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
let resultContainer = document.getElementById("result");

let winScore = 0;
let loseScore = 0;

displayResult();
clearResult();

fantanaButton.onclick = () => {
  clearResult();
  allBtn.forEach((btn) => (btn.style.pointerEvents = "none"));
  setTimeout(() => {
    makeChoice("Fântâna");
    allBtn.forEach((btn) => (btn.style.pointerEvents = "auto"));
  }, 500);
};

foarfeceButton.onclick = () => {
  clearResult();
  allBtn.forEach((btn) => (btn.style.pointerEvents = "none"));
  setTimeout(() => {
    makeChoice("Foarfece");
    allBtn.forEach((btn) => (btn.style.pointerEvents = "auto"));
  }, 500);
};

hartieButton.onclick = () => {
  clearResult();
  allBtn.forEach((btn) => (btn.style.pointerEvents = "none"));
  setTimeout(() => {
    makeChoice("Hârtie");
    allBtn.forEach((btn) => (btn.style.pointerEvents = "auto"));
  }, 500);
};

function clearResult() {
  if (resultContainer.hasChildNodes()) {
    resultContainer.removeChild(resultContainer.childNodes[0]);
  }
}

function makeChoice(playerChoice) {
  const options = ["Fântâna", "Foarfece", "Hârtie"];

  let computerChoice = getRandomIntInclusive(0, 2);
  compareChoices(playerChoice, options[computerChoice]);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayResult("Egalitate!", "equality");
  } else if (
    (playerChoice === "Fântâna" && computerChoice === "Hârtie") ||
    (playerChoice === "Foarfece" && computerChoice === "Fântâna") ||
    (playerChoice === "Hârtie" && computerChoice === "Foarfece")
  ) {
    loseFunction();
    displayResult("Pierdut!", "wasted");
  } else {
    winFunction();
    displayResult("Câștigat!", "win");
  }
}

function displayResult(message, className) {
  resultContainer.insertAdjacentHTML(
    "afterbegin",
    `<p class="${className}">${message}</p>`
  );

  win.innerHTML = winScore.toString();
  lose.innerHTML = loseScore.toString();
}

function loseFunction() {
  loseScore++;
}
function winFunction() {
  winScore++;
}
