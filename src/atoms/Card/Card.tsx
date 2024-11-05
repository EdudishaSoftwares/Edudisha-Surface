import { CardProps } from "./types";
import style from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Card = (props: React.PropsWithChildren<CardProps>): JSX.Element => {
  const {
    children,
    noPadding,
    noShadow,
    className,
    paddingHorizontal,
    paddingVertical,
    noHorizontalPadding,
    noVerticalPadding,
    mt,
    mb,
    ...rest
  } = props;

  return (
    <section
      className={cx(
        className,
        `card`,
        `${paddingVertical ? `padding-vertical-${paddingVertical}` : ""}`,
        `${paddingHorizontal ? `padding-horizontal-${paddingHorizontal}` : ""}`,
        `${noShadow ? `no-shadow` : ""}`,
        `${noPadding ? `no-padding` : ""}`,
        `${noHorizontalPadding ? `no-horizontal-padding` : ""}`,
        `${noVerticalPadding ? `no-vertical-padding` : ""}`,
        `${mt ? `mt-${mt}` : ""}`,
        `${mb ? `mb-${mb}` : ""}`
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Card;
