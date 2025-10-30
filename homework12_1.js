let link = "";
document.getElementById("linkButton").addEventListener("click", () => {
  link = prompt("Enter a URL:");
});
document.getElementById("moveButton").addEventListener("click", () => {
  if (link) {
    window.location.href = link;
  }
});
