import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import MemberCard from '../video/memberCard.mp4';
import LoginTitle from '../imgs/login-header.png';
import BottomMenu from './BottomMenu';
import Footer from './Footer';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(props.auth, email, password);
  //     const user = userCredential.user;
  //     console.log('auth messages', user);
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   }
  // };




  const handleSubmit = async(e) =>{
    e.pr
  }

  return (
    <div className="login-page">
      <div className="login-header">
        <BottomMenu />
      </div>
      <div className="login-container">
        <div className="container">
          <div className="container__svgs">
            <div style={{ backgroundColor: '#526470' }}>
              <video className="login-video" width="100%" height="100%" loop muted autoPlay>
                <source src={MemberCard} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="container__content">
            <img src={LoginTitle} alt="Login Title" className="login-title" />
            <form className="container__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="User Email"
                className="container__inputField"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="container__inputField"
              />
              <input type="submit" value="Login" className="container__submitButton" />
            </form>
            <div className="container__links">
              <a href="#emptyLink" className="container__link">
                Need Account?
              </a>
              <span className="container__separator"></span>
              <a href="#emptyLink" className="container__link">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
