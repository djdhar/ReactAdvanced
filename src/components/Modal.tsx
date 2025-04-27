import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

// Modal Props
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null; // Don't render anything if the modal isn't open

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById('portal-root')! // The target DOM node
  );
};

export default Modal;
