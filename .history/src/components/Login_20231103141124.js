import React, { useEffect, useState } from 'react'
import "./Login.css"
import {getAuth} from "firebase/auth"
import BottomMenu from './BottomMenu'
import Footer from "./Footer";
import MemberCard from "../video/memberCard.mp4"
import LoginTitle from "../imgs/login-header.png"
import {createUserWithEmailAndPassword} from "firebase/auth"
// import {auth} from "../firebase"

function Login(props) {

  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async(e)=>{
    // e.preventDefault();

    await createUserWithEmailAndPassword(getAuth, email, password)
    .then((userCredential)=> {
      const user = userCredential.user;                          
      console.log("auth messages", user);

    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })

  }

  
  return (

<div className='login-page'>
  <div className='login-header'>
<BottomMenu/>
</div>
<div className='login-container'>
<div class='container'>
  <div class='container__svgs'>
<div  style={{backgroundColor:"#526470"}}>
<video className='login-video' width="100%" height="100%"loop muted autoPlay>
        <source src={MemberCard} type="video/mp4" />
        </video>



</div>
  </div>
  <div class='container__content'>

    <img src={LoginTitle} className='login-title'/>
    <form class='container__form' onSubmit={onSubmit()}>
      <input type='text'  name='username'
      onChange={(e) =>setEmail=(e.target.value)}

      required
      placeholder='User Email' className='container__inputField'/>
      <input type='password'
      name='password' placeholder='Password' className='container__inputField'/>
      <input type='submit'
      onChange={(e) =>setPassword=(e.target.value)}

value='Login' class='container__sumbitButton'/>
    </form>
    <div class='container__links'>
      <a href='#emptyLink' class='container__link'>Need Account?</a>
      <span class='container__separator'></span>
      <a href='#emptyLink' class='container__link'>Register</a>
    </div>
  </div>
</div>

</div>

<Footer/>
</div>
  )
}

export default Login