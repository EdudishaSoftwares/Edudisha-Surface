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
    margin,
    mt,
    mb,
    ml,
    mr,
    align,
    gutter,
    ...rest
  } = props;
  return (
    <FlexboxGrid
      direction={direction}
      className={cx(
        `${align ? `align-${align}` : ""}`,
        `${margin ? `margin-${margin}` : ""}`,
        `${mt ? `margin-top-${mt}` : ""}`,
        `${mb ? `margin-bottom-${mb}` : ""}`,
        `${ml ? `margin-left-${ml}` : ""}`,
        `${mr ? `margin-right-${mr}` : ""}`,
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
