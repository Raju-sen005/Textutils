import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(
    /Try TextUtils - Word Counter, Character Counter, Remove extra spaces/i
  );
  expect(linkElement).toBeInTheDocument();
});
