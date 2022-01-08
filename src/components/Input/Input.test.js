import Input from "./Input";
import { fireEvent, render, screen } from "@testing-library/react";

it("renders error when receiving error prop", () => {
  const mockError = "Error";
  render(<Input error={mockError} />);
  const error = screen.getByText(mockError);
  expect(error).toBeInTheDocument();
});

it("executes onBlur prop when blurring", () => {
  const mockOnBlur = jest.fn();
  render(<Input testId="input" onBlur={mockOnBlur} />);
  const input = screen.getByTestId("input");
  fireEvent.blur(input);
  expect(mockOnBlur).toBeCalled();
});
