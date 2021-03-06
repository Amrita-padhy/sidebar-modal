import React from "react";
import { useGlobalContext } from './context';


const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
        <i className="bi bi-x-square-fill"></i>
        </button>
      </div>
    </div>
  );
};


export default Modal