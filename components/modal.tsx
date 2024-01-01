"use client";
import { FaTimes } from "react-icons/fa";
interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0  flex items-center justify-center p-4 border-radius">
      <div className="absolute inset-0 bg-black opacity-90" />
      <div className="relative z-10  w-full max-w-6xl overflow-y-auto bg-white p-6 md:rounded-lg border border-gray">
        <div className="h-10 text-2xl font-bold text-center">{title}</div>
        <button
          type="button"
          className="absolute right-0 top-0 m-6 text-gray-400 transition-all hover:text-red-400"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
