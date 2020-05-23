import React from "react";

import { TestComponentProps } from "./TestComponent.types";

const TestComponent = ({ className, ...otherProps }: TestComponentProps) => (
  <div className={className} {...otherProps}>
    <h1 className="heading">I'm the test component</h1>
    <h2>Made for example</h2>
  </div>
);

export default TestComponent;