import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="accordion-item">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="accordion-trigger"
            >
              <span className="accordion-question">{item.q}</span>
              <span className={`accordion-icon ${isOpen ? "accordion-icon-open" : ""}`}>+</span>
            </button>
            <div className={`accordion-panel ${isOpen ? "accordion-panel-open" : ""}`}>
              <div className="accordion-panel-inner">
                <p className="accordion-answer">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
