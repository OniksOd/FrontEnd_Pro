window.addEventListener("load", () => {
  const form = document.querySelector("form");
  const todoList = document.querySelector(".js--todos-wrapper");
  const input = document.getElementById("user__input");
  const modalBody = $(".modal-body");
  const exampleModal = $("#exampleModal");

  exampleModal.on("show.bs.modal", (event) => {
    // Button that triggered the modal
    const listItem = event.relatedTarget;
    const id = listItem.dataset.id;
    const task = todoTasks.find((_task) => _task.id === id);
    if (task) {
      modalBody.text(task.description);
    }
  });
  let todoTasks = JSON.parse(localStorage.getItem("todoTasks") ?? "[]");
  const inputList = [];
  const buttonList = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const uuid = crypto.randomUUID();

    const task = { id: uuid, description: input.value, checked: false };
    todoTasks.push(task);
    saveToLocalStorage(todoTasks);
    renderList(todoTasks);
    input.value = "";
  });

  const saveToLocalStorage = (taskList) => {
    localStorage.setItem("todoTasks", JSON.stringify(taskList));
  };
  const onDeleteTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.dataset.id;
    const tasks = todoTasks.filter((_task) => _task.id !== id);
    todoTasks = tasks;
    saveToLocalStorage(tasks);
    renderList(tasks);
  };
  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.dataset.id;
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
      span.dataset.id = task.id;
      span.dataset.bsToggle = "modal";
      span.dataset.bsTarget = "#exampleModal";
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
