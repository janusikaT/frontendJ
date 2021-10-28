import React, {useState} from 'react';
import axios from 'axios';
import './Foodaddpage.css';



function Foodadd(props) {
    const [state , setState] = useState({
        type:"",
        name:"",
        price:"",
        image:""
        
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {

            const payload={
                "name":state.name,
                "type":state.type,
                "price":state.price,
                "image":state.image,
            }
            axios.post('http://localhost:4000/foods', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Food adding successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(`yarlbite`,response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
    
        
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
            sendDetailsToServer()    
     
    }
    return(
        <div class='container'>
       
            <div id='faddheading'>FOOD ADD</div>
            <form class='faddpg'>
            <div className="form-group text-left">
                <label htmlFor="name" class='fa'>Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       
                       placeholder="Enter Food Name" 
                       value={state.name}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="type" class='fa'> Food Type</label>
                <input type="text" 
                       className="form-control" 
                       id="type" 
                    
                       placeholder="Enter Food Type" 
                       value={state.type}
                       onChange={handleChange}
                />
                
                </div>
                
                <div className="form-group text-left">
                <label htmlFor="price" class='fa'>Price</label>
                <input type="number" 
                       className="form-control" 
                       id="price" 
                     
                       placeholder="Enter Price" 
                       value={state.price}
                       onChange={handleChange}
                />
                
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1" class='fa'>Image</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                
                <button 
                    type="submit" 
                    id='fabutton'
                    onClick={handleSubmitClick}
                >
                    Food Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
           
            
        </div>
    
    )
}

export default(Foodadd);