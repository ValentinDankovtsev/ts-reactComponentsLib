import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageComponent } from "./imageComponent";
import "@testing-library/jest-dom";

describe("imageComponent test", () => {
  it("render component is work", () => {
    render(
      <ImageComponent
        source={"https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg"}
        float={"right"}
      />
    );
    expect(screen.getByTestId("image-id")).toBeInTheDocument();
    expect(screen.getByTestId("image-id").style.float).toBe("right");
    expect((screen.getByTestId("image-id") as HTMLImageElement).src).toBe(
      "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg"
    );
  });
});
