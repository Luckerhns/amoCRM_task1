const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

buttonEl.addEventListener("click", () => {
  inpVal = parseInt(inputEl.value) * 60
});

timerEl = setInterval(() => {
  let seconds = inpVal % 60;
  let minutes = (inpVal / 60) % 60;
  let hours = (inpVal / 60 / 60) % 60;

  if (inpVal <= 0) {
    clearInterval(timerEl);
  } else {
    let time = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${seconds}`;
    timerEl.innerHTML = time;
  }
  inpVal--;
}, 1000);
