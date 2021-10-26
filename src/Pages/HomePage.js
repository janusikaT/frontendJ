import React from 'react';
import CarouselCard from '../components/Carousel';
import Footer from '../components/Footer';
import Restaurants from './Restaurants'



const Home = ()=> {
    return <div>
       <CarouselCard/>
       <Restaurants />
       <Footer/>
    </div>
}

export default Home