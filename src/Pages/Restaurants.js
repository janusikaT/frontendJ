import React from "react";
import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Restaurants.css';
import image3 from '../Images/res2.jpg'



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
            <Card key={restaurant._id} shadow={5} style={{ width: '300px',margin: "auto", borderRadius: '25px',marginTop:'50px' }}>
            <Card.Title style={{height: '75px', background: restaurant.name, paddingTop:'30px' }} class='resheading'>{restaurant.name}</Card.Title>
            <img src={image3}/>
            <Card.Text class= 'pnoandaddress' >
                {restaurant.address}
               
            </Card.Text>
            <Card.Text class= 'pnoandaddress'>
                 {restaurant.phonenumber}
            </Card.Text>
            <Link to={`/restaurant/${restaurant._id}`}>
            <Button  id ="sbutton" style={{marginBottom:'5px'}}>Explore</Button>

            </Link>
            </Card>
            )
           
    }
      render() {
        return (
            
            <div class="box-container">
         
                <h1 style={{"text-align":"center"}}>RESTAURANTS</h1>
                <br></br>
                <Row xs={2} md={4} className="g-3">
                    {this.outCards()}
                </Row>
        

            </div>
           
          
        )
      }

}