import { ButtonGroupProps } from "./types";
import style from "./ButtonGroup.module.scss";
import classNames from "classnames/bind";
import Flexbox from "../Flexbox";

const cx = classNames.bind(style);

const ButtonGroup = (props: ButtonGroupProps) => {
    const {
        margin,
        mt,
        ml,
        mr,
        mb,
        vertical,
        style,
        children,
        className,
        ...rest
    } = props

    return (
        <Flexbox
            direction={`${vertical?"column":"row"}`}
            style={style}
            className={cx(
            className,
            'button-group',
            `${margin ? `margin-${margin}` : ""}`,
            `${mt ? `margin-top-${mt}` : ""}`,
            `${mb ? `margin-bottom-${mb}` : ""}`,
            `${ml ? `margin-left-${ml}` : ""}`,
            `${mr ? `margin-right-${mr}` : ""}`,
            `${vertical ? `vertical` : ""}`,
            )}
            {...rest}
        >
            {children}
        </Flexbox>
    );
}

export default ButtonGroup;