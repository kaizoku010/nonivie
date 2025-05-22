import React from 'react'
import "./NonivieRadio.css"

function NonivieRadio(props) {
  return (
    <div className='radio-holder'>
      {data.map((option, index) => (
        <div key={index}>
          <input className='radio' type="radio" id={`option ${index}`} name="options" value={option} />
          <label className="radio-holder-container" htmlFor={`option${index}`}>{option}</label>
        
          <label class="container">Three
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
        
        </div>
      ))}
    </div>  )
}

export default NonivieRadio