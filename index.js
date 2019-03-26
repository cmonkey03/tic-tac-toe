document.addEventListener('DOMContentLoaded', (event) => {
  let game = document.getElementById('game')

  for (let i = 0; i < 9; i++) {
    let gameSquare = document.createElement('div')
    gameSquare.className = 'square'
    gameSquare.id = i
    game.appendChild(gameSquare)
  }

})
