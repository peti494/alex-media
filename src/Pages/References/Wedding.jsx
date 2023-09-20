import React from 'react';
import {useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../client'
import './References.css'

const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });



function Wedding() {


    const [images, setImages] = useState([{}]);


    useEffect(() => {
        client.getEntries({
            content_type: 'album',
            'fields.title': 'Wedding'
        })
        .then(response => {
            if(response.items.length > 0) {
                const albumData = response.items[0].fields;
                const mappedImages = albumData.images.map(image => ({
                    src: 'https:' + image.fields.file.url
                }));
                console.log('Mapped images:', mappedImages);
                setImages(mappedImages);
            }
            
        })
        .catch(console.error);
    }, []); 





  return (


  <div>
    
    <section className="album-grid" key={images.length}>
    <h1>Wedding</h1>
    {images.map((image) => (
    <div key={image.src}>
        <img className="album-images" src={image.src} alt={image.legend} />

    </div>
    
))} 


    </section>
    
    
    </div>
  
  
  
  );
  
}

export default Wedding;
