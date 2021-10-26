import React from "react";
import Navbar from "../components/Navbar"
import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Restaurants extends React.Component {
    
    state = {
        restaurants: []
       
      }
    
      componentDidMount() {
        axios.get(`http://localhost:4000/restaurants`)
          .then(res => {
              console.log(res);
            const restaurants = res.data.resturant;
            this.setState({ restaurants });
          })
      }
    outCards(props){
        return this.state.restaurants.map(restaurant => 
            <Card key={restaurant._id} shadow={4} style={{ width: '300px',margin: "auto" }}>
            <Card.Title style={{height: '250px', background: restaurant.name }}>{restaurant.name}</Card.Title>
            <Card.Text>
                {restaurant.address}
                {restaurant.phonenumber}
            </Card.Text>
            <Link to={`/restaurant/${restaurant._id}`}>
            <Button variant="primary">Go somewhere</Button>

            </Link>
        </Card>
            )
    }
      render() {
        return (
            
            <div class="box-container">
         
                <h1 style={{"text-align":"center"}}>RESTAURANTS</h1>
                <br></br>
                <Row xs={1} md={2} className="g-4">
             {this.outCards()}
              
             </Row>
        

            </div>
           
          
        )
      }

}

