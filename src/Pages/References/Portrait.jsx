import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../client';
import './References.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This line imports the required CSS



const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});

function Portrait() {

    const [images, setImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lightboxRef = useRef(null);

    useEffect(() => {
        client.getEntries({
            content_type: 'album',
            'fields.title': 'Portrait'
        })
        .then(response => {
            if (response.items.length > 0) {
                const albumData = response.items[0].fields;
                const mappedImages = albumData.images.map(image => ({
                    src: 'https:' + image.fields.file.url
                }));
                setImages(mappedImages);
                
            }
        })
        .catch(console.error);
    }, []); 

    if (lightboxOpen) {
        const nextImage = new Image();
        nextImage.src = images[(currentImageIndex + 1) % images.length].src;
    
        const prevImage = new Image();
        prevImage.src = images[(currentImageIndex + images.length - 1) % images.length].src;
    }
    
    
    if (!images) return null;


    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        if (lightboxRef.current) {
            lightboxRef.current.forceUpdate();
        }
        setLightboxOpen(true);
    };

    return (
        <div>
            <ResponsiveMasonry columnsCountBreakPoints={{750: 1, 1024: 2}}>
                <Masonry gutter='10px' >
                    {images.map((image, index) => (
                        <img 
                            key={image.src} 
                            style={{ maxHeight: "100%", maxWidth:"100%", display: "block", aspectRatio: "auto", overflow: "hidden", objectFit: "cover", cursor: "pointer" }}
                            src={image.src} 
                            alt={image.legend}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            {lightboxOpen && (
                <Lightbox
                    ref={lightboxRef}
                    mainSrc={images[currentImageIndex].src}
                    nextSrc={images[(currentImageIndex + 1) % images.length].src}
                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length].src}
                    onCloseRequest={() => setLightboxOpen(false)}
                    onMovePrevRequest={() =>
                        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setCurrentImageIndex((currentImageIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    );
}

export default Portrait;
