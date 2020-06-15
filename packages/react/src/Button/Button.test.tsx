import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("render with defined class name", () => {
    const { container } = render(<Button />);

    expect((container.firstChild as HTMLElement).classList.contains('mg-button')).toBeTruthy();
  });

  it("render with additional class name", () => {
    const { container } = render(<Button className="TestClass" />);

    expect((container.firstChild as HTMLElement).classList.contains('TestClass')).toBeTruthy();
  });
});
