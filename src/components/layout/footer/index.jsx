import React from "react";
import { Container } from "react-bootstrap";
export default function LayoutFooter() {
  return (
    <div className="footer-layout">
      <Container className='company-place'>
     
          <p className='m-0 company-office'>
            <span className="fs-3">Drivehub Co.,Lte</span>
            <br />
            19.-195 Lake Tajada Office Complex <br /> Ratchadapisek road, Khlong
            Toei, Bangkok
          </p>
        
        <div className="company-license">Drivehub 2023</div>
      </Container>
    </div>
  );
}
