import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CollapseComponent } from "./collapseBlockComponent";
import "@testing-library/jest-dom";

describe("collapse test", () => {
  it("render component is work", () => {
    render(
      <CollapseComponent
        header={"Header"}
        content={"ProbeText"}
        isCollapse={false}
      />
    );
    expect(screen.getByTestId("collapse-id")).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Открыть")).toBeInTheDocument();
    userEvent.click(screen.getByText("Открыть"));
    expect(screen.getByText("Скрыть")).toBeInTheDocument();
    expect(screen.getByText("ProbeText")).toBeInTheDocument();
  });
});
