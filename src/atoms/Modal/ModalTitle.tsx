import { ModalBodyProps } from "./type";
import style from "./Modal.style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <h3 className={cx("modal-title")}>{children}</h3>
);

export default ModalBody;
