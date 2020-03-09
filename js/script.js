let currentPlayer = 'X';
let gameNumber = 0;

var winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const board = [...document.querySelectorAll(".box")];
board.forEach(box => box.addEventListener('click', chosenOne));

function chosenOne(e) {
    const clickedCell = e.target;
    if (clickedCell.innerHTML !== '') return
    clickedCell.innerHTML = currentPlayer;

    ResultValidation()
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameNumber++;

    if (gameNumber == 9) {
        document.querySelector(".winner").innerHTML = `Draw`
        setTimeout(() => {
            board.forEach(cell => cell.innerHTML = "");
            document.querySelector(".winner").innerHTML = ``;
            currentPlayer = 'X';
            gameNumber = 0;
        }, 1000);
    }
}

function winEnd() {
    document.querySelector(".winner").innerHTML = `${currentPlayer} won!`
    setTimeout(() => {
        board.forEach(cell => cell.innerHTML = "");
        document.querySelector(".winner").innerHTML = ``;
        currentPlayer = 'X';
        gameNumber = 0;
    }, 1000);
};

function ResultValidation() {
    for (let i = 0; i < winningConditions.length; i++) {
        let conditions = winningConditions[i];
        let a = conditions[0];
        let b = conditions[1];
        let c = conditions[2];
        if (board[a].textContent === currentPlayer &&
            board[b].textContent === currentPlayer &&
            board[c].textContent === currentPlayer
        ) {
            winEnd();
        }
    }
}

// } else if (
//     board[3].textContent === currentPlayer &&
//     board[4].textContent === currentPlayer &&
//     board[5].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[6].textContent === currentPlayer &&
//     board[7].textContent === currentPlayer &&
//     board[8].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[2].textContent === currentPlayer &&
//     board[4].textContent === currentPlayer &&
//     board[6].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[0].textContent === currentPlayer &&
//     board[3].textContent === currentPlayer &&
//     board[6].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[1].textContent === currentPlayer &&
//     board[4].textContent === currentPlayer &&
//     board[7].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[2].textContent === currentPlayer &&
//     board[5].textContent === currentPlayer &&
//     board[8].textContent === currentPlayer
// ) {
//     winEnd()
// } else if (
//     board[0].textContent === currentPlayer &&
//     board[4].textContent === currentPlayer &&
//     board[8].textContent === currentPlayer
// ) {
//     winEnd()
// }
// }