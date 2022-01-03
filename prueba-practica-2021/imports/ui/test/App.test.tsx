import React from "react";
import { App } from "../App";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("when rendered with a `Ingresar Paciente` text", () => {
  it("should paste it into the greetings text", () => {
    render(<App />);
    expect(screen.getByText(/Ingresar Paciente/)).toBeInTheDocument();
  });
});
