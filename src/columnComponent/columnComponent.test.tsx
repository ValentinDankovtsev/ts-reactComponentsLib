import React from "react";
import { render, screen } from "@testing-library/react";
import { ColumnsComponent } from "./columnComponent";
import "@testing-library/jest-dom";

describe("ColumnsComponent test", () => {
  it("render component is work", () => {
    render(<ColumnsComponent columnCount={1} text={"testText"} />);
    expect(screen.getByTestId("column-id")).toBeInTheDocument();
    expect(screen.getByTestId("columnBlock-id")).toBeInTheDocument();
    expect(screen.getByText("testText")).toBeInTheDocument();
  });
});
