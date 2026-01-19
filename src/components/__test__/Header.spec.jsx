import { describe, expect, test, beforeEach } from "vitest";
import { render } from "../../tests/utils";
import { Header } from "../Header";

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = render(<Header />);
  });
  test("should render correctly", () => {
    const { getByTestId } = component;
    const element = getByTestId("todo-link");
    expect(element).toBeInTheDocument();
  });
  test("should have ToDo text content ", () => {
    const { getByTestId } = component;
    const element = getByTestId("todo-link");
    expect(element.textContent).toBe("ToDo");
  });
});
