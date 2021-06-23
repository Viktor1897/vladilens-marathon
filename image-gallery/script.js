let slidesContainer = document.querySelector('.container');
let slides = document.querySelectorAll('.slide');

slidesContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('slide')) {
    deleteActiveClass();
    e.target.classList.add('active');
  }
});

function deleteActiveClass() {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
}