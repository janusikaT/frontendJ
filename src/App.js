import React from 'react';

import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Restaurants from "./Pages/Restaurants";
import Navbar from "./components/Navbar";
import Home from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRestaurant from "./Pages/SingleRestaurant"
import Login from "./Pages/Login";
import Signup from './Pages/Signup';
import Food from './Pages/Food';

import AddToCart from './Pages/AddToCart';
import Restaurantadd from './Pages/Restaurantaddpage';
import Foodadd from './Pages/Foodaddpage';






function App() {
  // const [authLoading, setAuthLoading] = useState(true);
 
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }
 
  //   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);
 
  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>
  // }
    














  return (
    <div>
    <Router>
    <Navbar />
    
    <div style={{"padding-top": "80px"}}>
    <Switch>
    <Route exact path="/" component={Home}  />
      <Route exact path="/restaurants" component={Restaurants} exact />
      <Route exact path="/restaurant/:id" component={SingleRestaurant} exact />
      <Route exact path="/login" component={Login} exact />
      <Route exact path="/signup" component={Signup} exact />
      <Route exact path="/food" component={Food} exact />
      <Route exact path="/order" component={AddToCart} exact />
      <Route exact path="/restaurantadd" component={Restaurantadd} exact />
      <Route exact path="/foodadd" component={Foodadd} exact />
      {/* <Route exact path="/foods" component={AddFood} exact /> */}
      {/* <Route exact path="/aboutus" component={About} exact /> */}
    </Switch>
    </div>
    </Router>
  </div>
  );
}

export default App;
