let inputEl = document.querySelector("input");
let buttonEl = document.querySelector("button")
let timerEl = document.querySelector("span");
let timeMinut 
buttonEl.addEventListener('click', function() {
    timeMinut = parseInt(inputEl.value) * 60
})

timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerEl.innerHTML = strTimer;
    }
    --timeMinut;
}, 200)

