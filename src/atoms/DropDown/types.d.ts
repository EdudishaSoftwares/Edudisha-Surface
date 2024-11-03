
export type DropDownPropsData = { label: string; value: string };
export type DropDownCheckedPropsData = { label: string; value: string; isChecked: boolean };

type ButtonSize = "s" | "m" | "lg";
type Sizes = "sm" | "md" | "lg" | "xl";

export type DropDownProps = {
  data: DropDownPropsData[];
  multiSelect?: boolean;
  title?: string;
  size?: ButtonSize;
  maxWidth?: Sizes;
}

export type DropDownItemProps = {
  id: string | number;
  data: DropDownCheckedPropsData;
  handleChange: (value: string, isChecked: boolean) => void;
  addValue: (value: string) => void;
  removeValue: (value: string) => void;
  multiSelect: boolean
}