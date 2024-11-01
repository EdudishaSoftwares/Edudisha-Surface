import { ModalFooterProps } from "./type";
import style from './Modal.style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
    <div className={cx('modal-footer')}>
        {children}
    </div>
);

export default ModalFooter;