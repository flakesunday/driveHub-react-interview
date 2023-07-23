import React from "react";
import { Card, Button } from "react-bootstrap";


export default function CarListCard({eachCar}) {
// const [car, setCar] = React.useState(

// )
  
  return (
  
      <Card className="car-card" >
        <Card.Img variant="top" src={eachCar?.photo} className="car-card-img" />
        <Card.Body className="car-card-body">
          <Card.Title>{eachCar?.title}</Card.Title>
          <Card.Text>
           {eachCar?.price.toLocaleString()} THB/Day
          </Card.Text>
          <Button variant="primary" className="w-100">Add to cart</Button>
        </Card.Body>
      </Card>
   
  );
}
