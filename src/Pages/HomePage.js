// import React from 'react';
// import ControlledCarousel from '../components/c';
// import Restaurants from './Restaurants'




// const Home = ()=> {
//     return <div>
//        <ControlledCarousel/>
//        <Restaurants />
    
//     </div>
// }

// export default Home

import React from "react";
import bgImage from "../Images/bg2.jpg";
import './Homepage.css'
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  

  return (
      <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+bgImage+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <h1 class="text" >Welcome to the YARL BITE page.</h1>

        <Link to={`/restaurants`}>
            <Button  id ="hbutton" style={{marginBottom:'5px'}}>Explore The Restaurants</Button>

        </Link>
      


  
   

      </div>
  );
}

export default Home;


// import React from 'react';
// //import './App.css';
// import desktopbgImage from "../Images/bg2.jpg";
// import mobilebgImage from "../Images/bg2.jpg";

// const Home = () => {
//     const imageUrl = window.innerWidth >= 650 ? desktopbgImage : mobilebgImage;

//     return (
//         <div className="Home" style={{backgroundImage: `url(${imageUrl})` }}>
//             <div className="App-content">
//                 <h1>Pineapples</h1>
//                 <p>They are good</p>
//             </div>
//         </div>
//     );
// };

// export default Home;
