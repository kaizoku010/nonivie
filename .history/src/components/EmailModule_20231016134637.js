import React from 'react';

const sendEmail = (props) => {
//   const emailData = {
//     SecureToken: 'a1ac39a2-3f44-4918-89c8-adbbac5e68b8',
//     To: 'dixontheworldvsy@gmail.com',
//     From: 'reservations@nonivie.com',
//     Subject: 'Test email from Nonivie',
//     Body: 'This is a test email sent from the nonivie React app.',
//   };

//   window.Email.send(emailData)
//     .then(() => {
//       console.log('Email sent successfully');
//     })
//     .catch((error) => {
//       console.error('Error sending email:', error);
//     });

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tech@nonivie.com
    ",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);


};

const EmailSender = (props) => {
  return (
    <button className='kim-btn' onClick={sendEmail(props)}>Send Email</button>
  );
};

export default EmailSender;
