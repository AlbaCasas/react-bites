import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

it("renders children when receiving children prop", () => {
  const mockChildren = "children";
  render(<Button>{mockChildren}</Button>);
  expect(screen.getByText(mockChildren)).toBeInTheDocument();
});
it("Executes the received onClick", () => {
  const mockOnClick = jest.fn();
  render(<Button onClick={mockOnClick} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockOnClick).toBeCalled();
});
