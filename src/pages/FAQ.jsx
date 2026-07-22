import faqs from "../data/faqs";
import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq-page">

      <div className="faq-container">

        <h1 className="faq-title">
          Frequently Asked Questions
        </h1>


        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>

            <h3 className="faq-question">
              {faq.question}
            </h3>

            <p className="faq-answer">
              {faq.answer}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FAQ;