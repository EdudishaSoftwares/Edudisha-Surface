import React from "react";

export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType
> {
  as?: As;
  className?: string;
  style?: React.CSSProperties;
}

export type Partial<T> = { [P in keyof T]?: T[P] };

export type Pick<T, K extends keyof T> = { [P in K]: T[P] };

export type Exclude<T, U> = T extends U ? never : T;

export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;

export interface AnimationEventProps {
  onEnter?: (node: HTMLElement) => void;
  onEntering?: (node: HTMLElement) => void;
  onEntered?: (node: HTMLElement) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  onExited?: (node: HTMLElement) => void;
}

export type PickerAppearance = "default" | "subtle";

export type StyleGuide =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "body5"
  | "body6";

export type ValueType = string | number;

export type ValueTypes = (string | number)[];

export type ButtonGroupItemDataType<T> = ItemDataType<T> & {
  toolTip?: string;
  isDisabled?: boolean;
};

export type ItemDataType<T> = {
  label?: string | React.ReactNode;
  value?: T;
};

export type AlignType = "top" | "middle" | "bottom";

export type BorderStyleType = "dotted" | "dashed" | "solid" | "double";

export type AppearenceType =
  | "default"
  | "primary"
  | "link"
  | "subtle"
  | "ghost";

export type DisplayType = "inline" | "block" | "inline-block";

export type PositionType = "relative" | "absolute";

export type Colors =
  | "violet"
  | "purple"
  | "purple-2"
  | "indigo"
  | "blue"
  | "blue-1"
  | "blue-2"
  | "blue-3"
  | "blue-4"
  | "blue-5"
  | "green"
  | "green-2"
  | "yellow"
  | "orange"
  | "red"
  | "pink"
  | "white"
  | "grey"
  | "grey-1"
  | "grey-2"
  | "black";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";

export interface CommmonProps extends React.HTMLAttributes<HTMLElement> {
  margin?: Sizes;
  mt?: Sizes;
  mb?: Sizes;
  ml?: Sizes;
  mr?: Sizes;
}
