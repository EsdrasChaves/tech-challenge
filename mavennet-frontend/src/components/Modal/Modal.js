import React from "react"
import ReactDOM from "react-dom"

import './Modal.css'


const Modal = ({ children, closeModal }) => (
  ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">
        <header className="modal__header">
          <div onClick={() => closeModal()}>
            <i className="far fa-times-circle modal__close-button" ></i>
          </div>
        </header>
        <main className="modal__main-content">
          {children}
        </main>
      </div>
    </div>,
    document.getElementById('modal')
  )
);

export default Modal
