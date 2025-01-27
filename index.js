// Functions i need
//update user input to the state --> bank
//take first element in bank arry and sort into state odd or even
//sort entire bank array into state odd or even

//render bank to UI
//render odds to UI
//render evens to UI
const form = document.querySelector("form");
const numInput = document.querySelector("#number");
const numSection = document.querySelector("#numberBank");
const oddsOutput = document.getElementById("oddsOut");
const evensOutput = document.getElementById("evensOut");
const state = {
  bank: [],
  odds: [],
  evens: [],
};
let numToAdd = 0;

numInput.addEventListener("change", function (e) {
  numToAdd = parseInt(e.target.value, 10);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isNaN(numToAdd) || numToAdd === "") {
    alert("Please enter a valid number");
    return;
  }
  state.bank.push(numToAdd); //-->updates the bank state ever "submit"
  renderBank();
  console.log("the bank is:", state.bank);
});
numSection.addEventListener("click", function (e) {
  if (e.target && e.target.id === "sortOne") {
    sortFirstElement();
    console.log("sortFirst was clicked");
  } else if (e.target && e.target.id === "sortAll") {
    sortAllBank();
    console.log("sortAll was clicked");
  }
});

function getUserInput() {
  //user adds numbers and updates the bank state.
}

function sortFirstElement() {
  //takes the first element fron the bank array and sorts into odd or even
  let shiftElement = state.bank.shift();
  if (shiftElement % 2 !== 0) {
    state.odds.push(shiftElement);
    renderOdds();
    console.log("odds updated", state.odds);
  } else state.evens.push(shiftElement);
  renderEvens();
  console.log("evens updated", state.evens);
}

function sortAllBank() {
  //takes the entire bank array and sorts into odds or evens
  let oddNum = [];
  let evenNum = [];
  state.bank.forEach((num) => {
    if (num % 2 !== 0) {
      oddNum.push(num);
    } else {
      evenNum.push(num);
    }
  });
  state.odds = oddNum;
  renderOdds();
  console.log("the odds state was updated", state.odds);
  state.evens = evenNum;
  renderEvens();
  console.log("the evens state updated", state.evens);
}

function renderBank() {
  //updates the bank UI
  document.querySelector("output").innerHTML = state.bank;
}

function renderOdds() {
  //updates the odss UI
  oddsOutput.innerHTML = state.odds.join(", ");
}

function renderEvens() {
  //updates the evens UI
  evensOut.innerHTML = state.evens.join(", ");
}
