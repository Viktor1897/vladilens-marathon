const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
let slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
  moveSlider('up');
});
downBtn.addEventListener('click', () => {
  moveSlider('down');
});

function moveSlider(direction) {
  let slideHeight = sideBar.clientHeight;
  
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    } 
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  sideBar.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;

}