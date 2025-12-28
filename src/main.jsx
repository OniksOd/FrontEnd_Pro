import { useState, useEffect } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";

export const Main = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("list") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
  const onSuccess = (item) => {
    const newItem = {
      ...item,
      id: window.crypto.randomUUID(),
      checked: false,
    };
    setItems((prevState) => [...prevState, newItem]);
  };
  const onDeleteItem = (id) => {
    setItems((prevState) =>
      prevState.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const onMarkChecked = (id, checked) => {
    setItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) return { ...item, checked };
        return item;
      })
    );
  };
  return (
    <>
      <Form onSuccess={onSuccess} />
      <TodoList
        items={items}
        onDeleteItem={onDeleteItem}
        onMarkChecked={onMarkChecked}
      />
    </>
  );
};
