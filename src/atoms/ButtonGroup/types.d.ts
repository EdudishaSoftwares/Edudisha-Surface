import { CommmonProps} from "../../typings";

export interface ButtonGroupProps extends CommmonProps {
    vertical?: boolean;
    onClick?: () => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseOverCapture?: (event: React.MouseEvent) => void;
    onMouseOutCapture?: (event: React.MouseEvent) => void;
}
