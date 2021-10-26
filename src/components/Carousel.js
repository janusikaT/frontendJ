import React from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from '../Images/fi.jpeg'
import image2 from '../Images/home-img-2.png'
import image3 from '../Images/home-img-3.png'

const CarouselCard = () => {
    return <div>
        <Carousel>
    <Carousel.Item>
    <img
        className="d-block"
        src={image1}
        alt="first slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block "
        src={image2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={image3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
}

export default CarouselCard