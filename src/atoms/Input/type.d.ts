export interface InputWrapperProps {
  children: ReactNode;
  inputWrapperStyle?: React.CSSProperties;
  disabled?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

export type Variant = "halfWidth" | "fullWidth" | "default" | "line";
export type State = "error" | "success" | "untouched";

export type TextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

export interface WrapperProps {
  margin?: string;
  align?: TextAlign;
  children: ReactNode;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  message?: string;
  variant?: Variant;
  margin?: string;
  align?: TextAlign;
  state?: State;
  placeholder?: string;
  textMessage?: string;
  isTransparent?: boolean;
  Icon?: React.FC<{ style?: React.CSSProperties }>;
  inputWrapperStyle?: React.CSSProperties;
  useAnimatedPlaceholder?: boolean;
  disabled?: boolean;
}

interface StyledIconWrapperProps {
  children: ReactNode;
}

interface AnimatedPlaceholderProps {
  placeholder: string;
  isInputFilled?: boolean;
  isTextMessage?: boolean;
  isIconPresent?: boolean;
  iconWrapperWidth: number;
  onClick?: () => void;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: State;
  message?: string;
  variant?: Variant;
  placeholder?: string;
  value?: string;
  margin?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
  autoHeight?: boolean;
  useAnimatedPlaceholder?: boolean;
}
