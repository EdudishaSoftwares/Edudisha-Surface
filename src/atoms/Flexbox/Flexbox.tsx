import { FlexboxComponentProps } from "./types";
import classNames from "classnames/bind";
import style from "./Flexbox.module.scss";
import FlexboxGrid from "../FlexboxGrid";
const cx = classNames.bind(style);

const Flexbox = (props: FlexboxComponentProps): JSX.Element => {
  const {
    children,
    direction,
    nowrap,
    className,
    mt,
    mb,
    align,
    gutter,
    ...rest
  } = props;
  return (
    <FlexboxGrid
      direction={direction}
      className={cx(
        `${align ? `align-${align}` : ""}`,
        `${mt ? `mt-${mt}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`,
        `${nowrap ? "nowrap" : ""}`,
        `${gutter ? `gutter-${gutter}` : ""}`,
        className
      )}
      {...rest}
    >
      {children}
    </FlexboxGrid>
  );
};

Flexbox.Item = FlexboxGrid.Item;

export default Flexbox;
