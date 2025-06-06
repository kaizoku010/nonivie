// Faqs.js
import React, { useState } from 'react';

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
      <h2>FAQs</h2>
      <div className="faqs-list">
        {faqData.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <div
              className={`faq-question ${activeFaq === faq.id ? 'active' : ''}`}
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
  );
};

export default Faqs;
