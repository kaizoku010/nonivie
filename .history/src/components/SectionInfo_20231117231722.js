import React from 'react'
import "./SectionInfo.css"
import NonivieRadio from './NonivieRadio'
import MainImage  from"../imgs/main_img.jpg"
import { Link } from 'react-router-dom'


function SectionInfo({data}) {

console.log("check if its table data: ", data)
const props = {

}


  return (
    <div className='sect-info'>
      {/* left content */}
      <div className='sect-info-left'>
      <h1>Available Table Bookings</h1>
      <p>500,000ugx Per Booth</p>
      <p>250,000ugx Per Cocktail Table</p>
      <NonivieRadio props={data}/>
      {/* <NonivieRadio props={}/> */}
      <div style={{width:"300px"}}>
      {/* <Link className='nonivie-button mobile-btn' to={`/bookings/${4}`}>Read More</Link> */}
      </div>
      </div>

      {/* right image */}
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo