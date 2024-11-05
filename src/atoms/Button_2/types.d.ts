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
    // ripple
}
