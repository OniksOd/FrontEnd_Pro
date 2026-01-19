import { describe, expect, test, vi } from "vitest";
import { render, fireEvent, act, waitFor } from "../../tests/utils";
import { Form } from "../Form";

describe("Form component", () => {
  test("should not fire submit when data is incorrect", async () => {
    const mockSubmit = vi.fn();
    const component = render(<Form onSuccess={mockSubmit} />);

    const { getByTestId } = component;
    const submitButton = getByTestId("submit-btn");
    act(() => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      const errorText = getByTestId("name-error-text");
      expect(errorText).toBeInTheDocument();
      expect(mockSubmit).toBeCalledTimes(0);
    });
  });

  test("should fire submit when data is incorrect", async () => {
    const mockSubmit = vi.fn();
    const component = render(<Form onSuccess={mockSubmit} />);

    const { getByTestId, queryByTestId } = component;
    const submitButton = getByTestId("submit-btn");
    const nameInput = getByTestId("name-input");
    act(() => {
      fireEvent.input(nameInput, { target: { value: "test to do" } });
    });
    act(() => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      const errorText = queryByTestId("name-error-text");
      expect(errorText).toBeFalsy();
      expect(mockSubmit).toBeCalledTimes(1);
      expect(mockSubmit).toHaveBeenLastCalledWith({
        description: "test to do",
      });
    });

    await act(() => {
      fireEvent.input(nameInput, { target: { value: "Todo131313" } });
    });
    act(() => {
      fireEvent.click(submitButton);
    });
    await waitFor(() => {
      const errorText = queryByTestId("name-error-text");
      expect(errorText).toBeFalsy();
      expect(mockSubmit).toBeCalledTimes(2);
      expect(mockSubmit).toHaveBeenLastCalledWith({
        description: "Todo131313",
      });
    });
  });
});
