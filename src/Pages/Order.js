import React from "react";
import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { Link } from "react-router-dom";




export default class Order extends React.Component {
    constructor(props) {
super(props)
this.state = {
  orders: []
 
}
    }
    
    
      async componentDidMount() {
        await axios.get(`http://localhost:4000/order`)
          .then(res => {

            const response  = res.data.orders ;
            this.setState({ orders:response });
            console.log(this.state.orders);
          })
      }
      foodsLoop() {
        return 
      }
    outCards(){
  
        return this.state.orders.map(order => 
            <Card key={order._id} shadow={5} style={{ width: '300px',margin: "auto", borderRadius: '25px',marginTop:'50px' }}>
            <Card.Title style={{height: '75px',paddingTop:'30px' }} class='resheading'>{order._id}</Card.Title>
           
            
        <Card.Text class= 'pnoandaddress' > 
        {order.orderFoods.map(foo => <div>
              {foo.quantity}  
        </div>)
    }
            </Card.Text>
         
             <Button style={{marginBottom:'5px'}}>Delete</Button>
            </Card>
             )
           
    }
      render() {
        return (
            
            <div class="box-container">
         
                <h1 style={{"text-align":"center"}}>Order</h1>
                <br></br>
                <Row xs={2} md={4} className="g-3">
                    {this.outCards()}
                </Row>
        

            </div>
           
          
        )
      }

}