import React from "react";

export class ColumnsComponent extends React.Component<ColumnsProps> {
  render(): React.ReactElement {
    const result = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.props.columnCount; i++) {
      result.push(
        <div data-testid="column-id" key={i} style={{ border: "dashed red" }}>
          <p>{this.props.text}</p>
        </div>
      );
    }
    return (
      <div
        data-testid="columnBlock-id"
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "dashed red",
        }}
      >
        {result.map((el) => el)}
      </div>
    );
  }
}
