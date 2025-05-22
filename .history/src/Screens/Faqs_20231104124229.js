import React from 'react'
import "./Faqs.css"

function Faqs() {
  
    const faqData = [
        {
          number: 1,
          question: 'What is Lorem Ipsum?',
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          number: 2,
          question: 'Where does it come from?',
          answer:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
        {
          number: 3,
          question: 'Why do we use it?',
          answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        },
        {
          number: 4,
          question: 'Where can I get some?',
          answer:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
          number: 5,
          question: 'What is Lorem Ipsum?',
          answer:
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing",
        },
        {
          number: 6,
          question: 'Where does it come from?',
          answer:
            'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        },
        {
          number: 7,
          question: 'Why do we use it?',
          answer:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ];
  
    return (
    <div className='faqs-page'>

{/* start here */}

<section className="faq-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="faq" id="accordion">
              {faqData.map((faqItem, index) => (
                <div className="card" key={`faqItem-${index}`}>
                  <div className="card-header" id={`faqHeading-${index}`}>
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-toggle="collapse"
                        data-target={`#faqCollapse-${index}`}
                        data-aria-expanded="false"
                        data-aria-controls={`faqCollapse-${index}`}
                      >
                        <span className="badge">{faqItem.number}</span>
                        {faqItem.question}
                      </h5>
                    </div>
                  </div>
                  <div
                    id={`faqCollapse-${index}`}
                    className="collapse"
                    aria-labelledby={`faqHeading-${index}`}
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>{faqItem.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

        

        {/* end here */}
    </div>
  )
}

export default Faqs