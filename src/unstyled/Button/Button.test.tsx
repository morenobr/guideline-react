import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("simple render", () => {
    const { getByTestId } = render(<Button className="TestClass" data-testid="test-component" />);

    expect(getByTestId("test-component")).toBeInTheDocument();
  });
});
