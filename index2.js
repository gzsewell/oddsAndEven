const form = document.querySelector("form");
const numInput = document.querySelector("#number");
const main = document.querySelector("main");
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

  state.bank.push(numToAdd);
  document.getElementById("output").innerText = state.bank.join(", ");
  console.log("Number to add to bank ", numToAdd);
});

document.getElementById("sortAll").addEventListener("click", function () {
  renderSortAll();
});

main.addEventListener("click", function (e) {
  if (e.target && e.target.tagName === "BUTTON") {
    const shiftElement = state.bank.shift();
    if (shiftElement % 2 !== 0) {
      state.odds.push(shiftElement);
    } else {
      state.evens.push(shiftElement);
    }
    render();
  }
});

function renderSortAll() {
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
  state.evens = evenNum;

  document.querySelector("#oddsOut").innerHTML = state.odds.join(", ");
  document.querySelector("#evensOut").innerHTML = state.evens.join(", ");
}

function render() {
  document.querySelector("#oddsOut").innerHTML = state.odds.join(", ");
  document.querySelector("#evensOut").innerHTML = state.evens.join(", ");
}
