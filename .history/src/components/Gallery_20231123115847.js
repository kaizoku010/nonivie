import React from 'react'
import "./Gallery.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ImageData from '../dataPoint/imageData'
import BottomMenu from './BottomMenu'
import Footer from "../components/Footer"
import MobileMenu from "../components/MobileMenu"
import FooterMo

function Gallery() {

    const colCount = { 300: 2, 750: 2, 900: 3 }
    const images = ImageData;
 
    return (
        <div className='gallery-page'>

{/* pc gallery */}
            <div className='pc-gallery'>

            {/* menu */}
        <div className='menu'>
            <BottomMenu/>
        </div>      
            {/*  heading */}
            <h1 className='gallery-title'>Our Lens</h1>

            {/* gallery */}
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

            {/* mobile gallery */}

        </div>
    )
}

export default Gallery