import React from "react";
import { ModalProps } from "./type";
import OutsideClickHandler from "../OutsideClickHandler";
import style from "./Modal.style.module.scss";
import classNames from "classnames/bind";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalTitle from "./ModalTitle";

const cx = classNames.bind(style);

const sizes = ["small", "medium", "large"] as const;

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const {
    open: propOpen,
    onClose,
    children,
    size = "medium",
    dialog = false,
    drawer = false,
    position = "left",
  } = props;
  const [open, setOpen] = React.useState(propOpen);

  React.useEffect(() => {
    setOpen(propOpen);
  }, [propOpen]);

  const onClickEvents = () => {
    if (open) {
      setOpen(false);
      onClose(false);
    }
  };

  const checkSize = sizes.includes(size as typeof sizes[number])
    ? size
    : "medium";
  const modalClass = cx(
    "modal",
    `modal-${checkSize}`,
    { "modal-dialog": dialog },
    { [`drawer-${position}`]: drawer, [`open-${position}`]: drawer && open }
  );

  return (
    <div>
      {open && (
        <>
          {drawer && <div className={cx("overlay")} onClick={onClickEvents} />}
          <OutsideClickHandler onClickEvents={onClickEvents}>
            <div className={modalClass}>{children}</div>
          </OutsideClickHandler>
        </>
      )}
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
Modal.Body = ModalBody;

export default Modal;
