import React from 'react'
import "./SectionInfo.css"
import NonivieRadio from './NonivieRadio'
import MainImage  from"../imgs/main_img.jpg"
import { Link,  useNavigate } from 'react-router-dom'


function SectionInfo({data, image, bookingData}) {



const passedImage = image;

const history = useNavigate();
console.log("check if there is data: ", bookingData)

const handleButtonClick = () => {
  const propsToSend = {
    message: 'Hello from the otherside!',
    value: 42,
  };

  history(`/reservations/${bookingData}`);
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
      {/* <Link className='nonivie-button mobile-btn' to="/bookings">Read More</Link> */}
      <button onClick={handleButtonClick} className='nonivie-button'>Book Now</button>
      <button onClick={handleButtonClick} className='nonivie-button'>Call Us</button>

      </div>
      </div>

      {/* right image */}
    <img src={image} className='sect-info-image'/>
    </div>
  )
}

export default SectionInfo