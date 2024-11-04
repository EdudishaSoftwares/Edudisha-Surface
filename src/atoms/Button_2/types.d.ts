import { Colors, CommmonProps, BorderStyleType, Sizes } from "../../typings";

export interface ButtonProps extends CommmonProps {
    // active?: boolean;
    backgroundColor?: Colors;
    color?: Colors;
    disabled?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    borderStyle?: BorderStyleType;
    borderWidth?: Sizes;
    borderColor?: Colors;
    borderRadius?: Sizes;
    onHoverBackgroundColor?: Colors;
    onHoverBorderColor?: Colors;
    onHoverColor?: Colors;
    onHoverScaleUp?: boolean;
    onHoverTootltip?: React.ReactNode;
}
