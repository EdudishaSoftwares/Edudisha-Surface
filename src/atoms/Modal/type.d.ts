import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: (isOpen: boolean) => void;
  children?: ReactNode | ReactNode[];
  size?: "small" | "medium" | "large";
  dialog?: boolean;
  drawer?: boolean;
  position?: "top" | "bottom" | "left" | "right"
}

export interface ModalState {
  open: boolean;
}

export interface ModalHeaderProps {
    isClosable?: boolean;
    children: ReactNode;
    onClose?: () => void;
}

export interface ModalBodyProps {
    children: ReactNode;
}

export interface ModalFooterProps {
    children: ReactNode;
}