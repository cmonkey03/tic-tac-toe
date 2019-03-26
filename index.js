document.addEventListener('DOMContentLoaded', (event) => {
  let game = document.getElementById('game');
  let gameTable = document.createElement('table');

  for (let i = 0; i < 3; i++) {
    const gameRow = document.createElement('tr');
    gameRow.id = 'row' + i;

    for (let j = 0; j < 3; j++) {
      const gameSquare = document.createElement('td');
      gameSquare.id = 'cell' + i + j;
      gameRow.appendChild(gameSquare);
    };

    gameTable.appendChild(gameRow);
  }

  game.appendChild(gameTable);

});
