import React, { useEffect } from 'react'
import "./Login.css"
import firebase from "firebase/auth"
import BottomMenu from './BottomMenu'

function Login() {


  
  return (

<div>
  
</div>    
<div className='login-page'>
<div class='container'>
  <div class='container__svgs'>
<div  style={{backgroundColor:"#526470"}}>
Nonivie membership
</div>
  </div>
  <div class='container__content'>
    <form class='container__form'>
      <input type='text'  name='username' placeholder='Username' className='container__inputField'/>
      <input type='password' name='password' placeholder='Password' className='container__inputField'/>
      <input type='submit' value='Login' class='container__sumbitButton'/>
    </form>
    <div class='container__links'>
      <a href='#emptyLink' class='container__link'>Need Account?</a>
      <span class='container__separator'></span>
      <a href='#emptyLink' class='container__link'>Register</a>
    </div>
  </div>
</div>

</div>
  )
}

export default Login