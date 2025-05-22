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


function SectionPage({sections}) {
 
   const sectionsDataSet = [
    {
        id: 2,
        title: 'Ballerz End.',
        image: Drinks,
        btnText:"Sold Out",
        btnColor:"red",
        numberOfTables:"9",
        excerpt: 'Our "Ballerz End" section is now officially SOLD OUT! Thank you to our distinguished guests for embracing the pinnacle of luxury with us. Prepare for an unforgettable night of opulence and enchantment',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident tusunt. Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.',
      },
    // sections data
    {
      id: 22,
      title: 'Pantheon Sun Deck',
      image: Drinks,
      btnText:"Read More",
      btnColor:"white",
      numberOfTables:"5",
      excerpt: 'We ere thrilled to announce that our exclusive spaces are filling up fast! Join us for an opulent experience, but act quickly. Click below to make your reservations or call us to assist you throughtout the process.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident tusunt. Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.',
    },
    {
      id: 3,
      btnColor:"white",
        title: 'Valvet Terrace',
       numberOfTables:"8",
       btnText:"Read More",
        image: Drinks,
        excerpt: 'Savor the city skyline from the comfort of our plush velvet terrace, offering a breathtaking urban panorama. Be apart of a premium experience 🥂, & We are thrilled to announce that our exclusive spaces are filling up',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident tusunt. Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.',
      },
  ]
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
            <div className='dx-breadcrumb'>
                <div className='dx-breadcrumber-content'>
                    <h1>Samen Unlimited</h1>
                    <h3 style={{color:"white", marginTop:"10px"}}>Nog een Unlimited abonnement voor maar € 20 per maand.</h3>
                    <h4 style={{color:"white", marginTop:"10px", fontWeight:"300"}}>De vermelde prijs is i.c.m. een maandelijks opzegbaar Samen Unlimited Sim Only abonnement.</h4>
                </div>
            </div>
            {/* main */}
            <div className='dx-main-content'>
                <h1 style={{color:"white", marginBottom:"20px"}}>.</h1>
                <p>Met Samen Unlimited sluit je heel voordelig nog een
                    Unlimited abonnement af. Voor je gezin, familie of vriendengroep.
                    Zon Samen Unlimited abonnement is een kopie van je Samen Unlimited abonnement, zonder punten voor Extra’s.<br/><br/>
                    Elk Samen Unlimited abonnement kost maar € 20 per abonnement per maand.
                    Of je nu Unlimited Start, Basis, Plus of Premium hebt. Het Samen Unlimited abonnement is maandelijks opzegbaar. En je vindt al je abonnementen overzichtelijk bij elkaar op 1 factuur. Wel zo helder.<br/><br/>
                    In Mijn Odido bestel je heel makkelijk een Samen Unlimited abonnement. Natuurlijk met supersnel 5G tot wel 1 Gbit/s. Altijd gratis aansluiten. Je kan tot wel 5 Samen Unlimited abonnementen bestellen.</p>
            </div>
            <div className='dx-image'>
            <img src={Rasta} />
            </div>
            {/* call to action */}
            <div style={{marginBottom:"100px"}} className='dx-cards'>
            <div className='call-to-action'>
{/* action holder */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={HelpDesk}/>
<div className='call-to-action-content'>
  <h3>Talk To Us</h3>
  <p className='call-to-action-txt'>We geven je graag persoonlijk advies. Voor een
    abonnement dat echt bij je past.
    Bel 0800-0092 of ga naar een Shop.</p>
    <Link className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 2 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic kim-ic' src={KimIc}/>


<div className='call-to-action-content'>
  <h3>Vragen? Vragen!</h3>
  <p className='call-to-action-txt'>We geven je graag persoonlijk advies. Voor een
    abonnement dat echt bij je past.
    Bel 0800-0092 of ga naar een Shop.</p>

    <Link className='call-to-action-link'>Explore more{" >"}</Link>
</div>
</div>
{/* action holder 3 */}
<div className='call-to-action-holder'>
<img className='call-to-action-ic' src={BookNow}/>
<div className='call-to-action-content'>
  <h3>Book Now</h3>
  <p className='call-to-action-txt'>We geven je graag persoonlijk advies. Voor een
    abonnement dat echt bij je past.
    Bel 0800-0092 of ga naar een Shop.</p>

    <Link className='call-to-action-link'>Explore more{" >"}</Link>
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