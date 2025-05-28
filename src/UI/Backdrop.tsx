type BackdropProps = {
  isOpen: boolean;
  closeDrawerOnBackdropClick: () => void;
};

const Backdrop = ({
  isOpen = false,
  closeDrawerOnBackdropClick,
}: BackdropProps) => (
  <div
    className={`fixed inset-0 bg-black z-40 transition-opacity duration-200 ${
      isOpen
        ? "opacity-50 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
    onClick={closeDrawerOnBackdropClick}
  />
);

export default Backdrop;
