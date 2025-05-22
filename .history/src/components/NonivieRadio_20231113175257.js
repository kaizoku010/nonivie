import React from 'react'
import "./NonivieRadio.css"
import "../style.sass"

function NonivieRadio({props}) {

    const newData = props;

    console.log("is it an Array", props)
    console.log("is it an arrya Here", newData)

  return (
    <div className='radio-holder'>
      {props.map((option, index) => (
        <ul key={index}>
			<span class="dx-span">{option}</span>
        </ul>
      ))}

    </div>  
    )
}

export default NonivieRadio