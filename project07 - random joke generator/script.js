// Variables

const thehText = window.document.getElementById("theText");
const randomJokeButton = window.document.getElementById("getRandomJoke")


thehText.textContent = ""
// Functions

function loadJoke() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";

    fetch(apiUrl)
        .then(birle => birle.json())
        .then(theJoke => {
            thehText.textContent = theJoke.value;
        })
        .catch(error => {
            console.error("Error", error)
        })
}


// Event Listeners

randomJokeButton.addEventListener("click", loadJoke);