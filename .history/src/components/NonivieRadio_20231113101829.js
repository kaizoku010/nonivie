import React from 'react'
import "./NonivieRadio.css"

function NonivieRadio(props) {
  return (
    <div className=''>
      {data.map((option, index) => (
        <div key={index}>
          <input className='radio' type="radio" id={`option ${index}`} name="options" value={option} />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>  )
}

export default NonivieRadio