import { render, screen } from "@testing-library/react";

import Home from "../pages";

describe("Home page", () => {
  it("should be able to render page", () => {
    render(<Home />);

    expect(
      screen.getByText("compartilhe sua casa com um amigo canino")
    ).toBeTruthy();
  });
});
