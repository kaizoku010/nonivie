import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import ImageData from '../dataPoint/imageData'


const LightBoxGallery = () => {
    const [name, setName] = useState('React');
    const onInit = () => {
        console.log("we on")
  

    const images = ImageData;
    return (
        <div>
            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">

                {images.imageData.map((imageFile) => (
                    <a
                        data-lg-size="1406-1390"
                        className="gallery-item"
                        data-src={imageFile.image}
                        data-sub-html="<p>Test</p>"
                    >
                        <img
                            className="img-responsive"
                            key={imageFile.id}
                            src={imageFile.image} />
                    </a>
                ))
                }

            </LightGallery>
        </div>
    );
};
}

export default LightBoxGallery;
