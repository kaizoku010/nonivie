import React from "react";
import SideWays from "../imgs/side-ways.png"
import "./NonniVieHeading.css"


function NonnivieHeading(props){
  return (
    <div className="nonivie-text">
     <h3 style={{fontFamily:"Miniver,sans-serif !important"}} className='icarly-text anime'>{props.iCarly}</h3>
      <div className='rs-title-holder no-height'>
      <img className='rs-ic' src={SideWays}/>
      <h1 className='rs-title anime'>{props.heading}</h1>
      <img className='rs-ic' src={SideWays}/>
      </div>
    </div>
  )
    
  
}

export default NonnivieHeading