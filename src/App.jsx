import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ItemsList } from "../components/ItemsList";
import { TodoForm } from "../components/TodoForm";
import { Footer } from "../components/Footer";

export const App = () => (
  <Provider store={store}>
    <h1>To Do</h1>
    <TodoForm />
    <ItemsList />
    <Footer />
  </Provider>
);
