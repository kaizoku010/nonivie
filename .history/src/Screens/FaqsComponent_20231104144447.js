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
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      id: 2,
      question: 'Where does it come from?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content...',
    },
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
      <img src={FaqImage} className='faqs-header'/>

      <div className='faqs-holder'>

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
