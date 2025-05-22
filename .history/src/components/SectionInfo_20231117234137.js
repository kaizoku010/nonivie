import React from 'react'
import "./SectionInfo.css"
import NonivieRadio from './NonivieRadio'
import MainImage  from"../imgs/main_img.jpg"
import { Link, useHistort } from 'react-router-dom'


function SectionInfo({data}) {

console.log("check if its table data: ", data)
const handleButtonClick = () => {
  // Define the props you want to pass
  const propsToSend = {
    message: 'Hello from HomePage!',
    value: 42,
  };

  // Use history.push to navigate to AnotherPage and pass props
  history.push({
    pathname: '/another-page',
    state: propsToSend,
  });
};



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
      <Link className='nonivie-button mobile-btn' to="/bookings">Read More</Link>
      <button className='nonivie-button'>Book Now</button>
      </div>
      </div>

      {/* right image */}
    <img src={MainImage} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo