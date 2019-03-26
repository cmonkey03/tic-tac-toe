document.addEventListener('DOMContentLoaded', (event) => {
  let game = document.getElementById('game');
  let board = document.createElement('table');
  board.id = 'board'

  for (let i = 0; i < 3; i++) {
    const gameRow = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
      const gameSquare = document.createElement('td');
      gameRow.appendChild(gameSquare);
    };

    board.appendChild(gameRow);
  }

  game.appendChild(board);

});
