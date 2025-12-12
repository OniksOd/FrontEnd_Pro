import axios from "axios";
import "./main.scss";

window.addEventListener("load", async () => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
  });
  const form = document.querySelector("form");
  const todoList = document.querySelector(".js--todos-wrapper");
  const input = document.getElementById("user__input");
  //   let todoTasks = JSON.parse(localStorage.getItem("todoTasks") ?? "[]");
  let todoTasks = await apiClient
    .get("/tasks")
    .then((response) => response.data);
  console.log(todoTasks);
  const inputList = [];
  const buttonList = [];
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const task = { description: input.value, checked: false };

    const savedTask = await apiClient
      .post("/tasks", task)
      .then((response) => response.data);
    console.log(savedTask);
    todoTasks.push(savedTask);
    // saveToLocalStorage(todoTasks);
    renderList(todoTasks);
    input.value = "";
  });

  const saveToLocalStorage = (taskList) => {
    localStorage.setItem("todoTasks", JSON.stringify(taskList));
  };
  const onDeleteTask = async (e) => {
    const id = e.target.dataset.id;
    await apiClient.delete(`/tasks/${id}`);
    const tasks = todoTasks.filter((_task) => _task.id !== id);
    todoTasks = tasks;
    saveToLocalStorage(tasks);
    renderList(tasks);
  };
  const onChange = async (e) => {
    const id = e.target.dataset.id;
    const data = { checked: e.target.checked };
    await apiClient
      .patch(`/tasks/${id}`, data)
      .then((response) => response.data);
    const tasks = todoTasks.map((_task) => {
      if (_task.id === id) {
        return { ..._task, checked: e.target.checked };
      }
      return _task;
    });
    todoTasks = tasks;
    saveToLocalStorage(tasks);
    renderList(tasks);
  };
  const removeListeners = (list, eventName, callback) => {
    list.forEach((element) => {
      element.removeEventListener(eventName, callback);
    });
  };
  const renderList = (taskList) => {
    todoList.innerHTML = "";
    const fragment = document.createDocumentFragment();
    removeListeners(inputList, "change", onChange);
    removeListeners(buttonList, "click", onDeleteTask);

    inputList.length = 0;
    buttonList.length = 0;
    for (const task of taskList) {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      if (task.checked) {
        li.classList.add("todo-item--checked");
      }

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = task.checked;
      input.dataset.id = task.id;

      input.addEventListener("change", onChange);
      inputList.push(input);
      const span = document.createElement("span");
      span.classList.add("todo-item__description");
      span.textContent = task.description;
      const button = document.createElement("button");
      button.classList.add("todo-item__delete");
      button.dataset.id = task.id;
      button.textContent = "Delete";

      button.addEventListener("click", onDeleteTask);
      buttonList.push(button);
      li.appendChild(input);
      li.appendChild(span);
      li.appendChild(button);

      fragment.appendChild(li);
    }
    todoList.appendChild(fragment);
  };

  renderList(todoTasks);
});
