const paragraph = document.querySelector(".lorem");
const button = document.getElementById("button");
button.addEventListener("click", () => {
  paragraph.classList.toggle("active");
});
