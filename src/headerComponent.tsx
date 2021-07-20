import React from "react";
import ReactDOM from "react-dom";

export type HeaderPropsType = {
  level: number;
  text: string;
};

export class Header extends React.Component<
  HeaderPropsType,
  Record<string, unknown>
> {
  render(): React.ReactElement {
    return React.createElement(
      `h${this.props.level}`,
      {
        "data-testid": `h${this.props.level}`,
      },
      this.props.text
    );
  }
}
