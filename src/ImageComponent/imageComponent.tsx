import React from "react";

export class ImageComponent extends React.Component<ImageComponentProps> {
  static defaultProps = {
    name: "image",
    source: "https://gohtml.ru/images/news/151--15-10-03--21-21-00.jpg",
    float: "left" as "left" | "none" | "right",
  };

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
