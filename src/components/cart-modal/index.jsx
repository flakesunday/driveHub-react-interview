import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CartModal({ showModal, setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Modal
      show={showModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
    
      </Modal.Body>
      <Modal.Footer>
     
      </Modal.Footer>
    </Modal>
  );
}
