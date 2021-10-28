import React from "react";
import {Card,Button} from "react-bootstrap"

const FoodCard = (props) => {
    return (
        <Card style={{ width: '18rem' }} className="">
  <Card.Img/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
     {props.price}
    </Card.Text>
    <Card.Text>
     {props.type}
    </Card.Text>
    <Button variant="primary" className="btn btn-success">Add To Cart</Button>
  </Card.Body>
</Card>
    )
}


export default FoodCard