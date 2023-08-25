# modal-library

> a simple react modal library used for a small project

## Install

```bash
npm i modal-pkg-opc
```

## Usage

In your `App.jsx` file

```jsx
import React from "react";

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
const Modal = ({ message, closeModal }) => {
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
