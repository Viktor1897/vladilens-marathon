const board = document.getElementById('board');
const numberOfSquares = 144;
const colors = ['red', 'green', 'yellow', 'purple'];

function fillBoard () {
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
      setColor(square);
    });
    square.addEventListener('mouseleave', () => {
      removeColor(square);
    });

    board.append(square);
  }
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `${color} 0 0 2px 1px, 0 0 10px ${color}`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function removeColor(element) {
  element.style.backgroundColor = '#1f1f1f';
  element.style.boxShadow = '#1f1f1f 0 0 4px 2px';
}

fillBoard();