import { render, screen } from "@testing-library/react";

import { InputDefault } from "..";

describe("InputDefault component", () => {
  const props = {
    register: jest.fn(),
    label: "Text",
    error: "",
  };

  it("should not be able without error", () => {
    render(<InputDefault {...props} />);

    expect(screen.queryByText("has error")).toBeFalsy();
  });

  it("should be able with error", () => {
    props.error = "has error";
    render(<InputDefault {...props} />);

    expect(screen.queryByText("has error")).toBeTruthy();
  });
});
