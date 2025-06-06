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
import SectionImageTest from "../imgs/section_img.png"
import CClub from "../imgs/titles/cc.svg"
import Velvet from "../imgs/titles/val.svg"
import Pantheon from "../imgs/titles/sundeck.svg"
// import sectionsDataSet_ from '../dataPoint/sectionData'
import SectionInfo from '../components/SectionInfo'
import MobileMenu from '../components/NoScroll'
import Drinks from "../imgs/abby.jpg"
import Ballersz from "../imgs/ballerz.jpg"
import BallersTitles from "../imgs/titles/ballers.png"
import VaLTerrace from "../imgs/valvet.jpg"
import BalMain from "../imgs/bal_main_img.jpg"
import ValMain from "../imgs/val_main_img.jpg"
import PanMain from "../imgs/pan_main_img.jpg"




function SectionPage() {

  // const sectionsDataSet = new sectionsDataSet_;

  const sectionsDataSet = [
    {
      id: 2,
      svg:BallersTitles,
      title: 'Ballerz End.',
      image: Ballersz,
      btnText:"Sold Out",
      mainImg:BalMain,    
      btnColor:"red",
      amenities:["Ciger And Shisha Services", "Breath taking view of the DJ's Floor", "Bottle Service", "Access To Ballerz End Is Exclusively After Placing A Reservation" ],
      numberOfTables:[1,2,3,4,5,6],
      excerpt: 'Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment',
      content: ' Step into the lap of luxury at Ballerz End, our most exclusive restaurant section. This opulent space is perfect for those who want to experience the best of the best, with its plush seating, decadent décor, and impeccable service. From the moment you arrive, you will be transported to a world of sophistication and glamour. Our attentive staff will greet you with a glass of champagne and show you to your table, where you will be treated to a feast for the senses. Our menu features the finest cuisine, prepared with the freshest ingredients and presented with artistry. Whether you are in the mood for a succulent steak, a delicate seafood dish, or a decadent dessert, you are sure to find something to your taste.. And of course, no dining experience at Ballerz End is complete without a bottle of the finest champagne. Our sommelier will be happy to help you choose the perfect bottle to pair with your meal. So if you are looking for a truly unforgettable dining experience, Ballerz End is the place for you.',
    },
  // sections data
  {
    id: 22,
    mainImg:PanMain,
    title: 'Pantheon Sun Deck',
    image: Drinks,
    svg:Pantheon,
    numberOfTables:[1,2,3,4,5,6],
    btnText:"Read More",
    btnColor:"white",
    numberOfTables:"5",
    amenities:["Ciger","Shisha Services"],
    excerpt: 'We ere thrilled to announce that our exclusive spaces are filling up fast! Join us for an opulent experience, but act quickly. Click below to make your reservations or call us to assist you throughtout the process.',
    content: 'The Pantheon Sundeck is our rooftop restaurant section, offering breathtaking views of the city skyline. This exclusive space is perfect for those who want to experience the best that our restaurant has to offer. The Pantheon Sundeck features private dining areas, a full bar, and a fire pit. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a special occasion dinner or a night out with friends, the Pantheon Sundeck is the perfect place to enjoy a delicious meal and stunning views. We hope you will enjoy our premium, luxurious restaurant sections. We look forward to welcoming you soon.',
  },
  {
    id: 3,
    svg:Velvet,
    numberOfTables:[1,2,3,4,5,6],
    btnColor:"white",
    mainImg:ValMain,
    amenities:["Ciger","Shisha Services"],
      title: 'Valvet Terrace',
     numberOfTables:"8",
     btnText:"Read More",
      image: VaLTerrace,
      excerpt: 'Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up',
      content: 'The Velvet Terrace is our outdoor restaurant section, offering stunning views of the city skyline. This luxurious space is perfect for those who want to enjoy a delicious meal in a sophisticated setting. The Velvet Terrace features plush seating, elegant décor, and impeccable service. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a leisurely lunch or a romantic dinner, the Velvet Terrace is the perfect place to enjoy a delicious meal in a beautiful setting.',
    },


    {
      id: 4,
      svg:CClub,
      mainImg:Rasta,
      btnColor:"white",
        title: 'The Champagne Club',
       numberOfTables:"8",
       numberOfTables:[1,2,3,4,5,6],
       tableTypes:["Booths", "cocktail Tables"],
       btnText:"Read More",
       amenities:["Breath taking view of the DJ's Floor", "Bottle Service", "Access To Ballerz End Is Exclusively After Placing A Reservation" ],
        image: SectionImageTest,
        excerpt: 'Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up',
        content: 'The Velvet Terrace is our outdoor restaurant section, offering stunning views of the city skyline. This luxurious space is perfect for those who want to enjoy a delicious meal in a sophisticated setting. The Velvet Terrace features plush seating, elegant décor, and impeccable service. Our attentive staff will ensure that you have everything you need to enjoy your dining experience. Our menu features a variety of dishes, from classic favorites like steak and seafood to more innovative options. We also offer a wide selection of wines and cocktails to choose from. Whether you are in the mood for a leisurely lunch or a romantic dinner, the Velvet Terrace is the perfect place to enjoy a delicious meal in a beautiful setting.',
      
    }
 ]

        const {sectionId} = useParams();
        const _sectionId_ = parseInt(sectionId);
        console.log("passed Data",_sectionId_)

        const sections_ = sectionsDataSet.find(data => data.id === _sectionId_)
        console.log("Test Data", sections_)
    
    // start here
    
        return (
        <div>
        <div className='sect-page'>
            <div className='header-sect-page'>
                <Header />
            </div>

            <div className='header-mobile-sect'>
<MobileMenu/>
            </div>
           
            {/* main */}
            <div className='dx-main-content'>
            <img className='section-image'  src={sections_.svg}/>
              {/* <h1 style={{color:"white", marginBottom:"20px"}}>{sections_.title}</h1> */}
                <p>{sections_.content}</p>
            </div>
            <div style={{color:"white"}} className='dx-image'>
                  {/* send  number of tanles
                   */}
                  <SectionInfo data={sections_.amenities} image={sec} bookingData={sections_.id}/>
                  {/* {console.log("table type", sections_.tableTypes)} */}
                  {/* {console.log("Amenities ", sections_.amenities)} */}

<div style={{marginBottom:"30px"}}>
    <Link to="/test" className='nonivie-button'>Back to Sections</Link>
</div>
            </div>
            {/* call to action */}
            <div style={{marginBottom:"100px"}} className='dx-cards'>
            <div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>Z
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>
    To delve deeper into the realm of any of our sections, kindly pursue the link Provided below for a more comprehensive understanding. 
  </p>
    <Link to="/contact-us" className='call-to-action-link'>Explore more{" >"}</Link>
</div>
{/* for more inquireies on our services for the */}
</div>
1<div className='call-to-action-holder'>
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

<div className='sect-page-mobile'> 

</div>

        </div>
   
   
   )
}

export default SectionPage