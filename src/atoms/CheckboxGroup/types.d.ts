export interface CheckboxGroupProps {
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
