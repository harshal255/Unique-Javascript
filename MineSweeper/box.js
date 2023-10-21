function Box(rowIndex, colIndex, rowElement) {
  let _bomb = false;
  let _visited = false;
  let _flag = false;
  this.hasBeenVisited = () => _visited;
  this.isBomb = () => _bomb;
  this.insertBomb = () => (_bomb = true);
  this.revealBomb = () => (box.innerHTML = "<i class='fa-solid fa-bomb'></i>");

  const getNeighbors = (arr = [], i = rowIndex - 1, j = colIndex - 1) => {
    // if this neighbor exists and is not the box itself
    if (board[i] && board[i][j]) {
      if (!(i === rowIndex && j === colIndex)) {
        arr.push(board[i][j]);
      }
    }

    // if reach the bottom-right neighbor, end recursion
    if (i === rowIndex + 1 && j === colIndex + 1) {
      return arr;
    }

    // If the end of the current row has not been reached
    if (j < colIndex + 1) {
      // Move right
      return getNeighbors(arr, i, j + 1);

      // If the end of the current column has been reached
    } else if (i < rowIndex + 1) {
      // Move down to the next row
      return getNeighbors(arr, i + 1, colIndex - 1);
    }
  };

  const updateFlagCount = (change) => {
    gameState.numberOfFlags = gameState.numberOfFlags + change;
    $FlagCount.innerText = "Flags Left: " + pad(gameState.numberOfFlags);
  };

  this.flip = () => {
    if (_visited) return;

    // if not visited, mark it as visited
    // and check if user wins
    _visited = true;
    gameState.numberOfVisited++;
    box.innerHTML = "";
    box.classList.add("visited");

    if (_flag) updateFlagCount(1);
    if (gameState.isWinning()) {
      endGame("win");
      return;
    }

    // if this is a bomb
    // display a bomb, end game
    if (_bomb) {
      this.revealBomb();
      gameState.numberOfVisited--;
      endGame("lose");
      return;
    }

    // if this is NOT a bomb,
    // find all neighbors and reveal the number of bombs in it
    // if revealed number is 0, recursively reveal unvisited neighbors
    let neighbors = getNeighbors();
    const bombsCount = neighbors.reduce((count, neighbor) => {
      if (neighbor.isBomb()) count++;
      return count;
    }, 0);

    if (bombsCount === 0) {
      neighbors.forEach((neighbor) => {
        if (!neighbor.hasBeenVisited()) {
          neighbor.flip();
        }
      });
    } else {
      box.innerText = bombsCount;
    }
  };

  const box = addNewElementWithClasses("div", "box", rowElement);
  box.onclick = this.flip;
  box.oncontextmenu = (e) => {
    if (_visited) return;
    e.preventDefault();

    if (gameState.numberOfFlags > 0) {
      box.innerHTML = "<i class='fa-solid fa-flag'></i>";
      _flag = true;
      updateFlagCount(-1);
    }
  };
}
