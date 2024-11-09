import { CommmonProps, AppearenceType, Sizes} from "../../typings";

export interface ButtonProps extends CommmonProps {
    // active?: boolean;
    appearence?: AppearenceType;
    size?: Sizes;
    disabled?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    toolTip?: React.ReactNode;
    onClick?: () => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseOverCapture?: (event: React.MouseEvent) => void;
    onMouseOutCapture?: (event: React.MouseEvent) => void;
    // ripple
}
