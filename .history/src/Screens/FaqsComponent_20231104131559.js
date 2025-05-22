import React, { useState } from 'react';
// import './Faqs.css';

const faqs = [
  {
    id: 1,
    question: 'What is Lorem Ipsum?',
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    question: 'Where does it come from?',
    answer: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    question: 'Why do we use it?',
    answer: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    question: 'Where can I get some?',
    answer: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-2">
          <div className="card">
            <div className="card-body">
              <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4>
           
              {faqs.map((faq) => (
                <div className="rc-accordion-card" key={faq.id}>
                  <div className="rc-accordion-header">
                    <div
                      className={`rc-accordion-toggle p-3 ${activeIndex === faq.id ? 'active' : ''}`}
                      onClick={() => handleToggle(faq.id)}
                    >
                      <h5 className="rc-accordion-title">{faq.question}</h5>
                      <i className="fa fa-chevron-down rc-accordion-icon"></i>
                    </div>
                  </div>
                  <div
                    className={`rc-collapse ${activeIndex === faq.id ? 'show' : ''}`}
                    style={activeIndex === faq.id ? { height: 'auto' } : { height: '0' }}
                  >
                    <div className="rc-accordion-body">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
