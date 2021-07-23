import React from "react";

export class ImageComponent extends React.Component<ImageComponentProps> {
  render(): React.ReactElement {
    return (
      <img
        data-testid="image-id"
        src={this.props.source}
        style={{ float: this.props.float }}
      ></img>
    );
  }
}
