// Variables

const theTimeSpent = window.document.getElementById("timeSpent");
const trackerOverlay = window.document.getElementById("offscreenTracker");
const hamMenu = window.document.getElementById("ham-Menoo");
const offscreenMenu = window.document.getElementById("offscreen-menoo");
const theTime = window.document.getElementById("swTime");
const firstSideButton = window.document.getElementById("sideButton1"); // Stop Button
const secondSideButton = window.document.getElementById("sideButton2"); // Reset Button
const theStartButton = window.document.getElementById("startButton"); // Start Button
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let isClicked = false;

// Functions

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    };

    theTime.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }

    timer = setInterval(stopwatch, 1000);
};

function reset() {
    if (timer) {
        clearInterval(timer);
    }

    theTimeSpent.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    theTime.innerHTML = `00:00:00`
};

function stop() {
    clearInterval(timer)
}





// Event Listeners


hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
});

theStartButton.addEventListener("click", watchStart); // Start
secondSideButton.addEventListener("click", reset); // Reset
firstSideButton.addEventListener("click", stop); // Stop


// Event listener para o botão de parar
firstSideButton.addEventListener("click", () => {
    isClicked = true;
});

// Event listener para o botão de resetar
secondSideButton.addEventListener("click", () => {
    if (isClicked) {
        theTimeSpent.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        trackerOverlay.style.visibility = "visible";
        console.log(theTimeSpent.textContent);
    }
});




