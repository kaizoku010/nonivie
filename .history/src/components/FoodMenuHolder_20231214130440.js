import React from 'react'

function FoodMenuHolder(props) {

    const image = props.image

  return (
    <div className='pc-view'>
    {/* pc-menu-items holder One */}
    <div className='pc-menu-holder'>
      
        <div style={{backgroundImage:{ima}}} className='pc-menu-image'>
        </div>
        <div className='pc-menu-text'>
        </div>
    </div>
</div>
  )
}

export default FoodMenuHolder