import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./headerComponent";
import "@testing-library/jest-dom";

describe("hederComponent test", () => {
  it("render component is work", () => {
    render(<Header level={1} text={"ProbeText"} />);
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByText("ProbeText")).toBeInTheDocument();
    render(<Header level={2} text={"ProbeText2"} />);
    expect(screen.getByTestId("h2")).toBeInTheDocument();
    expect(screen.getByText("ProbeText2")).toBeInTheDocument();
  });
});
