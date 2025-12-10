import "../scss/main.scss";
import $ from "jquery";

$(window).on("load", () => {
  const form = $("#form");
  const todoList = $("#todo-list");
  const input = $("#user__input");
  const modalBody = $(".modal-body");
  const exampleModal = $("#exampleModal");

  exampleModal.on("show.bs.modal", (event) => {
    const listItem = event.relatedTarget;
    const id = $(listItem).data("id");
    const task = todoTasks.find((_task) => _task.id === id);
    if (task) {
      modalBody.text(task.description);
    }
  });
  let todoTasks = JSON.parse(localStorage.getItem("todoTasks") ?? "[]");
  const inputList = [];
  const buttonList = [];
  const todoListItems = [];

  form.on("submit", (event) => {
    event.preventDefault();

    const uuid = crypto.randomUUID();

    const task = { id: uuid, description: input.val(), checked: false };
    todoTasks.push(task);
    saveToLocalStorage(todoTasks);
    renderList(todoTasks);
    input.val("");
  });

  const saveToLocalStorage = (taskList) => {
    localStorage.setItem("todoTasks", JSON.stringify(taskList));
  };
  const onDeleteTask = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = $(e.target).data("id");
    const tasks = todoTasks.filter((_task) => _task.id !== id);
    todoTasks = tasks;
    saveToLocalStorage(tasks);
    renderList(tasks);
  };
  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = $(e.target).data("id");
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
      element.off(eventName, callback);
    });
  };
  const renderList = (taskList) => {
    todoList.html("");
    removeListeners(inputList, "change", onChange);
    removeListeners(buttonList, "click", onDeleteTask);

    inputList.length = 0;
    buttonList.length = 0;
    todoListItems.length = 0;
    for (const task of taskList) {
      const li = $("<li></li>").addClass("todo-item");
      if (task.checked) {
        li.addClass("todo-item--checked");
      }
      todoListItems.push(li);

      const input = $("<input>").attr({
        type: "checkbox",
        checked: task.checked,
        "data-id": task.id,
      });
      input.on("change", onChange);
      inputList.push(input);

      const span = $("<span></span>")
        .attr({
          "data-id": task.id,
          "data-bs-toggle": "modal",
          "data-bs-target": "#exampleModal",
        })
        .addClass("todo-item__description")
        .text(task.description);
      const button = $("<button></button>")
        .attr({ type: "button", "data-id": task.id })
        .addClass("todo-item__delete")
        .text("Delete");

      button.on("click", onDeleteTask);
      buttonList.push(button);
      li.append([input, span, button]);
    }
    todoList.append(todoListItems);
  };

  renderList(todoTasks);
});
