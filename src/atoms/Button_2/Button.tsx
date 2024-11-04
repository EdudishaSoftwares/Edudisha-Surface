import React from "react";
import { ButtonProps } from "./types";
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Button_2 : React.FC<ButtonProps> = (props) => {

    const {
        height,
        width,
        maxHeight,
        minHeight,
        minWidth,
        maxWidth,
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        backgroundColor,
        color,
        disabled,
        startIcon,
        endIcon,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        onHoverBackgroundColor,
        onHoverBorderColor,
        onHoverColor,
        onHoverScaleUp,
        onHoverTootltip,
        className,
        children,
        ...rest
    } = props


    return (
        <div
          className={cx(
            className,
            'button',
            `${height?`height-${height}`:""}`,
            `${width?`width-${width}`:""}`,
            `${maxHeight?`max-height-${maxHeight}`:""}`,
            `${minHeight?`min-height-${minHeight}`:""}`,
            `${maxWidth?`max-width-${maxWidth}`:""}`,
            `${minWidth?`min-width-${minWidth}`:""}`,
            `${margin?`margin-${margin}`:""}`,
            `${marginTop?`margin-top-${marginTop}`:""}`,
            `${marginBottom?`margin-bottom-${marginBottom}`:""}`,
            `${marginLeft?`margin-left-${marginLeft}`:""}`,
            `${marginRight?`margin-Right-${marginRight}`:""}`,
            `${padding?`padding-${padding}`:""}`,
            `${paddingTop?`padding-top-${paddingTop}`:""}`,
            `${paddingBottom?`padding-bottom-${paddingBottom}`:""}`,
            `${paddingLeft?`padding-left-${paddingLeft}`:""}`,
            `${paddingRight?`padding-Right-${paddingRight}`:""}`,
            `${backgroundColor?`background-color-${backgroundColor}`:""}`,
            `${color?`color-${color}`:""}`,
            `${borderColor?`border-color-${borderColor}`:""}`,
            `${borderStyle?`border-style-${borderStyle}`:""}`,
            `${borderWidth?`border-width-${borderWidth}`:""}`,
            `${borderRadius?`border-radius-${borderRadius}`:""}`,
            `${onHoverBackgroundColor?`on-hover-background-color-${onHoverBackgroundColor}`:""}`,
            `${onHoverBorderColor?`on-hover-border-color-${onHoverBorderColor}`:""}`,
            `${onHoverColor?`on-hover-color-${onHoverColor}`:""}`,
            `${onHoverScaleUp?`on-hover-scale-up`:""}`,
            `${disabled?"disabled":""}`,
          )}
          {...rest}
        >
            {startIcon ? <span className={cx('start-icon')}>{startIcon}</span> : null}
            {children}
            {endIcon ? <span className={cx('end-icon')}>{endIcon}</span> : null}
            {onHoverTootltip ? <span className={cx('toot-tip')}>{onHoverTootltip}</span> : null}
        </div>
    )
}

export default Button_2;