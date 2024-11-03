export type MessageComponentProps = {
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'primary';
  isClosable?: boolean;
  onClose?: () => void;
}

export type MessageIconType = {
  primary: JSX.Element;
  info: JSX.Element;
  error: JSX.Element;
  success: JSX.Element;
  warning: JSX.Element;
}
