import React, {useState} from 'react';
import axios from 'axios';
import './Foodaddpage.css';


export default class Foodadd extends React.Component{
// function Foodadd(props) {
    constructor(props){
        super(props);
      this.state = {
        type:"",
        name:"",
        price:"",
        image:null,
        restaurantid :this.props.match.params.id
      };
      
      }
 
    
     handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
     sendDetailsToServer = () => {


            let formData = new FormData();
      console.log(this.state.name);
        // Update the formData object
        formData.append(
            "name",
            this.state.name
        );
        formData.append(
            "type",
            this.state.type
        );
        formData.append(
            "price",
            this.state.price,
        );
        formData.append(
            "image",
            this.state.image
        );
        formData.append(
            "restaurantId",
            this.state.restaurantid  
        );
        for (var value of formData.values()) {
            console.log(value);
         }
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
            axios.post('http://localhost:4000/foods', formData,config)
                .then(function (response) {
                    if(response.status === 200){
                        this.setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Food adding successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(`yarlbite`,response.data.token);
                        this.redirectToHome();
                        this.props.showError(null)
                    } else{
                        this.props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
    
        
    }
     redirectToHome = () => {
        this.props.updateTitle('Home')
        this.props.history.push('/home');
    }
    
     handleSubmitClick = (e) => {
        e.preventDefault();
        this.sendDetailsToServer()    
     
    }

     onFileChange = event => {
      console.log(event.target.files[0]);
        // Update the state
        this.setState({ image: event.target.files[0] });
      
      };


      render() {
        return(
            <div class='container'>
           {this.state.restaurantid}
                <div id='faddheading'>FOOD ADD</div>
                <form class='faddpg'>
                <div className="form-group text-left">
                    <label htmlFor="name" class='fa'>Name</label>
                    <input type="text" 
                           className="form-control" 
                           id="name" 
                           
                           placeholder="Enter Food Name" 
                           value={this.state.name}
                           onChange={this.handleChange}
                    />
                    
                    </div>
                    <div className="form-group text-left">
                    <label htmlFor="type" class='fa'> Food Type</label>
                    <input type="text" 
                           className="form-control" 
                           id="type" 
                        
                           placeholder="Enter Food Type" 
                           value={this.state.type}
                           onChange={this.handleChange}
                    />
                    
                    </div>
                    
                    <div className="form-group text-left">
                    <label htmlFor="price" class='fa'>Price</label>
                    <input type="number" 
                           className="form-control" 
                           id="price" 
                         
                           placeholder="Enter Price" 
                           value={this.state.price}
                           onChange={this.handleChange}
                    />
                    
                    
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1" class='fa'>Image</label>
                        <input type="file" onChange={(evt) => this.onFileChange(evt)} />
                    </div>
    
                    
                    <button 
                        type="submit" 
                        id='fabutton'
                        onClick={this.handleSubmitClick}
                    >
                        Food Register
                    </button>
                </form>
                <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                    {this.state.successMessage}
                </div>
               
                
            </div>
        
        )
      }
    
}

