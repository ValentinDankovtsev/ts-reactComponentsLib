import React from "react";

export interface CollapseComponentProps {
  header: string;
  content: string;
  isCollapse: boolean;
}

export interface CollapseComponentState {
  isCollapse: boolean;
}

export class CollapseComponent extends React.Component<
  CollapseComponentProps,
  CollapseComponentState
> {
  state: CollapseComponentState = {
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
