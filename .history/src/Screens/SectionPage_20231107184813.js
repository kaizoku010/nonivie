import React from 'react'
import "./SectionPage.css"
import Header from "../components/BottomMenu"
import Rasta from "../imgs/rasta.jpg"
import Footer from "../components/Footer"

function SectionPage(props) {
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
                <h1 className=''>Iedereen Unlimited.</h1>
                <p>Met Samen Unlimited sluit je heel voordelig nog een
                    Unlimited abonnement af. Voor je gezin, familie of vriendengroep.
                    Zon Samen Unlimited abonnement is een kopie van je Samen Unlimited abonnement, zonder punten voor Extra’s.<br/><br/>
                    Elk Samen Unlimited abonnement kost maar € 20 per abonnement per maand.
                    Of je nu Unlimited Start, Basis, Plus of Premium hebt. Het Samen Unlimited abonnement is maandelijks opzegbaar. En je vindt al je abonnementen overzichtelijk bij elkaar op 1 factuur. Wel zo helder.<br/><br/>
                    In Mijn Odido bestel je heel makkelijk een Samen Unlimited abonnement. Natuurlijk met supersnel 5G tot wel 1 Gbit/s. Altijd gratis aansluiten. Je kan tot wel 5 Samen Unlimited abonnementen bestellen.</p>

            </div>
            <div className='dx-image'>
            <h3 className='otaku'>Ontdek nu Samen Unlimited.</h3>

            <img src={Rasta} />
            </div>
            <div className='dx-cards'>

            </div>

            <div className='dx-footer'>
       <Footer/>
            </div>


        </div>
    )
}

export default SectionPage