import { CommmonProps } from "../../typings";

export interface CheckboxGroupProps extends CommmonProps {
    options: (number | string)[];
    active: (number | string)[];
    onChange: (
      active: (number | string)[],
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    id: string;
    inline?: boolean;
}
