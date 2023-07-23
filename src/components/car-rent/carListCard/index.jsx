import React from "react";
import { Card, Button } from "react-bootstrap";


export default function CarListCard({setCarAdded,eachCar,carAdded}) {
// const [car, setCar] = React.useState(

// )
const addCarInCart = () =>{
    setCarAdded([...carAdded,eachCar])
}
const disabledButton = () => {
    if(carAdded.some((item)=> item.title === eachCar?.title) === true){
        return true
    }else{
        return false
    }
}
  return (
  
      <Card className="car-card" >
        <Card.Img variant="top" src={eachCar?.photo} className="car-card-img" />
        <Card.Body className="car-card-body">
          <Card.Title>{eachCar?.title}</Card.Title>
          <Card.Text>
           {eachCar?.price.toLocaleString()} THB/Day
          </Card.Text>
          <Button variant="primary" className="w-100" onClick={()=>{addCarInCart()}} disabled={disabledButton()}>Add to cart</Button>
        </Card.Body>
      </Card>
   
  );
}
