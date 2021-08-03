import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CatalogComponent } from "./catalogComponent";
import "@testing-library/jest-dom";

describe("CatalogComponent is work", () => {
  it("render", () => {
    render(<CatalogComponent />);
    expect(screen.getByTestId("headerId")).toBeInTheDocument();
    expect(screen.getByTestId("paraghraphId")).toBeInTheDocument();
    expect(screen.getByTestId("collapseId")).toBeInTheDocument();
    expect(screen.getByTestId("columnseId")).toBeInTheDocument();
    expect(screen.getByTestId("imageId")).toBeInTheDocument();
    expect(screen.getByTestId("spaceId")).toBeInTheDocument();
  });
  it("header", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("header"));
    expect(screen.getByTestId("formId1")).toBeInTheDocument();
    expect(screen.getByTestId("formId2")).toBeInTheDocument();
    const form1 = screen.getByTestId("level1");
    const form2 = screen.getByTestId("text2");
    userEvent.paste(form1, "1");
    userEvent.paste(form2, "testText");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByText("testText")).toBeInTheDocument();
    expect(screen.getByTestId("h1")).toBeInTheDocument();
  });
  it("paraghraph", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("paraghraph"));
    const form1 = screen.getByTestId("style1");
    const form2 = screen.getByTestId("text2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();
    userEvent.paste(form1, "bold");
    userEvent.paste(form2, "testText");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByText("testText").style.fontWeight).toBe("bold");
  });
  it("collapse", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("collapse"));
    const form1 = screen.getByTestId("header1");
    const form2 = screen.getByTestId("content2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();
    userEvent.paste(form1, "Заголовок");
    userEvent.paste(form2, "Контент");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByText("Заголовок")).toBeInTheDocument();
    userEvent.click(screen.getByText("Открыть"));
    expect(screen.getByText("Контент")).toBeInTheDocument();
    expect(screen.getByText("Скрыть")).toBeInTheDocument();
  });
  it("columns", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("columns"));
    const form1 = screen.getByTestId("columnCount1");
    const form2 = screen.getByTestId("text2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();
    userEvent.paste(form1, "4");
    userEvent.paste(form2, "Контент");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByTestId("columnBlock-id")).toBeInTheDocument();
    expect(screen.getAllByTestId("column-id").length).toEqual(4);
  });
  it("columns", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("columns"));
    const form1 = screen.getByTestId("columnCount1");
    const form2 = screen.getByTestId("text2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();
    userEvent.paste(form1, "4");
    userEvent.paste(form2, "Контент");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByTestId("columnBlock-id")).toBeInTheDocument();
    expect(screen.getAllByTestId("column-id").length).toEqual(4);
  });

  it("image", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("image"));
    const form1 = screen.getByTestId("source1");
    const form2 = screen.getByTestId("float2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();
    userEvent.paste(
      form1,
      "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg"
    );
    userEvent.paste(form2, "right");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect((screen.getByTestId("image-id") as HTMLImageElement).src).toBe(
      "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg"
    );
    expect(screen.getByTestId("image-id").style.float).toBe("right");
  });

  it("space", () => {
    render(<CatalogComponent />);
    userEvent.click(screen.getByDisplayValue("space"));
    const form1 = screen.getByTestId("height1");
    const form2 = screen.getByTestId("border2");
    expect(form1).toBeInTheDocument();
    expect(form2).toBeInTheDocument();

    userEvent.paste(form1, "20px");
    userEvent.paste(form2, "solid 3px");
    userEvent.click(screen.getByText("Проверить компонент"));
    expect(screen.getByTestId("divspace-id")).toBeInTheDocument();
    expect(screen.getByTestId("divspace-id").style.border).toBe("3px solid");
    expect(screen.getByTestId("divspace-id").style.height).toBe("20px");
  });
});
