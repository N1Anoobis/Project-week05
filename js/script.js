let currentPlayer = 'X';
let gameNumber = 0;

const board = [...document.querySelectorAll(".box")];
board.forEach(box => box.addEventListener('click', chosenOne));

function chosenOne(e) {
    if (gameNumber == 9) return alert("refresh to play again")
    const clickedCell = e.target;
    if (clickedCell.innerHTML !== '') return
    clickedCell.innerHTML = currentPlayer;
    ResultValidation()
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameNumber++;
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
    if (board[0].textContent === currentPlayer &&
        board[1].textContent === currentPlayer &&
        board[2].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[3].textContent === currentPlayer &&
        board[4].textContent === currentPlayer &&
        board[5].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[6].textContent === currentPlayer &&
        board[7].textContent === currentPlayer &&
        board[8].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[2].textContent === currentPlayer &&
        board[4].textContent === currentPlayer &&
        board[6].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[0].textContent === currentPlayer &&
        board[3].textContent === currentPlayer &&
        board[6].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[1].textContent === currentPlayer &&
        board[4].textContent === currentPlayer &&
        board[7].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[2].textContent === currentPlayer &&
        board[5].textContent === currentPlayer &&
        board[8].textContent === currentPlayer
    ) {
        winEnd()
    } else if (
        board[0].textContent === currentPlayer &&
        board[4].textContent === currentPlayer &&
        board[8].textContent === currentPlayer
    ) {
        winEnd()
    }
}