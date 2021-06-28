const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#F08080', '#FFB6C1', '#FFA07A', '#F0E68C', '#DDA0DD', '#008080'];
let time = 0;
let score = 0;
let gameTimer;

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'));
    startGame();
    screens[1].classList.add('up');
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
    gameTimer = setInterval(decreaseTime, 1000);
    timeEl.innerHTML = `00:${time}`;
    createRandomCircle();
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  }
  if (time > 10) {
    timeEl.innerHTML = `00:${--time}`;
  } else {
    timeEl.innerHTML = `00:0${--time}`;
  }
}

function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
  clearInterval(gameTimer);
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${getRandomNumber(0, 500 - size)}px`;
  circle.style.left = `${getRandomNumber(0, 500 - size)}px`;
  circle.style.backgroundColor = getRandomColor();

  board.append(circle);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}