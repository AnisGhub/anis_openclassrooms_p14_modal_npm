import React from "react";
import "./modal.css";

/**
 * Modal Component
 * @param {string} message - The message to be displayed in the modal
 * @param {function} closeModal - Callback function to close the modal
 * @returns {JSX.Element} - JSX element representing the modal
 */
function Modal({ message, closeModal }) {
  // NOTE: The state should be managed in the parent component, This component is designed to display information only
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
