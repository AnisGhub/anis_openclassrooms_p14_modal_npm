# modal-library

> a simple react modal library used for a small project

## Install

```bash
npm i modal-pkg-opc
```

## Usage

In your `App.jsx` file

```jsx
import React, { useState } from "react";

import Modal from "modal-pkg-opc";

const App = () => {
  // handle modal state in parent component
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>

      {openModal && (
        <Modal message="Employee added successfully!" closeModal={() => setOpenModal(false)} />
      )}
    </div>
  );
};
```

`Modal.jsx` file

```jsx
/**
 * Modal Component
 * @param {string} message - The message to be displayed in the modal
 * @param {function} closeModal - Callback function to close the modal
 * @returns {JSX.Element} - JSX element representing the modal
 */
const Modal = ({ message, closeModal }) => {
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
};

export default Modal;
```

## License

MIT © [Anis]
