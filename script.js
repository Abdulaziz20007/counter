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

  if (count === 0) {
    decrementBtn.disabled = true;
    decrementBtn.style.opacity = "0.5";
    decrementBtn.style.cursor = "not-allowed";
  } else {
    decrementBtn.disabled = false;
    decrementBtn.style.opacity = "1";
    decrementBtn.style.cursor = "pointer";
  }
}

if (count === 0) {
  decrementBtn.disabled = true;
  decrementBtn.style.opacity = "0.5";
  decrementBtn.style.cursor = "not-allowed";
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
