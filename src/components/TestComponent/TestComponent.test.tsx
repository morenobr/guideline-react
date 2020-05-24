import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("Test Component", () => {
  it("simple render", () => {
    const { getByTestId } = render(<TestComponent className="TestClass" data-testid="test-component" />);

    expect(getByTestId("test-component")).toBeInTheDocument();
  });
});