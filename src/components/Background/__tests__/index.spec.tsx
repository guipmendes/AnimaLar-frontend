import { render, screen } from "@testing-library/react";

import { Background } from "..";

describe("Background component", () => {
  it("should be able to render component", () => {
    render(<Background />);

    expect(
      screen.getByText(/compartilhe sua casa com um amigo canino/i)
    ).toBeTruthy();
  });
});
