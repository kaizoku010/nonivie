import React from 'react'
import "./Gallery.css"
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function Gallery() {

const colCount = {300: 2, 750: 2, 900: 2}
const images = []

    return (
    <div>
        <ResponsiveMasonry columnsCountBreakPoints={colCount}>
<Masonry>
    {images.map()}
</Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Gallery