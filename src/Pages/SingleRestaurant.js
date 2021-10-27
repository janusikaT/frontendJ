import React, { useEffect,useState } from "react";

import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

import './Restaurants.css'
import './SingleRestaurant.css'

export default class SingleRestaurant extends React.Component {
    
    state = {
        restaurant: {}
       
      }

      componentDidMount() {
          const id  =  this.props.match.params.id;
          console.log(id);
        axios.get(`http://localhost:4000/restaurants/${id}`)
          .then(res => {
     
            const restaurant = res.data.output;
            this.setState({ restaurant });
            // console.log(this.state.restaurant.food[0].food._id);
            
            
          })
          
      }
      foodsLoop(){
        return this.state.restaurant.food.map(foo => 
            <Card key={foo.food._id} shadow={4} style={{ width: '300px',margin: "auto" }}>
            <Card.Title style={{height: '250px',  }}>{foo.food.name}</Card.Title>
       
        </Card>
            )
        
      }
          
      render() {
        return (
            
            <div class="box-container">
         
                <h1 style={{"text-align":"center"}} >RESTAURANT</h1>
                <Card  shadow={4} style={{ width: '300px',margin: "auto",borderRadius: '20px'}}>
            <Card.Title style={{height: '250px'}} class='resheading'>{this.state.restaurant.name}</Card.Title>
            <Card.Text class='pnoandaddress'>
                {this.state.restaurant.address}
            </Card.Text>
            <Card.Text class='pnoandaddress'>
                {this.state.restaurant.phonenumber}
               
            </Card.Text>
           

        </Card>
       

            </div>
           
          
        )
      }

}


