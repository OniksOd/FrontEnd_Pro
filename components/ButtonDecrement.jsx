import { useDispatch } from "react-redux";
import { counter } from "../redux/slices/counterSlice";

export const ButtonDecrement = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counter.actions.decrement());
  };
  return <button onClick={handleClick}>Minus</button>;
};
