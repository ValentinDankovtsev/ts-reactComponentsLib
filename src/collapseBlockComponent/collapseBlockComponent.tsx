import React from "react";

export class CollapseComponent extends React.Component<CollapseComponentProps> {
  state = {
    isCollapse: false,
  };

  toggle = (): void => this.setState({ isCollapse: !this.state.isCollapse });

  render(): React.ReactElement {
    if (this.state.isCollapse) {
      return (
        <>
          <h1 data-testid={"collapse-id"}>{this.props.header}</h1>
          <button onClick={this.toggle}>Скрыть</button>
          <p>{this.props.content}</p>
        </>
      );
    }
    return (
      <>
        <h1 data-testid={"collapse-id"}>{this.props.header}</h1>
        <button onClick={this.toggle}>Открыть</button>
      </>
    );
  }
}
