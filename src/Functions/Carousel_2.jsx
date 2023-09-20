import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // This imports the necessary CSS
import './Carousel_2.css'

/* import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../client' */

/* const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  }); */


const Carousel2 = () => {
    // Sample array of images. You can replace this with your actual image paths
    const images = [
        { src: 'https://images.unsplash.com/photo-1695015316959-dba54e216898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', legend: 'Legend 1' },
        { src: 'https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', legend: 'Legend 2' },
        { src: 'https://images.unsplash.com/photo-1694445680519-75f799631b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80', legend: 'Legend 3' },
        // ... add as many images as you want
    ];

    return (<div className="teszt">
        <Carousel className="carousel2" swipeable={true}  showThumbs={false} infiniteLoop={true} autoPlay={true} interval={10500} transitionTime={2000} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={true} width="100%">
            {images.map((image, index) => (
                <div  key={index}>
                    <img src={image.src} alt={image.legend} />
                   
                </div>
            ))}
        </Carousel></div>
    );
}

export default Carousel2;
