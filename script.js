const carouselRow = document.querySelector(".slides-wrapper");
const slides = document.getElementsByClassName("slide");
const pagination = document.getElementsByClassName("pagination");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const points = document.querySelector(".points");

let index = 0;
let width = slides[0].clientWidth;
carouselRow.style.transform = `translateX(${-width * index}px)`;

nextButton.addEventListener("click", nextSlide);
function nextSlide() {
  if (index >= slides.length - 1) {
    return;
  }
  carouselRow.style.transition = "transform 0.4s ease-out";
  index++;
  carouselRow.style.transform = `translateX(${-width * index}px)`;
  updateButtons();
  createPagination();
}
prevButton.addEventListener("click", prevSlide);
function prevSlide() {
  if (index <= 0) {
    return;
  }
  carouselRow.style.transition = "transform 0.4s ease-out";
  index--;
  carouselRow.style.transform = `translateX(${-width * index}px)`;
  updateButtons();
  createPagination();
}
function updateButtons() {
  prevButton.classList.toggle("hidden", index <= 0);
  nextButton.classList.toggle("hidden", index >= slides.length - 1);
}
function createPagination() {
  for (let i = 0; i < pagination.length; i++) {
    pagination[i].className = pagination[i].className.replace(" active", "");
  }
  pagination[index].className += " active";
}
points.addEventListener("click", function (e) {
  if (e.target.classList.contains("pagination")) {
    const targetIndex = Array.from(pagination).indexOf(e.target);
    index = targetIndex;
    carouselRow.style.transition = "transform 0.4s ease-out";
    carouselRow.style.transform = `translateX(${-width * index}px)`;
    updateButtons();
    createPagination();
  }
});
