import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

export const Count = () => {
  const value = useSelector(selectors.counter.value);
  return <div>Count: {value} </div>;
};
