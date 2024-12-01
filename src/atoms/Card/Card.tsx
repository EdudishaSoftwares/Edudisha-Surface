import { CardProps } from "./types";
import style from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Card = (props: CardProps) => {
  const {
    mt,
    ml,
    mb,
    mr,
    pt,
    pl,
    pb,
    pr,
    borderRadius,
    children,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cx(
        `${mt ? `mt-${mt}` : ""}`,
        `${ml ? `ml-${ml}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`,
        `${mr ? `mr-${mr}` : ""}`,
        `${pt ? `pt-${pt}` : ""}`,
        `${pl ? `pl-${pl}` : ""}`,
        `${pb ? `pb-${pb}` : ""}`,
        `${pr ? `pr-${pr}` : ""}`,
        `${borderRadius ? `border-radius-${borderRadius}` : ""}`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
