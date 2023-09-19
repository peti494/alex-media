import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";  // This imports the necessary CSS
import './Carousel_1.css'



const Carousel1 = () => {
    // Sample array of images. You can replace this with your actual image paths
    const images = [
        { src: 'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', legend: 'Legend 1' },
        { src: 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', legend: 'Legend 2' },
        { src: 'https://images.unsplash.com/photo-1694687530321-7ecd3c9163b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80', legend: 'Legend 3' },
        // ... add as many images as you want
    ];




    return (
        <Carousel swipeable={true}  showThumbs={false} infiniteLoop={true} autoPlay={true} interval={8000} transitionTime={2000} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={true} width="50vw">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.legend} />
                    
                </div>
            ))}
        </Carousel>
    );
}

export default Carousel1;
