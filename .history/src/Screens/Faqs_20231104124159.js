import React from 'react'
import "./Faqs.css"

function Faqs() {
  
  
    return (
    <div>

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