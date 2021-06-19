import { render, screen } from "@testing-library/react";

import { InputRadio } from "..";

describe("InputRadio component", () => {
  const TYPES = [
    {
      value: "organization",
      label: "Organização",
    },
    {
      value: "voluntary",
      label: "Voluntário",
    },
  ];
  const props = {
    register: jest.fn(),
    label: "Text",
    options: TYPES,
  };

  it("should be able to render radios", () => {
    render(<InputRadio {...props} />);

    expect(screen.getAllByRole("radio")).toHaveLength(2);
  });
});
