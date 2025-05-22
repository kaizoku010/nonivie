import React, {useEffect} from 'react'
import "./ReservationsPage.css"
import BottomMenu from '../components/BottomMenu'
import RS_IC from "../icons/left-menu.png" 
import NonivieForm from '../components/NonivieForm'
import SideWays from "../imgs/side-ways.png"
import Header from "../components/Header"
import Footer from '../components/Footer'
import BreadCrumb from '../components/BreadCrumb'
import MobileReservations from './MobileReservations'
import RescIc from "../imgs/ResSvg.svg"
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import MetaPixel from '../utils/metaPixel/metaPixel'
import Drinks from "../imgs/abby.jpg"
import SectionImageTest from "../imgs/section_img.png"
import BallersTitles from "../imgs/titles/ballers.png"
import CClub from "../imgs/titles/cc.svg"
import Velvet from "../imgs/titles/val.svg"
import Rasta from "../imgs/rasta.jpg"
import Pantheon from "../imgs/titles/sundeck.svg"


function ReservationsPage() {


  const sectionsDataSet = [
    {
        id: 2,
        svg:BallersTitles,
        title: 'Ballerz End.',
        image: SectionImageTest,
        btnText:"Sold Out",
        mainImg:Rasta,    
        tableTypes:["Booths", "cocktail Tables"],
        btnColor:"red",
        amenities:["Ciger And Shisha Services", "Breath taking view of the DJ's Floor", "Bottle Service", "Access To Ballerz End Is Exclusively After Placing A Reservation" ],
        numberOfTables:[1,2,3,4,5,6],
        excerpt: 'Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment',
        content: ' Step into the lap of luxury at Ballerz End, our most exclusive restaurant section. This opulent space is perfect for those who want to experience the best of the best, with its plush seating, decadent décor, and impeccable service. From the moment you arrive, you will be transported to a world of sophistication and glamour. Our attentive staff will greet you with a glass of champagne and show you to your table, where you will be treated to a feast for the senses. Our menu features the finest cuisine, prepared with the freshest ingredients and presented with artistry. Whether you are in the mood for a succulent steak, a delicate seafood dish, or a decadent dessert, you are sure to find something to your taste.. And of course, no dining experience at Ballerz End is complete without a bottle of the finest champagne. Our sommelier will be happy to help you choose the perfect bottle to pair with your meal. So if you are looking for a truly unforgettable dining experience, Ballerz End is the place for you.',
      },
    // sections data
    {
      id: 22,
      mainImg:Rasta,
      title: 'Pantheon Sun Deck',
      image: Drinks,
      svg:Pantheon,
      numberOfTables:[1,2,3,4,5,6],
      btnText:"Read More",
      tableTypes:["Booths", "cocktail Tables"],
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
      mainImg:Rasta,
      amenities:["Ciger","Shisha Services"],
        title: 'Valvet Terrace',
       numberOfTables:"8",
       tableTypes:["Booths", "cocktail Tables"],
       btnText:"Read More",
        image: SectionImageTest,
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
console.log("User Data Selected", sections_.title)




  return (
    <div className='reservations-page'>

      <div className='reservations-holder'>
      <div style={{position:'', top:"0", width:"100%"}}>
      <BottomMenu/>
      </div>
  
     <div className='reservations-form' >
      <div style={{marginTop:"80px"}} className='rs-title-holder no-height'>
      <img className='rs-ic' src={RescIc}/>
  
      </div>
      <NonivieForm booking={sections.id}/>
    
     </div>
     <div className='down-below'>
      <Footer/> 
      </div>
      </div>

      <div className='mobile-view'>
        <MobileReservations bookings={state}/>
      </div>

      </div>
  )
}

export default ReservationsPage