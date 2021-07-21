import React from "react";

export interface SpaceBlockProps {
  height: number;
  border: string;
}

export class SpaceBlock extends React.Component<SpaceBlockProps> {
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
