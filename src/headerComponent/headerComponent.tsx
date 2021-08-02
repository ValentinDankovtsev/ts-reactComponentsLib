import React from "react";

export class Header extends React.Component<
  Record<string, unknown>,
  HeaderPropsType
> {
  static defaultProps = {
    name: "header",
    level: "1",
    text: "text",
  };

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
