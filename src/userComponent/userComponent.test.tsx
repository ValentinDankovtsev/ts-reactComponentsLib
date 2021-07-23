import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserComponent } from "./userComponent";

describe("UserComponent test", () => {
  jest
    .spyOn(global.window, "alert")
    .mockImplementation(() => "Что-то пошло не так");
  it("consist Header component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("header")
      .mockReturnValueOnce("1")
      .mockReturnValueOnce("testText");
    render(<UserComponent />);
    expect(screen.getByTestId("h1")).toBeInTheDocument();
    expect(screen.getByText("testText")).toBeInTheDocument();
  });
  it("consist Paraghraph component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("paragraph")
      .mockReturnValueOnce("bold")
      .mockReturnValueOnce("TestText");

    render(<UserComponent />);
    expect(screen.getByText("TestText")).toBeInTheDocument();
  });
  it("consist Image component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("image")
      .mockReturnValueOnce(
        "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
      )
      .mockReturnValueOnce("right");

    render(<UserComponent />);
    expect(screen.getByTestId("image-id")).toBeInTheDocument();
    expect(screen.getByTestId("image-id").style.float).toBe("right");
  });
  it("consist Columns component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("column")
      .mockReturnValueOnce("4")
      .mockReturnValueOnce("Здесь могла бы быть ваша реклама");

    render(<UserComponent />);
    expect(screen.getByTestId("columnBlock-id")).toBeInTheDocument();
  });
  it("consist Collapse component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("collapse")
      .mockReturnValueOnce("Заголовок")
      .mockReturnValueOnce("Вот это точно вам не стоит видеть");

    render(<UserComponent />);
    expect(screen.getByTestId("collapse-id")).toBeInTheDocument();
  });
  it("consist Space component is work", () => {
    window.prompt = jest
      .fn()
      .mockReturnValueOnce("space")
      .mockReturnValueOnce("20")
      .mockReturnValueOnce("solid 3px");

    render(<UserComponent />);
    expect(screen.getByTestId("divspace-id")).toBeInTheDocument();
  });
});
