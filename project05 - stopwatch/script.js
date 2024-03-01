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
}

function reset() {
    console.log("Reset function called.");

    // Store the current stopwatch value
    const currentTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    console.log("Current time:", currentTime);

    // Log the previous content of theTimeSpent
    console.log("Previous content of theTimeSpent:", theTimeSpent.textContent);

    // Update the display with the current stopwatch value
    theTimeSpent.textContent = currentTime;
    console.log("Updated content of theTimeSpent:", theTimeSpent.textContent);

    // Make the trackerOverlay visible
    trackerOverlay.style.visibility = "visible";

    if (timer) {
        clearInterval(timer);
    }

    // Reset the timer
    timer = null;

    // Reset the values of hours, minutes, and seconds
    [seconds, minutes, hours] = [0, 0, 0];

    // Update the display to show 00:00:00
    theTime.innerHTML = `00:00:00`;
}

function stop() {
    clearInterval(timer)
}

// Event Listeners
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
});

theStartButton.addEventListener("click", watchStart); // Start

// Event listener for the stop button
firstSideButton.addEventListener("click", () => {
    isClicked = true;
});

// Event listener for the reset button
secondSideButton.addEventListener("click", () => {
    if (isClicked) {
        reset();
        trackerOverlay.style.visibility = "visible";
        console.log(theTimeSpent.textContent);
    }
});
