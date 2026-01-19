import { describe, expect, test, beforeEach, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { render } from "../tests/utils";
import { Main } from "../main";

vi.mock("../helpers/api", () => ({
  apiRequester: {
    fetchTodos: vi.fn(() =>
      Promise.resolve([
        {
          id: 1,
          description: "First todo",
          checked: false,
        },
        {
          id: 2,
          description: "Second todo",
          checked: false,
        },
      ])
    ),
    addTodo: vi.fn((payload) =>
      Promise.resolve({
        id: 3,
        description: payload.description,
        checked: false,
      })
    ),
  },
}));

describe("Main todo", () => {
  let component;
  beforeEach(() => {
    component = render(<Main />);
  });

  test("adds new todo after typing and clicking add", async () => {
    const user = userEvent.setup();
    const text = "New todo item";
    await screen.findByText("First todo");
    const input = await screen.findByRole("textbox");
    await user.type(input, text);
    const button = await screen.findByRole("button", { name: /Submit/i });
    await user.click(button);
    await screen.findByText(text, {}, { timeout: 3000 });
    expect(screen.getByText(text)).toBeInTheDocument();
    const todoItems = screen.getAllByTestId(/^todo-item-/);
    expect(todoItems).toHaveLength(3);
  });
});
