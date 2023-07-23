import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function LayoutHeader({setShowModal}) {
  return (
    <div>
      <Navbar expand="lg" className="app-header shadow bg-white rounded">
        <Container className="container">
          <div>
            <h4 style={{fontWeight:'700'}}>DRIVEHUB</h4>
          </div>
          <a href='#' onClick={()=>{setShowModal(true)}}>cart</a>
        </Container>
      </Navbar>
    </div>
  );
}
