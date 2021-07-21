import React from "react";
import { render, screen } from "@testing-library/react";
import { SpaceBlock } from "./spaceBlockComponent";
import "@testing-library/jest-dom";

describe("spaceBlockComponent test", () => {
  it("render component is work", () => {
    render(<SpaceBlock height={30} border={"solid 1px"} />);
    expect(screen.getByTestId("divspace-id")).toBeInTheDocument();
    expect(screen.getByTestId("divspace-id").style.height).toBe("30px");
    expect(screen.getByTestId("line-id")).toBeInTheDocument();
  });
});
