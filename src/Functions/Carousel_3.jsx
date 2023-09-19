import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // This imports the necessary CSS


const Carousel3 = () => {
    // Sample array of images. You can replace this with your actual image paths
    const images = [
        { src: 'https://images.unsplash.com/photo-1694659694812-6d46a6d43040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', legend: 'Legend 1' },
        { src: 'https://images.unsplash.com/photo-1694782172333-2703f5573b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80', legend: 'Legend 2' },
        { src: 'https://images.unsplash.com/photo-1694032073070-c54e65e77bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', legend: 'Legend 3' },
        // ... add as many images as you want
    ];

    return (<div className="teszt">
    <Carousel className="carousel2" swipeable={true}  showThumbs={false} infiniteLoop={true} autoPlay={true} interval={14500} transitionTime={2000} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={true} width="100%">
        {images.map((image, index) => (
            <div  key={index}>
                <img src={image.src} alt={image.legend} />
               
            </div>
        ))}
    </Carousel></div>
);
}

export default Carousel3;
