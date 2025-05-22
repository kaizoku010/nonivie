import React from 'react'
import "./Gallery.css"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ImageData from '../dataPoint/imageData'
import BottomMenu from './BottomMenu'
import Footer from "../components/Footer"
import MobileMenu from "../components/NoScroll"
import FooterMobile from "../components/MobileFooter"
import NoScroll from '../components/NoScroll'
import Lens from "../imgs/SVG/lens.svg"

function Gallery() {

    const colCount = { 300: 2, 750: 2, 900: 3 }
    const images = ImageData;

    return (
        <div className='gallery-page'>

            {/* pc gallery */}
            <div className='pc-gallery'>

                {/* menu */}
                <div className='mbg-menu'>
                    <BottomMenu />
                </div>
                {/*  heading */}
                <img src={Lens}/>

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
                    <Footer />
                </div>
            </div>

            {/* mobile gallery */}
            <div className='mobile-gallery'>
                {/* Mobile Menu */}
                <div className='mg-mobile'>
                    <NoScroll />
                </div>
                <h1 className='gallery-title-mobile'>Our Lens</h1>

                <div className='gallery-holder-mobile'>
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



                {/* Mobile Footer */}
                <div className='mg-footer'>
                    <FooterMobile />
                </div>

            </div>

        </div>
    )
}

export default Gallery