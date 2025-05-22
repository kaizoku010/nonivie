import React from 'react'
import "./NonivieRadio.css"

function NonivieRadio(props) {
const data = props.data;

  return (
    <div className='radio-holder'>
      {props.data.map((option, index) => (
        <div key={index}>
          <input className='radio' type="radio" id={`option ${index}`} name="options" value={option} />
          <label className="radio-holder-container" htmlFor={`option${index}`}>{option}</label>
        
  {/* <input type="radio" name="radio">
  <span class="checkmark"></span>
         */}
        </div>
      ))}
    </div>  )
}

export default NonivieRadio