import { Colors, CommmonProps, BorderStyleType, AppearenceType, Sizes } from "../../typings";

export interface ButtonProps extends CommmonProps {
    // active?: boolean;
    appearence?: AppearenceType;
    backgroundColor?: Colors;
    color?: Colors;
    disabled?: boolean;
    loading?: boolean;
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
