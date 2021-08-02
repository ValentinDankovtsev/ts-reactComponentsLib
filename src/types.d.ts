interface CollapseComponentProps {
  header: string;
  content: string;
}

interface ColumnsProps {
  columnCount: number;
  text: string;
}

interface HeaderPropsType {
  level: number;
  text: string;
}

interface ImageComponentProps {
  source: string;
  float?: "left" | "none" | "right";
}

interface ParaghraphComponentProps {
  style: string;
  text: string;
}

interface SpaceBlockProps {
  height: number;
  border: string;
}

interface ComponentWithDefaultProps extends React.Component {
  defaultProps: Record<string, any>;
}
