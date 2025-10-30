document.getElementById("buttons").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    alert(`You clicked on ${event.target.textContent}`);
  }
});
