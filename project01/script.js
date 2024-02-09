// variables
let cont = 0

const increaseButton = window.document.getElementById('increase')
const decreaseButton = window.document.getElementById('decrease')
const display = window.document.getElementById('counterNum')
const clearThat = window.document.getElementById('clear')

// functions

function increase() {
    cont += 1
    display.innerHTML = cont
    console.log("Added!")
}

function decrease() {
    cont -= 1
    display.innerHTML = cont
    console.log("Subtracted!")
}

function cleanIt() {
    cont = 0
    display.innerHTML = cont
    console.log("Resetted!")
}

