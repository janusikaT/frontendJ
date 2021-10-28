import React, {useState} from 'react';
import axios from 'axios';
import './Restaurantaddpage.css';



function Restaurantadd(props) {
    const [state , setState] = useState({
        food:"",
        password : "",
        name:"",
        address:"",
        phonenumber:""
        
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
                "address":state.address,
                "phonenumber":state.phonenumber,
                "email":state.food,
                "password":state.password,
            }
            axios.post(`http://localhost:4000/restaurants`, payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Restaurant registration successful. Redirecting to home page..'
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
       
            <div id='resaddheading'>RESTAURANT SIGN UP</div>
            <form class='resaddpg'>
            <div className="form-group text-left">
                <label htmlFor="name" class='ra'>Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       
                       placeholder="Enter Restaurant Name" 
                       value={state.name}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="address" class='ra'> Address</label>
                <input type="text" 
                       className="form-control" 
                       id="address" 
                    
                       placeholder="Enter Restaurant Address" 
                       value={state.address}
                       onChange={handleChange}
                />
                
                </div>
                
                <div className="form-group text-left">
                <label htmlFor="phonenumber" class='ra'>PhoneNumber</label>
                <input type="number" 
                       className="form-control" 
                       id="phonenumber" 
                     
                       placeholder="Enter PhoneNumber" 
                       value={state.phonenumber}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1" class='ra'>Food</label>
                <input type="food" 
                       className="form-control" 
                       id="food" 
                     
                       placeholder="Enter Food Details" 
                       value={state.food}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1" class='ra'>Password</label>
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
                    id='rabutton'
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
           
            
        </div>
    
    )
}

export default(Restaurantadd);