import React from 'react'

function FoodMenuHolder(props) {

    const image = props.mea
    

  return (
    <div className='pc-view'>
    {/* pc-menu-items holder One */}
    <div className='pc-menu-holder'>
      
        <div style={{backgroundImage:{image}}} className='pc-menu-image'>
        </div>
        <div className='pc-menu-text'>
            
        <img className='food-title' src={props.title}/>
        <p className='food-desc'>{props.desc}</p>
        </div>
    </div>
</div>
  )
}

export default FoodMenuHolder