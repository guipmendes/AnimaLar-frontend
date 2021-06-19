import { render, screen } from "@testing-library/react";

import RegisterAnimal from "../pages/register-animal";

describe("RegisterAnimal page", () => {
  it("should be able to render page", () => {
    render(<RegisterAnimal />);

    expect(screen.getByText("Cadastro de novos pets")).toBeTruthy();
  });
});
