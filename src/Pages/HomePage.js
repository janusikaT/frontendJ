import React from 'react';
import CarouselCard from '../components/Carousel';
import Footer from '../components/Footer.js';
import Restaurants from './Restaurants'
import About from '../components/About';

<link href='../components/Footer.js'></link>

const Home = ()=> {
    return <div>
       <CarouselCard/>
       <Restaurants />
       <About/>
    </div>
}

export default Home