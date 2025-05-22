import React from 'react'
import "./DxButton.css"
import IC from "../imgs/stack/hero_content/salmonIC.png"
import { Link } from 'react-router-dom'

function DxButton(props) {


  return (
<Link to={`/${props.link}`}>
    <div className='dx-button-new'>
        <p>{props.text}</p>
        <img className='hero_ic' src={IC}/>
    </div>
    </Link>
  )
}

export default DxButton