import React from 'react'
import "./Gallery.css"
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function Gallery() {

const colCount = {300: 2, 750: 2, 900: 3}
const images = []

    return (
    <div>
        <ResponsiveMasonry columnsCountBreakPoints={colCount}>
<Masonry gutter=''>
    {images.map((image) => (
        <img src={image}/>
    ))}
</Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Gallery