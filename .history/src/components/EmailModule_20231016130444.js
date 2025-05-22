import React from 'react';

const sendEmail = () => {
  const emailData = {
    SecureToken: 'YOUR_SMTPJS_SECURE_TOKEN',
    To: 'recipient@example.com',
    From: 'sender@example.com',
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
