/*
 * helper function:
 * creates a new element with classes
 * and appends it to given parent-element
 */
const addNewElementWithClasses = (tag, className, parentElement) => {
  const element = document.createElement(tag);
  element.className = className;
  parentElement.append(element);
  return element;
};

const SIZE = 10;
const $GameBoard = document.querySelector("#game-board");
const $GameStatus = document.querySelector("#status");
const $FlagCount = document.querySelector("#flag-count");

/*
 * Global variables
 */
const board = [];
const bombs = [];
const gameState = {
  numberOfVisited: 0,
  numberOfBombs: 0,
  numberOfFlags: 0,
  isWinning: () =>
    gameState.numberOfVisited >= gameState.size * gameState.size - gameState.numberOfBombs,
  win: "win",
  lose: "lose",
  size: 0,
};

const endGame = (state) => {
  stopStopwatch();
  let message = "Start a new game?";
  switch (state) {
    case gameState.win:
      $GameStatus.innerHTML = `<i class="fa-regular fa-face-laugh-squint icons fa-fade"></i>`;
      message = "You WIN! Play Again?";
      break;
    case gameState.lose:
      revealAllBombs();
      $GameStatus.innerHTML = '<i class="fa-solid fa-face-sad-tear icons fa-fade"></i>';
      message = "You lose! Start a new game?";
      break;
    default:
      break;
  }

  setTimeout(() => {
    if (confirm(message)) {
      newGame(SIZE);
      return;
    }
  }, 200);
};

const renderBoard = (size, i = 0, j = 0, rowElement) => {
  // base case: bottom-right corner
  if (i === size && j === size) return;

  if (j === 0) {
    rowElement = addNewElementWithClasses("div", "row", $GameBoard);
    board[i] = [];
  }

  board[i].push(new Box(i, j, rowElement));

  if (j < size - 1) {
    renderBoard(size, i, j + 1, rowElement); // move right
  } else if (i < size - 1) {
    renderBoard(size, i + 1, 0, rowElement); // move to a new row
  }
};

const generateNBombs = (n, i = 0) => {
  if (i === n) return;
  const row = Math.floor(Math.random() * 10);
  const col = Math.floor(Math.random() * 10);

  if (board[row][col].isBomb()) {
    return generateNBombs(n, i);
  } else {
    bombs.push([row, col]);
    board[row][col].insertBomb();
    return generateNBombs(n, i + 1);
  }
};

const revealAllBombs = () => {
  bombs.forEach((bomb) => {
    const [row, col] = bomb;
    board[row][col].revealBomb();
  });
};

const newGame = (num) => {
  $GameBoard.innerHTML = "";
  gameState.numberOfVisited = 0;
  gameState.numberOfBombs = num;
  gameState.numberOfFlags = num;
  gameState.size = num;
  $GameStatus.innerHTML = '<i class="fa-regular fa-face-smile icons"></i>';
  renderBoard(num);
  generateNBombs(num);
  restartStopwatch();
};

newGame(SIZE);
