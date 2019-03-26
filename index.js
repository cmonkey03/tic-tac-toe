document.addEventListener('DOMContentLoaded', (event) => {
  let game = document.getElementById('game')

  // for (let i = 0; i < 9; i++) {
  //   let gameSquare = document.createElement('div')
  //   gameSquare.className = 'square'
  //   gameSquare.id = i
  //   game.appendChild(gameSquare)
  // }

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
