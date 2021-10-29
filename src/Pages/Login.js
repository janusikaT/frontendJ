import { Link, Redirect,useHistory } from 'react-router-dom'
import React, {useState,Redi} from 'react';
import axios from 'axios';
import './Login.css';



import { withRouter } from "react-router-dom";

function LoginForm(props) {
    let history = useHistory()

    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "phonenumber":state.phonenumber,
            "password":state.password,
        }
        axios.post(`http://localhost:4000/user/login`, payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    handleSubmit();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
     const handleSubmit = ()=>{
        history.push("/restaurants")
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
        <div class= 'container'>

            <div id='loginheading'> LOG IN</div>
            <form class ='loginpg'>
                
                
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1" class='lg'>Phonenumber</label>
                <input type="number" 
                       className="form-control" 
                       id="phonenumber" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter Phonenumber" 
                       value={state.phonenumber}
                       onChange={handleChange}
                />
                
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1" class='lg'>Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    id='lbutton'
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default withRouter(LoginForm);
