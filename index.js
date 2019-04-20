import winner from './ScoreWinner.js';

console.log(winner)

document.addEventListener('DOMContentLoaded', (e) => {
  let play = 1;
  let game = document.getElementById('game');
  let board = document.createElement('table');

  board.id = 'board'

  //create game table rows and cells
  for (let i = 0; i < 3; i++) {
    const gameRow = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
      const gameSquare = document.createElement('td');
      gameRow.appendChild(gameSquare);

      //listen for player clicks, fill cells and score game
      gameSquare.addEventListener('click', function gamePlay() {
        let gameSquare = event.target
        play % 2 === 0 ? gameSquare.innerHTML = 'x' : gameSquare.innerHTML = 'o'
        play++
        gameSquare.removeEventListener('click', gamePlay);
        // scoreWinner()
      });
    };

    board.appendChild(gameRow);
  }

  game.appendChild(board);

});

// function scoreWinner() {
//
// }
