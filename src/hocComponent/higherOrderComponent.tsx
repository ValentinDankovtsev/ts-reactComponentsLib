export function higherOrderComponent(
  Element: React.ComponentClass,
  newProps: unknown
): React.ComponentClass {
  class NewElement extends Element {
    static defaultProps = newProps;
  }
  return NewElement;
}
