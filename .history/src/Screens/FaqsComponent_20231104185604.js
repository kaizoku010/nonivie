// Faqs.js
import React, { useState } from 'react';
import "./Faqs.css"
import BottomMenu from '../components/BottomMenu';
import FaqImage from "../imgs/faq_img.png"
import MobileFooter from '../components/MobileFooter';
import Footer from "../components/Footer"


const Faqs = () => {
  // Define your FAQ data
  const faqData = [
    {
      id: 1,
      question: 'What Does The Word NoniVie Mean?',
      answer:
        'The word Noni vie stands for night life, where Noni is Night, and Vie is Life',
    },
    {
      id: 2,
      question: 'What should I Expect?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content...',
    },
    {
      id: 3,
      question: 'How Do I Make A Reservation ?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content...',
    }
    // Add more FAQ items as needed
  ];

  // State to keep track of the active FAQ item
  const [activeFaq, setActiveFaq] = useState(null);

  // Function to handle FAQ item clicks
  const handleFaqClick = (id) => {
    if (activeFaq === id) {
      setActiveFaq(null); // Close the FAQ if it's already open
    } else {
      setActiveFaq(id); // Open the clicked FAQ
    }
  };

  return (
    <div className="faqs">
      <BottomMenu/>
   

      <div className='faqs-holder'>
   <img style={{marginBottom:"50px"}} src={FaqImage} className='faqs-header'/>
      <div className="faqs-list">
        {faqData.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <div
              className={`faq-question ${activeFaq === faq.id ? 'active-faq' : ''}`}
              onClick={() => handleFaqClick(faq.id)}
            >
              {faq.question}
            </div>
            {activeFaq === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      
      
      </div>
      
      </div>

              <div className='faq-footer'>
              <Footer/>                
              </div>


             

    </div>
  );
};

export default Faqs;
