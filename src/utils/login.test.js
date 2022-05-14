import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import Login from "../pages/login/login";

test("username input should be rendered", () => {
  const history = createMemoryHistory();
  const route = "/login";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/your email address/i);
  expect(emailInput).toBeInTheDocument();
});
test("password input should be rendered", () => {
  const history = createMemoryHistory();
  const route = "/login";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>
  );
  const passwordInput = screen.getByPlaceholderText(/your password/i);
  expect(passwordInput).toBeInTheDocument();
});
test("buttons should be rendered", () => {
  const history = createMemoryHistory();
  const route = "/login";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <Login />
    </Router>
  );
  const signInButton = screen.getByTestId("signInButton");
  const demoButton = screen.getByText(/demo user/i);
  expect(signInButton).toBeInTheDocument();
  expect(demoButton).toBeInTheDocument();
});

test("demo sign in works", () => {
    render(
    <MemoryRouter initialEntries={["/login"]}>
        <Login />
    </MemoryRouter>
  );
  const user = userEvent.setup();
  await user.click(screen.getByText(/demo user/i));
  expect(screen.getByText(/rganize meals/i)).toBeInTheDocument();
})