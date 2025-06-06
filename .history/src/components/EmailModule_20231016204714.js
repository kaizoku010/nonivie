import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function AutoResponder(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = () => {
    emailjs.send(
      'service_m5vwn8u',
      'template_5lximrm',
      {
        to_email: props,
        message: "hello from nonivie",
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
          value={props}
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
