// Variables
const cellElements = document.querySelectorAll('[data-cell]');
const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn;
const theBoard = window.document.getElementById("board");
const winningMessageElement = window.document.getElementById("winningMessageheh");
const theWinningMessage = window.document.getElementById("winningMessage");
const theRestartButton = window.document.getElementById("restartButton");
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const winningMessageheh = window.document.querySelector('[data-winning-message-text]');


// Functions

startGame()

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    });
    setBoardHoverClass()
}

function handleClick(Event) {
    const cell = Event.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endGame(false)

    };
    // Check for win
    // Check for Draw
    // Ch3eck Turns
};

function endGame(draw) {
    if (draw) {

    } else {
        winningMessageheh.innerText = `${circleTurn ? "O's Wins!" : "X's Wins!"}`
    };

    winningMessageheh.classList.add('show');
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)



    swapTurns()
    setBoardHoverClass()
};

function swapTurns() {
    circleTurn = !circleTurn
};

function setBoardHoverClass() {
    theBoard.classList.remove(X_CLASS)
    theBoard.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        theBoard.classList.add(CIRCLE_CLASS)
    } else {
        theBoard.classList.add(X_CLASS)
    }
};

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}