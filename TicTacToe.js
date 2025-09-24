const boardElement = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
let board, currentPlayer, gameActive;

function initGame() {
	board = ["", "", "", "", "", "", "", "", ""];
	currentPlayer = "X";
	gameActive = true;
	renderBoard();
}

function renderBoard() {
	boardElement.innerHTML = "";
	for (let i = 0; i < 9; i++) {
		const cell = document.createElement('div');
		cell.className = 'cell' + (board[i] ? ' disabled' : '');
		cell.textContent = board[i];
		cell.dataset.index = i;
		cell.onclick = () => handleCellClick(i);
		boardElement.appendChild(cell);
	}
}

function handleCellClick(index) {
	if (!gameActive || board[index]) return;
	board[index] = currentPlayer;
	renderBoard();
	if (checkWin(currentPlayer)) {
		gameActive = false;
		Swal.fire({
			title: `Player ${currentPlayer} Wins!`,
			icon: 'success',
			confirmButtonText: 'Play Again',
			allowOutsideClick: false
		}).then(() => initGame());
		return;
	}
	if (board.every(cell => cell)) {
		gameActive = false;
		Swal.fire({
			title: `It's a Draw!`,
			icon: 'info',
			confirmButtonText: 'Play Again',
			allowOutsideClick: false
		}).then(() => initGame());
		return;
	}
	currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(player) {
	const winPatterns = [
		[0,1,2], [3,4,5], [6,7,8],
		[0,3,6], [1,4,7], [2,5,8], 
		[0,4,8], [2,4,6]          
	];
	return winPatterns.some(pattern =>
		pattern.every(idx => board[idx] === player)
	);
}

resetBtn.onclick = () => initGame();

window.onload = initGame;
