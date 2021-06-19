import { render, screen } from "@testing-library/react";

import SignUp from "../signup";

describe("SignUp page", () => {
  it("should be able to render page", () => {
    render(<SignUp />);

    expect(
      screen.getByText("compartilhe sua casa com um amigo canino")
    ).toBeTruthy();
  });
});
