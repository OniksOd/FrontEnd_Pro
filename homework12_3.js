const form = document.getElementById("form");
const todolist = document.getElementById("todolist");

form.addEventListener("submit", toDO);

function toDO(event) {
  event.preventDefault();
  const input = document.getElementById("input");
  const inputValue = input.value;
  const li = document.createElement("li");
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  todolist.appendChild(li);
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteBtn);
  input.value = "";
}
todolist.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    todolist.removeChild(li);
  }
});
