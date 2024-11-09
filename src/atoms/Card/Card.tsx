import { CardProps } from "./types";
import style from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Card = (props: React.PropsWithChildren<CardProps>): JSX.Element => {
  const {
    margin,
    ml,
    mr,
    mt,
    mb,
    children,
    noPadding,
    noShadow,
    className,
    paddingHorizontal,
    paddingVertical,
    noHorizontalPadding,
    noVerticalPadding,
    ...rest
  } = props;

  return (
    <section
      className={cx(
        className,
        `card`,
        `${margin ? `margin-${margin}` : ""}`,
        `${mt ? `margin-top-${mt}` : ""}`,
        `${mb ? `margin-bottom-${mb}` : ""}`,
        `${ml ? `margin-left-${ml}` : ""}`,
        `${mr ? `margin-right-${mr}` : ""}`,
        `${paddingVertical ? `padding-vertical-${paddingVertical}` : ""}`,
        `${paddingHorizontal ? `padding-horizontal-${paddingHorizontal}` : ""}`,
        `${noShadow ? `no-shadow` : ""}`,
        `${noPadding ? `no-padding` : ""}`,
        `${noHorizontalPadding ? `no-horizontal-padding` : ""}`,
        `${noVerticalPadding ? `no-vertical-padding` : ""}`
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Card;
