import React from 'react'
import "./SectionPage.css"
import Header from "../components/BottomMenu"

function SectionPage(props) {
  return (
    <div className='sect-page'>
        <div className='header-sect-page'>
        <Header/>
        </div>

<div className='dx-breadcrumb'>
    <div className='dx-breadcrumber-content'>
        <h1>Samen Unlimited</h1>
        <h2>Nog een Unlimited abonnement voor maar € 20 per maand.</h2>
        <h3>De vermelde prijs is i.c.m. een maandelijks opzegbaar Samen Unlimited Sim Only abonnement.</h3>
    </div>

</div>

    </div>
  )
}

export default SectionPage