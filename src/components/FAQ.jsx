import React from "react";
import "../App.css";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={" rounded-3xl px-14 py-6 faq duration-300 " + (faq.open ? "open bg-primary" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question font-bold py-3">{faq.question}</div>
      {faq.open && <hr className="border-black py-4"/>}
      <div className="faq-answer text-black">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
