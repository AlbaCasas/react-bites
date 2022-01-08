import Challenge from "./Challenge";
import { render, screen } from "@testing-library/react";

it("renders title when receiving title prop", () => {
  const mockTitle = "title";
  render(<Challenge title={mockTitle} />);
  expect(screen.getByText(mockTitle)).toBeInTheDocument();
});

it("renders children when receiving children prop", () => {
  const mockChildren = "children";
  render(<Challenge>{mockChildren}</Challenge>);
  expect(screen.getByText(mockChildren)).toBeInTheDocument();
});
