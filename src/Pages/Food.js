import React from "react";
import Navbar from "../components/Navbar"
import axios from 'axios';
import { Card, Button, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Foods extends React.Component {
    
    state = {
        foods: []
       
      }
    
      componentDidMount() {
        axios.get(`http://localhost:4000/foods`)
          .then(res => {
              console.log(res);
            const foods = res.data.foods;
            this.setState({ foods });
          })
      }
    outCards(props){
        return this.state.foods.map(food => 
            <Card key={food._id} shadow={4} style={{ width: '300px',margin: "auto" }}>
            <Card.Title style={{height: '250px', background: food.name }}>{food.name}</Card.Title>
            <Card.Text>
                {food.address}
                {food.phonenumber}
            </Card.Text>
            <Link to={`/foods/${food._id}`}>
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

