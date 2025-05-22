import React, {useEffect} from 'react'
import "./MobileFooter.css"
import FooterIcon from "../imgs/footer_ic.png"
import { Link } from 'react-router-dom'
import SVG_IC from "../imgs/LOGO_SVG.svg"
function MobileFooter() {



    
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const november17 = new Date('2023-11-17');
    
    // If today is after November 17th, set maxDate to November 17th
    // Otherwise, set maxDate to today's date
    setMaxDate(today > november17 ? formatDate(november17) : formatDate(today));
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    // Pad single-digit month and day with a leading zero
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  };


  return (



    


    <div style={{backgroundColor:"red"}} className="mobile-footer">
    <div className="top-mobile-footer">

    
    <div className="mobile-footer-section-one">
        <img className="mobile-footer-header footer_icon" src={SVG_IC} />
        <p className="mobile-footer-content" style={{marginTop:"20px", display:"none"}}>At Noni Vie you are someone with impeccable
            taste and a knack for discovering the finest.
            We believe that true luxury isn't just about extravagance, It's about creating remarkable
            moments that elevate your senses and leave a mark on your soul.</p>
    </div>

<div className='footer_grid' style={{display:"grid", gridTemplateColumns:"auto auto", marginTop:"20px", padding:"20px"}}>
    <div className="mobile-footer-section-two">
        <h2 className="mobile-footer-header">Useful Links</h2>
        <Link to="/coming-soon"><p className="mobile-footer-links">Events</p></Link>
        <Link><p className="mobile-footer-links">Blog</p></Link>
        <Link><p className="mobile-footer-links">Contact page</p></Link>

    </div>

    <div className="mobile-footer-section-two">
    <Link to="/coming-soon"><h2 className="mobile-footer-header">Contact us</h2></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links">+256-756-433-333</p></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links">info@nonivie.com</p></Link>

    </div>


    <div className="mobile-footer-section-two">
        <h2 className="mobile-footer-header">Reservations</h2>
        <Link to="/coming-soon"><p className="mobile-footer-links">reservations@nonivie.com</p></Link>
        <Link to="/coming-soon"><p className="mobile-footer-links">Events</p></Link>
        <Link to="/coming-soon"><p className="mobile-footer-links">Blog</p></Link>

    </div>

    <div className="mobile-footer-section-tatu">
    <Link to="/coming-soon"><h2 className="mobile-footer-header">Reach Out</h2></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links-tatu">Sports Line, Lugogo</p></Link>
    <Link to="/coming-soon"><p className="mobile-footer-links-tatu">Membership</p></Link>
    </div>


    </div>
    </div>
    <div className="lower-mobile-footer">
        <p>Copyright © 2023 <Link style={{color:"white"}} to="/coming-soon">Nonive</Link></p>
    </div>

</div>
  )
}

export default MobileFooter