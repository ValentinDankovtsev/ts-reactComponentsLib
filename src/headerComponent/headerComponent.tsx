import React from "react";

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
