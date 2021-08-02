import React from "react";

export class SpaceBlock extends React.Component<SpaceBlockProps> {
  static defaultProps = {
    name: "space",
    height: 20,
    border: "solid 3px",
  };

  render(): React.ReactElement {
    return (
      <div
        style={{ height: this.props.height, border: this.props.border }}
        data-testid="divspace-id"
      >
        <hr data-testid="line-id"></hr>
      </div>
    );
  }
}
