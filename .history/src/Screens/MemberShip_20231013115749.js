import React from 'react';
import "./MemberShip.css";
import Carousel from 're-carousel';
import Drinks from "../imgs/slide-4.jpg";
import DjPlayers from "../imgs/rework/jay3-9.jpg";
import Glass from "../imgs/rework/jay3-8.jpg";
import Nvlogo from "../imgs/rework/jay3-6.jpg";
import J37 from "../imgs/rework/jay3-7.jpg";
import { Link } from 'react-router-dom';



function MemberShip() {
  
  // const [isVisible, setIsVisable] = useState(false);

  // useEffect(()=>{
  //   setTimeout(() =>{
  //     setInterval(true)
  //   }, 5000)
  // },[])


  return (
    <div className='memebership-page'>
   <video  width="100%" height="100%"
        loop autoPlay
        controls loop auto>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
      <div className='slide-1'>
        <img src={Drinks}/>
        <div className='slider-text'>
            <h1 className='slider-title'>Luxury & Indulgence</h1>
            <h3 className='slider-des'>A place where culinary artistry meets vibrant nightlife</h3>
            <p className='slider-para'>offering an unparalleled fusion of opulence and warmth.</p>
            <Link to="https://appabout.africa/v/?i=8dFLdrrYCo"><button className='slider-button re-color-slide-btn'>Book Now</button></Link>
        </div>
      </div>
        
    </div>
    <div style={{backgroundImage: 'tomato',color:"red", height: '100%'}}>     
    <div className='slide-1'>
        <img className='slider-img' src={DjPlayers}/>
        <div className='slider-text'>
            <h1 className='slider-title'>About us</h1>
            <h3 className='slider-des'>Noni-Vie provides an unforgettable and exclusive experience!</h3>
            <p className='slider-para'>making you feel like a discerning connoisseur and allowing you to revel in the ultimate 
luxury and culinary mastery</p>
            <Link to="/coming-soon"><button className='slider-button'>About us</button></Link>
        </div>
      </div>
        
    </div>
    
  </video>
    </div>
  )
}

export default MemberShip