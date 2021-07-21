import React from "react";

export interface HeaderPropsType {
  level: number;
  text: string;
}

export class Header extends React.Component<HeaderPropsType> {
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
