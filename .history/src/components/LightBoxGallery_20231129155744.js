import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
// import { LightGallerySettings } from 'lightgallery/lg-settings';

import "./Gallery.css"
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import ImageData from '../dataPoint/imageData'


const LightBoxGallery = () => {
    const [name, setName] = useState('React');
    const onInit = () => {
        console.log("we on")
    }


    // const settings = LightGallerySettings = {
    //     // Add your LightGallery settings here
    //   };

    const images = ImageData;
    return (
        <div>



            <LightGallery plugins={[lgZoom, lgVideo]}
            onInit={onInit}
            speed={500}
            mode="lg-fade" id="light">


                {images.imageData.map((imageFile) => (
            <div></
            <a
                        data-lg-size="1406-1390"
                        className="gallery-item item"
                        data-src={imageFile.image}
                        // data-sub-html="<p>Test</p>"
                    >
                        <img
                            className="img-responsive gallery-img"
                            key={imageFile.id}
                            src={imageFile.image} />
                    </a>
                ))
                }

            </LightGallery>
        </div>
    );
};


export default LightBoxGallery;
