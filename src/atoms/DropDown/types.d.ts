import { CommmonProps, Sizes } from "../../typings";


export type DropDownPropsData = { label: string; value: string };
export type DropDownCheckedPropsData = { label: string; value: string; isChecked: boolean };

export interface DropDownProps extends CommmonProps {
  data: DropDownPropsData[];
  multiSelect?: boolean;
  title?: string;
  size?: Sizes;
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