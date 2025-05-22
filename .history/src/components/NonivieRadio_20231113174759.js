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
        <div key={index}>
          <label class="check-label
          ">
			<input class="check" type="radio"  checked id={`option ${index}`} name="options" value={option}/>
			<span class="span-dx">{option}</span>
		</label>    


		<label class="dx-lable">
			<input class="check" type="radio" name="radio"/>
			<span class="dx-span">{option}</span>
		</label>


        </div>
      ))}


    </div>  )
}

export default NonivieRadio