import React from "react";
import CarListCard from "../carListCard";
import { Container, Row, Col } from "react-bootstrap";

export default function CarList({ list = [] }) {
  return (
    <div className="car-list" >
      <Container className="pt-4">
        {" "}
        <Row className='g-4'>
          {list?.map((item, index) => (
            <Col sm={4} lg={3}>
              <CarListCard eachCar={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
