// Variables
const increaseButton = window.document.getElementById('increase');
const decreaseButton = window.document.getElementById('decrease');
let counterText = window.document.getElementById('counterNum');
counterText.innerHTML = 0
let birle = 0


// Functions

function increaseIt() {
    birle += 1
    counterText.innerHTML = birle

}

function decreaseIt() {
    birle -= 1
    counterText.innerHTML = birle
}

function cleanIt() {
    birle = 0
    counterText.innerHTML = birle
}