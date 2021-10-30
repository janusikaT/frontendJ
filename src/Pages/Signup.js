
  
import React, {useState} from 'react';
import axios from 'axios';
import './Signup.css';



function Signup(props) {
    const [state , setState] = useState({
        email : "",
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
                "email":state.email,
                "password":state.password,
            }
            axios.post(`http://localhost:4000/user/signup`, payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
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
       
        props.history.push('/home');
    }
    const redirectToLogin = () => {
      
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
            sendDetailsToServer()    
     
    }
    return(
        <div class='container'>
       
            <div id='signupheading'>SIGN UP</div>
            <form class='signuppg'>
            <div className="form-group text-left">
                <label htmlFor="name" class='sg'>Name</label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       
                       placeholder="Enter Name" 
                       value={state.name}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="address" class='sg'> Address</label>
                <input type="text" 
                       className="form-control" 
                       id="address" 
                    
                       placeholder="Enter Address" 
                       value={state.address}
                       onChange={handleChange}
                />
                
                </div>
                
                <div className="form-group text-left">
                <label htmlFor="phonenumber" class='sg'>PhoneNumber</label>
                <input type="number" 
                       className="form-control" 
                       id="phonenumber" 
                     
                       placeholder="Enter PhoneNumber" 
                       value={state.phonenumber}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1" class='sg'>Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1" class='sg'>Password</label>
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
                    id='sgbutton'
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    
    )
}

export default(Signup);

