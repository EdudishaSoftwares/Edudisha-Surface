import { ModalBodyProps } from "./type";
import style from "./Modal.style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => (
  <div className={cx("modal-body")}>{children}</div>
);

export default ModalBody;
