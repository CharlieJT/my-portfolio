import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Backdrop from "../UI/Backdrop";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const TRANSITION_DURATION = 200;

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const [rendered, setRendered] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setRendered(true);
    } else {
      const timeout = setTimeout(() => setRendered(false), TRANSITION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const modalRoot = document.getElementById("modal");
  if (!modalRoot || !rendered) return null;

  return createPortal(
    <>
      <Backdrop isOpen={isOpen} closeDrawerOnBackdropClick={onClose} />
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-200  animate-modal-slide-up ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative z-50 animate-modal-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            aria-label="Close Modal"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
