import React, { useState } from 'react';
import emailjs from "ema"
// import emailjs from 'emailjs-com';

function AutoResponder() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    emailjs.send(
      'service_m5vwn8u',
      'template_5lximrm',
      {
        to_email: email,
        message: message,
      }, 
      'KSkFX4Jhh3wpjhiCY'
    )
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Recipient's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendEmail}>Send Auto-Response</button>
      </form>
    </div>
  );
}

export default AutoResponder;
