import React from 'react'
import "./NonivieRadio.css"

function NonivieRadio(props) {

    
    console.log("is it an Array", props)
    console.log("is it an arrya Here", props.length)

  return (
    <div className='radio-holder'>
      {/* {props.map((option, index) => (
        <div key={index}>
          <input className='radio' type="radio" id={`option ${index}`} name="options" value={option} />
          <label className="radio-holder-container" htmlFor={`option${index}`}>{option}</label>
        </div>
      ))} */}
    </div>  )
}

export default NonivieRadio