import { useSelector } from "react-redux";
export const Footer = () => {
  const total = useSelector((state) => state.todos.items.length);
  return <footer>Total todos: {total}</footer>;
};
