import { render, screen } from "@testing-library/react";

import { DefaultInput } from "..";

describe("DefaultInput component", () => {
  const props = {
    register: jest.fn(),
    label: "Text",
    error: "",
  };

  it("should not be able without error", () => {
    render(<DefaultInput {...props} />);

    expect(screen.queryByText("has error")).toBeFalsy();
  });

  it("should be able with error", () => {
    props.error = "has error";
    render(<DefaultInput {...props} />);

    expect(screen.queryByText("has error")).toBeTruthy();
  });
});
