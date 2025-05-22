import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from 'lightgallery/plugins/zoom';
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

            </LightGallery>
        </div>
    );
};
}

export default LightBoxGallery;
