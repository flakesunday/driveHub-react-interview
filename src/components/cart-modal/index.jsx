import React from "react";
import { Modal, Button,Card } from "react-bootstrap";

export default function CartModal({ showModal, setShowModal,carAdded, setCarAdded }) {
  const handleClose = () => {
    setShowModal(false);
  };
  const deleteCarAdded = (title) => {
    const deletedCar = carAdded.filter((item) => item.title !== title  )
    console.log(title)
    setCarAdded(deletedCar)
  }
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
    {
      carAdded.map((item)=>
        <Card className="p-3">
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <Card.Title>{item.title}</Card.Title>
          <a onClick={()=>{deleteCarAdded(item.title)}}>delete</a>
          </div>
         
        </Card>
      )
    }
      </Modal.Body>
      <Modal.Footer>
     
      </Modal.Footer>
    </Modal>
  );
}
