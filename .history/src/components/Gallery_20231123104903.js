import React from 'react'
import "./Gallery.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ImageData from '../dataPoint/imageData'

function Gallery() {

    const colCount = { 300: 2, 750: 2, 900: 3 }
    const images = ImageData;
 
    return (
        <div>
            <ResponsiveMasonry columnsCountBreakPoints={colCount}>
                <Masonry gutter="4">
                    {images.imageData.map((imageFile) => (
                        <img key={images.id} className='gallery-img' src={imageFile.image} />

                    ))

                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default Gallery