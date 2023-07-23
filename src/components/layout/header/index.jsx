import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function LayoutHeader({setShowModal,carAddedCount}) {
  return (
    <div>
      <Navbar expand="lg" className="app-header shadow bg-white rounded">
        <Container className="container">
          <div>
            <h4 style={{fontWeight:'700'}}>DRIVEHUB</h4>
          </div>
          <a href='#' onClick={()=>{setShowModal(true)}}>cart{carAddedCount!==0 ? `(${carAddedCount})`: ''}</a>
        </Container>
      </Navbar>
    </div>
  );
}
