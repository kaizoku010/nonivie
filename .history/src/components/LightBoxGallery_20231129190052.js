import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
// import { LightGallerySettings } from 'lightgallery/lg-settings';

import "./Gallery.css"
// import lgZoom from 'lightgallery/plugins/zoom';
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
        <div style={{ boxSizing: "border-box" }}>


            {/* the lib starts here */}
            <LightGallery
                onInit={onInit}
                // speed={500}
                zoom={false}
                mobileSettings={{showCloseIcon:true}}
                className="gallery-container d-flex align-items-center justify-content-center"
                id="gallery-container"
                zoomFromOrigin={{false}
                animateThumb={false}
                // className="test-row"
                mode="lg-slide"
                // id="light"
                >


                {images.imageData.map((imageFile) => (
                    <a  data-lg-size="1400-1402"
                        className="gallery-item item"
                        data-src={imageFile.image}
                    >
                        <img
                            className="img-fluid gallery-img"
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
