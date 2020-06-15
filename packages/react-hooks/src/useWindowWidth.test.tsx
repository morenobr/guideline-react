import React from "react";
import { render, act } from "@testing-library/react";
import useWindowWidth from "./useWindowWidth";

const oldWidth = (window as any).innerWidth;
beforeEach(()=>{
  (window as any).innerWidth = 800;
});
afterAll(()=>{
  (window as any).innerWidth = oldWidth;
});

const TestComponent = ()=>{
  const width = useWindowWidth();
  return <span data-testid="width">{width}</span>;
}

describe("useWindowWidth", () => {
  it("get current width and update when it changes", () => {
    const { getByTestId, rerender } = render(<TestComponent />);
    expect(getByTestId('width')).toHaveTextContent('800');
    (window as any).innerWidth = 500;
    act(()=>{
      window.dispatchEvent(new Event('resize'));
      rerender(<TestComponent />);
    });
    expect(getByTestId('width')).toHaveTextContent('500');
  });
});
