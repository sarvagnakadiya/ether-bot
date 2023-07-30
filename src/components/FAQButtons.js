import React from "react";

const FAQButtons = ({ faqQuestions, handleFaqClick }) => {
  return (
    <div className="faq-buttons">
      <p>Frequently Asked Questions:</p>
      {faqQuestions.map((question, index) => (
        <button key={index} onClick={() => handleFaqClick(question)}>
          {question}
        </button>
      ))}
    </div>
  );
};

export default FAQButtons;
