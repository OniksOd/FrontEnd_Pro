const BaseURL = "https://6963fef62d146d9f58d4e594.mockapi.io/";

class APIRequester {
  fetchTodos() {
    return fetch(`${BaseURL}/todo`).then((response) => response.json());
  }
  addTodo(payload) {
    console.log("API payload:", payload);
    return fetch(`${BaseURL}/todo`, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  }
  deleteTodo(id) {
    return fetch(`${BaseURL}/todo/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  }
  toggleTodo(payload) {
    return fetch(`${BaseURL}/todo/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify({
        checked: payload.checked,
      }),
    }).then((response) => response.json());
  }
  editTodo(payload) {
    return fetch(`${BaseURL}/todo/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  }
}

export const apiRequester = new APIRequester();
