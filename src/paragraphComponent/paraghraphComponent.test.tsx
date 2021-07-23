import React from "react";
import { render, screen } from "@testing-library/react";
import { Paraghraph } from "./paraghraphComponent";
import "@testing-library/jest-dom";

describe("hederComponent test", () => {
  it("render component is work", () => {
    render(<Paraghraph style={"quote"} text={"Text1"} />);
    expect(screen.getByText("Text1")).toBeInTheDocument();
    expect(screen.getByTestId("id")).toBeInTheDocument();
    render(<Paraghraph style={"bold"} text={"Text2"} />);
    expect(screen.getByText("Text2").style.fontWeight).toBe("bold");
    render(<Paraghraph style={"normal"} text={"Text3"} />);
    expect(screen.getByText("Text3").style.fontStyle).toBe("normal");
  });
});
