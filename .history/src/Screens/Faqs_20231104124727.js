import React from 'react';
import './Faqs.css';

function Faqs() {
  return (
    <div className="faqs-page">
      <div className="container text-grey mx-auto px-2 py-2">
        <h2 className="text-2xl font-bold">FAQs</h2>
        <div className="leading-loose text-lg mt-6">
          {faqData.map((faq, index) => (
            <div key={index}>
              <button
                className={`w-full font-bold py-3 flex justify-between items-center mt-4 ${index !== faqData.length - 1 && 'border-b border-gray-400'}`}
              >
                <div>{faq.question}</div>
                <svg className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                  <path className="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm1-9h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2V9a1 1 0 012 0v2z" />
                </svg>
                <svg className="fill-current" viewBox="0 0 24 24" width="24" height="24">
                  <path className="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm4-8a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1z" />
                </svg>
              </button>
              <div className="text-gray-700 text-sm mt-2">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    number: 1,
    question: 'What is Lorem Ipsum?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    number: 2,
    question: 'Where does it come from?',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
  },
  {
    number: 3,
    question: 'Why do we use it?',
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
  },
  {
    number: 4,
    question: 'Where can I get some?',
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    number: 5,
    question: 'What is Lorem Ipsum?',
    answer: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing",
  },
  {
    number: 6,
    question: 'Where does it come from?',
    answer: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
  },import React, { useState, useRef } from 'react';

  const faqs = [
    {
      id: 1,
      header: 'What is Lorem Ipsum?',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      header: 'Where does it come from?',
      text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
    },
    {
      id: 3,
      header: 'Why do we use it?',
      text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
    },
    {
      id: 4,
      header: 'Where can I get some?',
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    },
  ];
  
  const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;
  
    return (
      <div className="rc-accordion-card">
        <div className="rc-accordion-header">
          <div
            className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
            onClick={() => handleToggle(id)}
          >
            <h5 className="rc-accordion-title">{header}</h5>
            <i className="fa fa-chevron-down rc-accordion-icon"></i>
          </div>
        </div>
        <div
          ref={contentEl}
          className={`rc-collapse ${active === id ? 'show' : ''}`}
          style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
        >
          <div className="rc-accordion-body">
            <p className="mb-0">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const FaqsAccordion = () => {
    const [active, setActive] = useState(null);
  
    const handleToggle = (index) => {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    };
  
    return (
      <>
        <div className="container-fluid mt-5 mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
              <div className="card">
                <div className="card-body">
                  <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4>
                  {faqs.map((faq, index) => {
                    return <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default FaqsAccordion;
  
  {
    number: 7,
    question: 'Why do we use it?',
    answer: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

export default Faqs;
