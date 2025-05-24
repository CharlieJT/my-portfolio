import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) {
    console.error("Modal root element with ID 'modal' not found.");
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-modal-slide-up"
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
    </div>,
    modalRoot
  );
};

export default Modal;
