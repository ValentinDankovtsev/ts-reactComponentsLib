import React from "react";

export class ColumnsComponent extends React.Component<ColumnsProps> {
  static defaultProps = {
    name: "columns",
    columnCount: 4,
    text: "заполнение текстом",
  };

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
