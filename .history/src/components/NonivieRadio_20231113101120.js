import React from 'react'
import "./NonivieRadio.css"

function NonivieRadio(data) {
  return (
    <div>
      {data.map((option, index) => (
        <div key={index}>
          <input type="radio" id={`option ${index}`} name="options" value={option} />
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ))}
    </div>  )
}

export default NonivieRadio