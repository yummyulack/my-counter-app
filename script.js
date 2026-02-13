const STORAGE_KEY = "counter";

let count = parseInt(localStorage.getItem(STORAGE_KEY), 10);
if (Number.isNaN(count)) count = 0;

const landing = document.getElementById("landing");
const counterApp = document.getElementById("counter-app");
const valueEl = document.getElementById("counter-value");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function showCounter() {
  if (landing) landing.classList.add("view--hidden");
  if (counterApp) counterApp.classList.remove("view--hidden");
}

if (landing && counterApp) {
  landing.addEventListener("click", showCounter);
}

function save() {
  localStorage.setItem(STORAGE_KEY, count);
}

function render() {
  valueEl.textContent = count;
}

incBtn.addEventListener("click", () => {
  count++;
  save();
  render();
});

decBtn.addEventListener("click", () => {
  count--;
  save();
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  save();
  render();
});

render();
