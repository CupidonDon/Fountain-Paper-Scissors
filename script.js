const fantanaButton = document.getElementById("fantana_btn");
const foarfeceButton = document.getElementById("foarfece_btn");
const hartieButton = document.getElementById("hartie_btn");
let resultContainer = document.getElementById("result");

fantanaButton.onclick = () => {
  clearResult();
  makeChoice("Fântâna");
};

foarfeceButton.onclick = () => {
  clearResult();
  makeChoice("Foarfece");
};

hartieButton.onclick = () => {
  clearResult();
  makeChoice("Hârtie");
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
    displayResult("Pierdut!", "wasted");
  } else {
    displayResult("Câștigat!", "win");
  }
}

function displayResult(message, className) {
  resultContainer.insertAdjacentHTML(
    "afterbegin",
    `<p class="${className}">${message}</p>`
  );
}
