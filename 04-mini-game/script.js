const board = document.getElementById('board');
const numberOfSquares = 144;

function fillBoard () {
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
  }
}

board.addEventListener('mouseover', (e) => {

});

fillBoard();