import React from "react";
import CarListCard from "../carListCard";
import { Container, Row, Col } from "react-bootstrap";

export default function CarList({ list = [], setCarAdded, carAdded }) {
    React.useEffect(()=>{
        console.log('carAdd',carAdded)
      },[carAdded])
  return (
    <div className="car-list" >
      <Container className="pt-4">
        {" "}
        <Row className='g-4'>
          {list?.map((item, index) => (
            <Col sm={4} lg={3}>
              <CarListCard eachCar={item} setCarAdded={setCarAdded} carAdded={carAdded} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
