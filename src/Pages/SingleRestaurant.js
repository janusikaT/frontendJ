import React, { useEffect,useState } from "react";
import { useCart } from "react-use-cart";
import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

import './Restaurants.css'
import './SingleRestaurant.css'

export default class SingleRestaurant extends React.Component {
    

    
    constructor(props){
      super(props);
    this.state = {
      restaurant: {},
       foods:[],
       quantity:1
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }
    state = {
        restaurant: {},
       foods:[]
      }

      async componentDidMount() {
          const id  =  this.props.match.params.id;
          console.log(id);
        await axios.get(`http://localhost:4000/restaurants/${id}`)
          .then(res => {
     
            const restaurant = res.data.output;
            this.setState({restaurant: restaurant,
              foods:restaurant.food
            });
            // console.log(this.state.restaurant.food[0].food._id);
            
            
          })
          console.log(this.state.restaurant);
          console.log(this.state.foods);
          
      }
      
   increaseQuantity(){
    this.setState({
      quantity: this.state.quantity + 1
    });
   }
   decreaseQuantity(){
    this.setState({
      quantity: this.state.quantity - 1
    });
  }
      foodsLoop(){
        return this.state.foods.map(foo => 
          // <div key={foo.food._id}> {foo.food.name}
          // {foo.food.price}
          // {foo.food.type}
          // </div>
          <div className="coll-11 col-md-6 col-lg-3 mx-0 mb-4">
              
              <Card style={{ width: '50rem' }}  >
  <Card.Img/>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>{foo.food.name}</Card.Title>
    <Card.Text>
     {foo.food.price}
    </Card.Text>
    <Card.Text>
     {foo.food.type}
    </Card.Text>
    <Button variant="primary" className="btn btn-success">Add To Cart</Button>
  </Card.Body>

    
            {/* <div class="container">
	<div class="row">
		<h2>Simple Quantity increment buttons with Javascript </h2>
        
        
                        <div class="col-lg-2">
                                        <div class="input-group">
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" disabled={this.state.quantity==1} data-type="minus" onClick={this.decreaseQuantity}>
                                          <span class="glyphicon glyphicon-minus"></span>
                                         
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value={this.state.quantity} min="1" max="20"/>
                                    <span class="input-group-btn">
                                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" onClick={this.increaseQuantity} disabled={this.state.quantity==20} >
                                            <span class="glyphicon glyphicon-plus"></span>
                                        </button>
                                    </span>
                                </div>
                        </div>
	</div>

</div>
<div>{this.state.quantity}</div> */}
            
            </Card>
          </div>

            



            )
        
      }
          
      render() {
        return <div class="box-container">
          <h1> {this.state.restaurant.name} </h1>
        {this.foodsLoop()}  
     </div>
            
     
         
                {/* <h1 style={{"text-align":"center"}} >RESTAURANT</h1>
                <Card  shadow={4} style={{ width: '300px',margin: "auto",borderRadius: '20px'}}>
            <Card.Title style={{height: '250px'}} class='resheading'>{this.state.restaurant.name}</Card.Title>
            <Card.Text class='pnoandaddress'>
                {this.state.restaurant.address}
            </Card.Text>
            <Card.Text class='pnoandaddress'>
                {this.state.restaurant.phonenumber} */}
                
            {/* </Card.Text>
           

         </Card>
       

            </div> */}
           
          
        
      }

}


