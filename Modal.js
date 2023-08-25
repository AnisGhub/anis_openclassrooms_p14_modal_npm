import React from "react";
import "./modal.css";

function Modal({ message, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button className="modal-close" onClick={() => closeModal(false)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
