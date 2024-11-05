import React from "react";
import Modal from "../Modal/Modal";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

interface DrawerHeaderProps {
  children: React.ReactNode;
  onClose: () => void;
}

interface DrawerBodyProps {
  children: React.ReactNode;
}

interface DrawerFooterProps {
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> & {
  Header: React.FC<DrawerHeaderProps>;
  Body: React.FC<DrawerBodyProps>;
  Footer: React.FC<DrawerFooterProps>;
  Title: React.FC<DrawerBodyProps>;
} = ({ open, onClose, size, position = "right", children }) => {
  return (
    <Modal open={open} onClose={onClose} drawer position={position} size={size}>
      {children}
    </Modal>
  );
};

Drawer.Header = ({ children, onClose }: DrawerHeaderProps) => (
  <Modal.Header onClose={onClose}>{children}</Modal.Header>
);

Drawer.Title = ({ children }: DrawerBodyProps) => (
  <Modal.Title>{children}</Modal.Title>
);

Drawer.Body = ({ children }: DrawerBodyProps) => (
  <Modal.Body>{children}</Modal.Body>
);

Drawer.Footer = ({ children }: DrawerFooterProps) => (
  <Modal.Footer>{children}</Modal.Footer>
);

export default Drawer;
