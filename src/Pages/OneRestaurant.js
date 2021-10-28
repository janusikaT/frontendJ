import React from 'react'
import axios from 'axios'



class OneRestaurant extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          restaurant:{},
        foods: [],
        
      };
    }
  
    componentDidMount() {
        const id  =  this.props.match.params.id
      axios.get(`http://localhost:4000/restaurants/${id}`)
        .then(result => {
           const restaurant = result.data.output
          this.setState({
            isLoaded: true,
            
            foods:restaurant.food
            
          });
          console.log(result)
        });
    }
  
    render() {
      const { foods } = this.state;
        return (
          <ul>
            {foods.map(item => (
              <li key={foods._id}>
                <h3>{foods.name}</h3>
                <p>{foods.type}</p>
              </li>
            ))}
          </ul>
        );
      }
    }
  

  export default OneRestaurant