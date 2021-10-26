import React from 'react';
import CarouselCard from '../components/Carousel';
import Footer from '../components/Footer';
import Restaurants from './Restaurants'
import About from '../components/About';


const Home = ()=> {
    return <div>
       <CarouselCard/>
       <Restaurants />
       <About/>
    </div>
}

export default Home