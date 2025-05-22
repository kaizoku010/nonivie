import React, { useState, useEffect } from 'react';

const FaqComponent = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAnswer = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  const faqData = [
    {
      question: 'Do you accept Paypal?',
      answer: 'Yes, we do, along with AliPay, PayTM, and Payoneer.',
    },
    {
      question: 'What is your SLA Guarantee?',
      answer: 'Our SLA Guarantee is 99.9% uptime.',
    },
    {
      question: 'Are there more Tailwind templates?',
      answer: 'Yes, we offer a variety of Tailwind templates for different use cases.',
    },
    {
      question: 'Is this template free for commercial use?',
      answer: 'Yes, you can use this template for commercial purposes.',
    },
  ];

  const closeTreactPopup = () => {
    const treactPopup = document.querySelector('.treact-popup');
    if (treactPopup) {
      treactPopup.classList.add('hidden');
    }
  };

  const openTreactPopup = () => {
    const treactPopup = document.querySelector('.treact-popup');
    if (treactPopup) {
      treactPopup.classList.remove('hidden');
    }
  };

  useEffect(() => {
    const closeButton = document.querySelector('.close-treact-popup');
    if (closeButton) {
      closeButton.addEventListener('click', closeTreactPopup);
    }

    setTimeout(openTreactPopup, 3000);

    return () => {
      if (closeButton) {
        closeButton.removeEventListener('click', closeTreactPopup);
      }
    };
  }, []);

  return (
    <div>
      <div className="mx-auto text-center px-4 mt-12 text-2xl text-indigo-900 font-semibold">
        Frequently Asked Questions
      </div>
      <dl className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
        {faqData.map((item, index) => (
          <div key={index} className="lg:w-1/2">
            <div
              className={`question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group ${
                isOpen === index ? 'opened' : ''
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <dt className="question">
                <div className="flex justify-between">
                  <div className="text-indigo-800 font-semibold">{item.question}</div>
                  <div>
                    <svg
                      fill="currentColor"
                      className={`question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1 ${
                        isOpen === index ? 'hidden' : ''
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Chevron SVG here */}
                    </svg>
                    <svg
                      fill="currentColor"
                      className={`question-chevron group-hover:bg-gray-500 h-5 block text-indigo-800 bg-gray-400 rounded-full p-1 ${
                        isOpen === index ? '' : 'hidden'
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Chevron SVG here */}
                    </svg>
                  </div>
                </div>
              </dt>
              <dd className={`answer mt-2 leading-snug text-gray-700 ${isOpen === index ? '' : 'hidden'}`}>
                {item.answer}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FaqComponent;
