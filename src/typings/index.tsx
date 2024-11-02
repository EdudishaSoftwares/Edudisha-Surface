import React from "react";

export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType,
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

export type ToArray<V> = V extends any[] ? V : V[];

export type Sizes = "xs" | "sm" | "md" | "lg";
export type CSSSpacingSizes = "xs" | "sm" | "md" | "lg" | "xl";
export type Styleguide =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "heading7"
  | "body1"
  | "body2"
  | "body3";
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
export type Colors =
  | "primary"
  | "subtitles"
  | "headings"
  | "status-red"
  | "status-green"
  | "white"
  | "lowlight"
  | "strokes"
  | "accent-light-1"
  | "accent-light-2"
  | "highlight-2"
  | "status-yellow";
