import React from 'react'
import "./Gallery.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ImageData from '../dataPoint/imageData'
import BottomMenu from './BottomMenu'
import Footer from "../components/Footer"

function Gallery() {

    const colCount = { 300: 2, 750: 2, 900: 3 }
    const images = ImageData;
 
    return (
        <div className='gallery-page'>
            {/* menu */}
        <div className='menu'>
            <BottomMenu/>
        </div>      
          {/*  heading */}

{/*  */}
          <div className='gallery-holder'>
            {/* Gallery Element */}
            <ResponsiveMasonry columnsCountBreakPoints={colCount}>
                <Masonry gutter="4">
                    {images.imageData.map((imageFile) => (
                        <img key={images.id} className='gallery-img' src={imageFile.image} />
                    ))
                    }
                </Masonry>
            </ResponsiveMasonry>
            </div>


            <div className='gallery-footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Gallery