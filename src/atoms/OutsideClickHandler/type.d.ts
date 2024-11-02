import { ReactNode, MouseEvent, TouchEvent } from "react";

export interface OutsideClickHandlerProps {
  onClickEvents: (event: MouseEvent | TouchEvent) => void;
  children?: ReactNode | ReactNode[];
  className?: string;
}
