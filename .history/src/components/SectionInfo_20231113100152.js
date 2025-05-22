import React from 'react'
import "./SectionInfo.css"
import MainImage  from"../imgs/main_img.jpg"

function SectionInfo(props) {
  return (
    <div className='sect-info'>
      <div className='sect-info-left'>

      </div>
      
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo