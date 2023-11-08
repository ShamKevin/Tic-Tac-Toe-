const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameWon = false;

function handleCellClick(index) {
  if (gameBoard[index] === '' && !gameWon) {
    gameBoard[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    if (checkWinner()) {
      gameWon = true;
      message.textContent = `Player ${currentPlayer} wins!`;
    } else if (!gameBoard.includes('')) {
      gameWon = true;
      message.textContent = `It's a draw!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
  });
  message.textContent = '';
  gameWon = false;
  currentPlayer = 'X';
}

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    handleCellClick(index);
  });
});

resetBtn.addEventListener('click', resetGame);
