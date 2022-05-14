import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders cards", () => {
  render(<App />);
  const cards = screen.getAllByText(/step/i);
  expect(cards).toHaveLength(3);
});
test("renders hero banner", () => {
  render(<App />);
  const hero = screen.getByAltText(/home splash/i);
  expect(hero).toBeInTheDocument();
});
