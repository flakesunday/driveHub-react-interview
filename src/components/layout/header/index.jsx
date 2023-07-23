import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function LayoutHeader() {
  return (
    <div>
      <Navbar expand="lg" className="app-header shadow bg-white rounded">
        <Container >
          <div>
            <h4 style={{fontWeight:'700'}}>DRIVEHUB</h4>
          </div>
          <div>cart</div>
        </Container>
      </Navbar>
    </div>
  );
}
