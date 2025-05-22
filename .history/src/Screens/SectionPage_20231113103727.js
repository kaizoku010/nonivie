("use script")
import React from 'react'
import "./SectionPage.css"
import Header from "../components/BottomMenu"
import Rasta from "../imgs/rasta.jpg"
import Footer from "../components/Footer"
import BookNow from "../imgs/booknow.png"
import { Link } from 'react-router-dom'
import SideFlexx from "../imgs/side_grow.png"
import Phone from "../imgs/mobileView.png"
import HelpDesk from "../imgs/headgear.png"
import KimIc from "../imgs/kim_ic.png"
import sectionData from '../dataPoint/sectionData'
import { useParams } from 'react-router-dom'
import Drinks from "../imgs/abby.jpg"
import SectionImageTest from "../imgs/section_img.png"
import BallersTitles from "../imgs/titles/ballers.png"
import CClub from "../imgs/titles/cc.svg"
import Velvet from "../imgs/titles/val.svg"
import Pantheon from "../imgs/titles/sundeck.svg"
import SectionImage from "../imgs/section_img.png"
// import sectionsDataSet_ from '../dataPoint/sectionData'
import SectionInfo from '../components/SectionInfo'




function SectionPage() {

  // const sectionsDataSet = new sectionsDataSet_;

 
  const 

        const {sectionId} = useParams();
        const _sectionId_ = parseInt(sectionId);
        console.log("passed Data",_sectionId_)

        const sections_ = sectionsDataSet.find(data => data.id === _sectionId_)
        console.log("Test Data", sections_)
    return (
        <div className='sect-page'>
            <div className='header-sect-page'>
                <Header />
            </div>
            
            {/* main */}
            <div className='dx-main-content'>
            <img style={{width:"600px", marginBottom:"20px"}} src={sections_.svg}/>
              {/* <h1 style={{color:"white", marginBottom:"20px"}}>{sections_.title}</h1> */}
                <p>{sections_.content}</p>
            </div>
            <div style={{color:"white"}} className='dx-image'>
                  {/* <SectionInfo data={sections_.tableTypes} /> */}
                  {console.log("table type", sections_.tableTypes)}
                      Hello2

<div>
    <Link to="/test" className='nonivie-button'>Back to Sections</Link>
</div>
            </div>
            {/* call to action */}
            <div style={{marginBottom:"100px"}} className='dx-cards'>
            <div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>
    To delve deeper into the realm of any of our sections, kindly pursue the link Provided below for a more comprehensive understanding. 
  </p>
    <Link to="/contact-us" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
{/* for more inquireies on our services for the */}
</div>
{/* action holder 2 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic kim-ic' src={KimIc}/>


<div className='call-to-action-content'>
  <h3>View Our Menu</h3>
  <p className='call-to-action-txt'>
Our menu features a wide range of exquiste dishes made with culnary mastery.
  </p>

    <Link to="/coming-soon" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 3 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={BookNow}/>
<div className='call-to-action-content'>
  <h3>Book Now</h3>
  <p className='call-to-action-txt'>
    Imagine yourself embarking on an unforgettable journey, exploring a new realm of luxury, book your opulent today!
  </p>

    <Link to="/reservations" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>

</div>
            </div>

            <div className='dx-footer'>
       <Footer/>
            </div>


        </div>
    )
}

export default SectionPage