import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // This imports the necessary CSS
import './Carousel_1.css'

import {useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../client'

const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

const Carousel1 = () => {
   
    const [images, setImages] = useState([{}]);


    useEffect(() => {
        client.getEntries({
            content_type: 'carousel',
            'fields.title': 'Carousel_1'
        })
        .then(response => {
            if(response.items.length > 0) {
                const carouselData = response.items[0].fields;
                const mappedImages = carouselData.images.map(image => ({
                    src: 'https:' + image.fields.file.url,
                    legend: carouselData.title,
                }));
                console.log('Mapped images:', mappedImages);
                setImages(mappedImages);
            }
            
        })
        .catch(console.error);
    }, []); 
    



   /*   const images = [
        { src: 'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', legend: 'Legend 1' },
        { src: 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', legend: 'Legend 2' },
        { src: 'https://images.unsplash.com/photo-1694687530321-7ecd3c9163b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80', legend: 'Legend 3' },
    
    ];  */




    return (

        <Carousel useKeyboardArrows={true} key={images.length} swipeable={true}  showThumbs={false} infiniteLoop={true} autoPlay={true} interval={8000} transitionTime={2000} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={true} width="100vw">
          
            
            {images.map((image) => (
    <div key={image.src}>
        <img className="carouselimages" src={image.src} alt={image.legend} />

    </div>
    
))} 




        </Carousel>
    );
}

export default Carousel1;
