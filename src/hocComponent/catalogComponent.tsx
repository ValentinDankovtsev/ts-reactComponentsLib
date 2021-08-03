import React from "react";
import { Header } from "../headerComponent/headerComponent";
import { Paraghraph } from "../paragraphComponent/paraghraphComponent";
import { CollapseComponent } from "../collapseBlockComponent/collapseBlockComponent";
import { ColumnsComponent } from "../columnComponent/columnComponent";
import { ImageComponent } from "../imageComponent/imageComponent";
import { SpaceBlock } from "../spaceBlockComponent/spaceBlockComponent";
import { higherOrderComponent } from "../hocComponent/higherOrderComponent";

type CatalogComponentState = {
  isNameComponent: boolean;
  isPropsComponent: boolean;
  compName: string;
  compProps: Record<string, string | number>;
};

const components = [
  Header,
  Paraghraph,
  CollapseComponent,
  ColumnsComponent,
  ImageComponent,
  SpaceBlock,
];
export class CatalogComponent extends React.Component<
  Record<string, string | number>,
  CatalogComponentState
> {
  state = {
    compName: "",
    isNameComponent: false,
    isPropsComponent: false,
    compProps: {} as Record<string, string | number>,
  };

  selectHandler = (ev: any): void => {
    this.setState({
      compName: (ev.target as HTMLSelectElement).value,
    });
  };

  selectComponentButtonName = (): void => {
    this.setState(() => ({ isNameComponent: true }));
  };

  findComponent = (): any =>
    components.find((el) => el.defaultProps.name === this.state.compName);

  renderComponent = (): JSX.Element => {
    const Сomponent = this.findComponent();
    const props = { ...this.state.compProps };
    const NewComponent = higherOrderComponent(Сomponent, props);
    return <NewComponent />;
  };

  inputChangeProps = (event: React.ChangeEvent): void => {
    const inputId = event.target.id;
    const newComponentProps = { ...this.state.compProps };
    newComponentProps[inputId] = (event.target as HTMLInputElement).value;

    this.setState({
      compProps: newComponentProps,
    });
  };

  renderComponentWithProperty(): JSX.Element[] {
    const component = this.findComponent();
    const renderForm = Object.keys(component.defaultProps).map((key, index) => {
      if (key === "name") {
        return null;
      }
      return (
        <div key={index} data-testid={`formId${index.toString()}`}>
          <input
            type="text"
            onChange={this.inputChangeProps}
            id={`${key}`}
            data-testid={`${key}${index}`}
            placeholder={`Введи ${key}`}
          />
        </div>
      );
    });
    return renderForm;
  }

  setComponentPropsButton = (): void => {
    this.setState(() => ({
      isPropsComponent: true,
    }));
  };

  render(): JSX.Element {
    if (this.state.isNameComponent !== true) {
      return (
        <div onChange={this.selectHandler}>
          <input
            type="radio"
            value="header"
            data-testid="headerId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="headerId">Header</label>
          <input
            type="radio"
            value="paraghraph"
            data-testid="paraghraphId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="paraghraphId">Paraghraph</label>
          <input
            type="radio"
            value="collapse"
            data-testid="collapseId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="collapseId">Collapse</label>
          <input
            type="radio"
            value="columns"
            data-testid="columnseId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="columnsId">Columns</label>
          <input
            type="radio"
            value="image"
            data-testid="imageId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="imageId">Image</label>
          <input
            type="radio"
            value="space"
            data-testid="spaceId"
            onClick={this.selectComponentButtonName}
          ></input>
          <label htmlFor="spaceId">Space</label>
        </div>
      );
    }
    if (this.state.isPropsComponent) {
      return (
        <>
          <div>{this.renderComponent()}</div>
        </>
      );
    }
    if (this.state.isNameComponent) {
      return (
        <>
          {this.renderComponentWithProperty()}
          <button onClick={this.setComponentPropsButton}>
            Проверить компонент
          </button>
        </>
      );
    }
    return null;
  }
}
