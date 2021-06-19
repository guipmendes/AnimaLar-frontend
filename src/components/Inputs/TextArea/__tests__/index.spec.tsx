import { render, screen } from "@testing-library/react";

import { TextArea } from "..";

describe("TextArea component", () => {
  const props = {
    register: jest.fn(),
    label: "Text",
    error: "",
  };

  it("should not be able without error", () => {
    render(<TextArea {...props} />);

    expect(screen.queryByText("has error")).toBeFalsy();
  });

  it("should be able with error", () => {
    props.error = "has error";
    render(<TextArea {...props} />);

    expect(screen.queryByText("has error")).toBeTruthy();
  });
});
