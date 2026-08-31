import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../lib/data";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const current = TESTIMONIALS[index];

  // Hovering nudges the deck forward by one, like flipping the front card
  // to the back, and holds it there until the cursor leaves.
  const advance = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div
      className="testimonials"
      onMouseEnter={() => {
        setPaused(true);
        advance();
      }}
      onMouseLeave={() => setPaused(false)}
    >
      <div key={current.name} className="testimonials-slide">
        <div className="testimonials-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i >= current.rating ? "testimonials-star-off" : ""}>
              ★
            </span>
          ))}
        </div>
        <p className="testimonials-quote">"{current.quote}"</p>
        <div className="testimonials-person">
          <img src={current.avatar} alt="" className="testimonials-avatar" />
          <div>
            <p className="testimonials-name">{current.name}</p>
            <p className="testimonials-role">{current.role}</p>
          </div>
        </div>
      </div>

      <div className="testimonials-dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`testimonials-dot ${i === index ? "testimonials-dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
