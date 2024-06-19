import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children}) => {
  return createPortal(
    <>
      {isOpen && (
        <div className=" grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur">
          <div className="min-h-[200px] relative z-50 min-w-[80%] bg-white p-4 m-auto">
            <div className="flex justify-end">
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
