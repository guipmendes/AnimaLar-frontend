import { render } from "@testing-library/react";

import { Carousel } from "..";

describe("Background component", () => {
  it("should be able to render component", () => {
    expect(() => {
      render(<Carousel />);
    }).not.toThrow();
  });
});
