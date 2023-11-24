
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export default Modal ;
