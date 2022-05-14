import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/home/Home";
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

test("demo sign in works", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
  const demoButton = screen.getByTestId("demoButton");
  expect(demoButton).toBeInTheDocument();
  userEvent.click(demoButton);
  expect(screen.getByText(/my dashboard/i)).toBeInTheDocument();
});
