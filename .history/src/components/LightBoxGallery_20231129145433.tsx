import React, { useState } from 'react';
import LightGallery from 'lightgallery/react';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import ImageData from '../dataPoint/imageData'


const LightBoxGallery = () => {
  const [name, setName] = useState('React');
  const onInit = ()=>{
    console.log()
  }

  const settings: LightGallerySettings = {
    // Add your LightGallery settings here
  };

  const images = ImageData;


  return (
    <div>
      <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
        <a
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>

        {images.imageData.map((imageFile) => (
                                <a 
                                className="gallery-item"
                                data-src ={imageFile.image}
                                data-sub-html="<p><p>"
                                >
                                <img key={imageFile.id} className='gallery-img' src={imageFile.image} />
                                </a>
                            ))
                            }

        </LightGallery>
    </div>
  );
};

export default LightBoxGallery;
