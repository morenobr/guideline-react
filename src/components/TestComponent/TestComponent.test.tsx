import React from "react";
import { render } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe("Test Component", () => {

  const renderComponent = () => render(<TestComponent className="TestClass" data-testid="test-component" />);

  it("simple render", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("test-component")).toBeInTheDocument();
  });
});