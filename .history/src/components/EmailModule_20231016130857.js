import React from 'react';

const sendEmail = (props) => {
  const emailData = {
    SecureToken: 'a1ac39a2-3f44-4918-89c8-adbbac5e68b8',
    To: 'dixontheworldvsy@gmail.com',
    From: 'reservations@g',
    Subject: 'Test email from React',
    Body: 'This is a test email sent from a React app.',
  };

  window.Email.send(emailData)
    .then(() => {
      console.log('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

const EmailSender = (props) => {
  return (
    <button onClick={sendEmail(props)}>Send Email</button>
  );
};

export default EmailSender;
