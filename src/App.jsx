import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Count } from "../components/Count";
import { ButtonIncrement } from "../components/ButtonIncrement";
import { ButtonDecrement } from "../components/ButtonDecrement";

export const App = () => (
  <Provider store={store}>
    <Count />
    <ButtonIncrement />
    <ButtonDecrement />
  </Provider>
);
