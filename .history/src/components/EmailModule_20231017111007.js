import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function AutoResponder(props) {
  let sendEmail;
  
useEffect(()=>{
    console.log("hello bad guy from props-sama", props)

    emailjs.send(
      'service_m5vwn8u',
      'template_5lximrm',
      {
        to_email: props.email,
        message: "Reservation Confirmation",
      }, 
      'KSkFX4Jhh3wpjhiCY'
    )
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });



}, [props])



  return (
    <div>
     
    </div>
  );
}

export default AutoResponder;
