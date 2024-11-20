"use client";

import { useState } from "react";

type AccordionItemProps = {
  id: string; // Unique ID for the accordion
  question: string; // Accordion button text
  answer: React.ReactNode; // Accordion body content
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Tracks the open/closed state

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`collapse-${id}`}
          onClick={toggleAccordion}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
