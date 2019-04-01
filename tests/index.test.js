import React from "react";
import ReactDOM from "react-dom";
import Index from "../pages/index";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render", () => {
  ReactDOM.render(<Index />, container);

  const section = container.querySelector("section");
  expect(section.textContent).toBe("Initial setup");
});
