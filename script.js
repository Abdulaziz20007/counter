const countDisplay = document.querySelector(".count");
const decrementBtn = document.querySelector(".control button:nth-child(1)");
const resetBtn = document.querySelector(".control button:nth-child(2)");
const incrementBtn = document.querySelector(".control button:nth-child(3)");

let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

countDisplay.textContent = count;

function updateCount(newCount) {
  count = newCount;
  countDisplay.textContent = count;
  localStorage.setItem("count", count);
}

decrementBtn.addEventListener("click", () => {
  updateCount(count - 1);
});

incrementBtn.addEventListener("click", () => {
  updateCount(count + 1);
});

resetBtn.addEventListener("click", () => {
  updateCount(0);
});
