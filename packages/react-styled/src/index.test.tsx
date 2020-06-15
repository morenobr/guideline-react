import * as guidelineReactWithoutClass from "@morenobr/guideline-react";
import * as index from "./index";

describe("index", () => {
  it("must have all exports", () => {
    Object.keys(guidelineReactWithoutClass).forEach(exportItem => {
      expect(index).toHaveProperty(exportItem);
      expect(index).toHaveProperty(exportItem, guidelineReactWithoutClass[exportItem]);
    })
  });
});
