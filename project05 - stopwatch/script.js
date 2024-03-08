// Variables pt 1
const theClosebutton = window.document.getElementById("closeButton");
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

// Variables pt 2

const theOkayButton = window.document.getElementById("okayButton");
const theDontShowButton = window.document.getElementById("dontShowButton");
const mySwitch = window.document.getElementById("mySwitch");
let dontShowIsClicked = false;
let xWasClicked = false;


// Functions

function updateTabTitle() {
    document.title = `${(hours < 10 ? "0" + hours : hours)}:${(minutes < 10 ? "0" + minutes : minutes)}:${(seconds < 10 ? "0" + seconds : seconds)} - Stopwatch`;
}

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
    updateTabTitle();
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer)
    }

    timer = setInterval(stopwatch, 1000);
}

function reset() {
    console.log("Reset function called.");
    const currentTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    theTimeSpent.textContent = currentTime;
    console.log("Updated content of theTimeSpent:", theTimeSpent.textContent);
    trackerOverlay.style.visibility = "visible";

    if (timer) {
        clearInterval(timer);
    }

    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    theTime.innerHTML = `00:00:00`;
}

function stop() {
    clearInterval(timer)
}

function closePopUp() {
    trackerOverlay.style.display = "hidden";
}

function closePopUpDontShow() {
    trackerOverlay.style.display = "none";
}

// Functions pt 2 🤖

function dontShowAgainpt1() {
    dontShowIsClicked = true;

}

function cleanList() {
    while (activityList.firstChild) {
        activityList.removeChild(activityList.firstChild);
    }
}

function saveActivities() {
    localStorage.setItem('activities', activityList.innerHTML);
}




// Event Listeners

// Menu Event Listener
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
    console.log("Reset Button clicked")
    if (isClicked) {
        reset();
        trackerOverlay.style.visibility = "visible";
        console.log(theTimeSpent.textContent);
    }
});

// Event listener for the stop button
firstSideButton.addEventListener("click", () => {
    stop(); // Call the stop function
});

theClosebutton.addEventListener("click", () => {
    if (dontShowIsClicked === false) {
        console.log("Close overlay clicked!")
        closePopUp();
        activityInput.value = "";
        trackerOverlay.style.visibility = "hidden";
    } else {
        closePopUpDontShow();
        trackerOverlay.style.visibility = "hidden";
    }
});

// EVENT LISTENERS PT 2

theDontShowButton.addEventListener("click", () => {
    dontShowAgainpt1();
    mySwitch.checked = false;
    window.alert("The overlay will no longer be displayed. Click on the X to permanently close the overlay. You can re-enable it in the settings menu.")

});

mySwitch.addEventListener("click", () => {
    if (mySwitch.checked) {
        trackerOverlay.style.visibility = "hidden";
        trackerOverlay.style.display = "flex";
    } else {
        dontShowAgainpt1();
        dontShowIsClicked = false;
        trackerOverlay.style.visibility = "hidden";
        trackerOverlay.style.display = "none";
    }
});

/* Final Feature */

// Variables

const divItems = window.document.querySelector(".theItems");
const activityInput = window.document.getElementById("activity");
const activityList = document.getElementById("activityList");
let currentTime;
let activityValue;
const trashbinIcon = window.document.getElementById("trashbin-icon");

// Event Listeners

theOkayButton.addEventListener("click", () => {
    const activityValue = activityInput.value;
    const currentTime = theTimeSpent.innerHTML;
    const newActivityItem = document.createElement("li");
    newActivityItem.textContent = `${currentTime} - ${activityValue}`;
    activityList.appendChild(newActivityItem);
    activityInput.value = "";
    trackerOverlay.style.visibility = "hidden";
    saveActivities();
});

activityInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        theOkayButton.click();

        if (activityValue !== undefined && currentTime !== undefined) {
            const newActivityItem = document.createElement("li");
            newActivityItem.textContent = `${currentTime} - ${activityValue}`;
            activityList.appendChild(newActivityItem);
            activityInput.value = "";
            saveActivities();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
        activityList.innerHTML = storedActivities;
    }
});

trashbinIcon.addEventListener("click", () => {
    cleanList();
})

updateTabTitle();