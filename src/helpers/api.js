import axios from "axios";

const BaseURL = "http://localhost:3000";

class APIRequester {
  constructor() {
    this.client = axios.create({
      baseURL: BaseURL,
    });
  }
  fetchTodos = () => {
    return this.client.get("/todo").then(({ data }) => data);
  };
  addTodo = (payload) => {
    return this.client.post("/todo", { ...payload }).then(({ data }) => data);
  };
  deleteTodo = (id) => {
    return this.client.delete(`/todo/${id}`).then(({ data }) => data);
  };
  toggleTodo = (payload) => {
    return this.client
      .patch(`/todo/${payload.id}`, { ...payload })
      .then(({ data }) => data);
  };
  editTodo = (payload) => {
    return this.client
      .patch(`/todo/${payload.id}`, { ...payload })
      .then(({ data }) => data);
  };
}

export const apiRequester = new APIRequester();
