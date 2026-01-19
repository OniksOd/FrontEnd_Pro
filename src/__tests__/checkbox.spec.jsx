import { describe, expect, test, beforeEach, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { render } from "..//tests/utils";
import { Main } from "../main";

vi.mock("../helpers/api", () => ({
  apiRequester: {
    fetchTodos: vi.fn().mockResolvedValue([
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
    ]),
    toggleTodo: vi.fn().mockImplementation(async (payload) => ({
      ...payload,
      checked: !payload.checked,
    })),
  },
}));

describe("Main todo - checkbox", () => {
  let component;
  beforeEach(() => {
    component = render(<Main />);
  });

  test("can toggle todo checkbox", async () => {
    const user = userEvent.setup();
    const checkbox = await screen.findByLabelText("First todo");

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
