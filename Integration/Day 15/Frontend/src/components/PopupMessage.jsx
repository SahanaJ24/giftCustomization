// PopupMessage.jsx
import React from 'react';
import Modal from 'react-modal';
import '../assets/css/popupmessage.css'

const PopupMessage = ({ isOpen, onClose, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Message"
    >
      <div>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default PopupMessage;