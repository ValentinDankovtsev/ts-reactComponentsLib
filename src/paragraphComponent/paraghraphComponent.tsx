import React from "react";

export interface ParaghraphComponentProps {
  style: string;
  text: string;
}

export class Paraghraph extends React.Component<ParaghraphComponentProps> {
  render(): JSX.Element {
    if (this.props.style === "bold") {
      return <p style={{ fontWeight: "bold" }}>{this.props.text}</p>;
    }
    if (this.props.style === "normal") {
      return <p style={{ fontStyle: "normal" }}>{this.props.text}</p>;
    }
    if (this.props.style === "quote") {
      return (
        <blockquote data-testid={"id"}>
          <p>{this.props.text}</p>
        </blockquote>
      );
    }
    return undefined;
  }
}
