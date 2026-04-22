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
        className={`fixed inset-0 flex justify-center items-center z-[120] p-4 sm:p-6 transition-opacity duration-200 animate-modal-slide-up ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-2xl rounded-[1.75rem] bg-gradient-to-br from-primary/40 via-sky-400/10 to-transparent p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] animate-modal-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] border border-white/10 bg-gray-900/95 backdrop-blur-xl px-6 py-8 sm:px-8 sm:py-10">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-white"
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
