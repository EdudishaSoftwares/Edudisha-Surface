import { ModalHeaderProps } from "./type";
import style from "./Modal.style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const ModalHeader: React.FC<ModalHeaderProps> = ({
  isClosable = true,
  children,
  onClose,
}) => (
  <div className={cx("modal-header")}>
    {children}
    {isClosable && (
      <button
        className={cx("modal-close")}
        onClick={onClose}
        aria-label="Close"
      >
        &#10005;
      </button>
    )}
  </div>
);
export default ModalHeader;
