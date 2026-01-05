import { useDispatch } from "react-redux";
import { counter } from "../redux/slices/counterSlice";

export const ButtonIncrement = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counter.actions.increment());
  };
  return <button onClick={handleClick}>Plus</button>;
};
