import React from 'react'
import "./Gallery.css"
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function Gallery() {

const colCount = {300: 2, 750}
    return (
    <div>
        <ResponsiveMasonry></ResponsiveMasonry>
    </div>
  )
}

export default Gallery