import React from 'react';
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../client';
import {NavLink} from 'react-router-dom'
import './References.css';

const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});

function References() {
    const [albums, setAlbums] = useState({});

    useEffect(() => {
        client.getEntries({
            content_type: 'album',
        })
        .then(response => {
            let fetchedAlbums = {};
            
            response.items.forEach(albumItem => {
                const title = albumItem.fields.title;
                const coverSrc = 'https:' + albumItem.fields.cover.fields.file.url;

                // Assign to the fetchedAlbums object if the title matches one of the desired titles
                if (["Portrait", "Wedding", "Marketing"].includes(title)) {
                    fetchedAlbums[title] = {
                        title: title,
                        coverSrc: coverSrc,
                    };
                }
            });

            console.log('Mapped albums:', fetchedAlbums);
            setAlbums(fetchedAlbums);
        })
        .catch(console.error);
    }, []);

    return (
        <div className="reference-container-body">
            
            <div className="individual-cover">
    <NavLink to="/references/portrait">
        <div className="cover-wrapper">
            <h1 className="cover-title">Portré</h1>
            <img className="cover-images" src={albums.Portrait?.coverSrc} alt="Portrait" />
        </div>
    </NavLink>
</div>

<div className="individual-cover">
    <NavLink to="/references/wedding">
        <div className="cover-wrapper">
            <h1 className="cover-title">Esküvő</h1>
            <img className="cover-images" src={albums.Wedding?.coverSrc} alt="Wedding" />
        </div>
    </NavLink>
</div>



<div className="individual-cover">
    <NavLink to="/references/marketing">
        <div className="cover-wrapper">
            <h1 className="cover-title">Marketing</h1>
            <img className="cover-images" src={albums.Marketing?.coverSrc} alt="Marketing" />
        </div>
    </NavLink>
</div>
                
                
                
          
        </div>
    );
}

export default References;
