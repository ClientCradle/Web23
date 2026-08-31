import Icon from "./Icon";
import "./HeroIllustration.css";

// Placeholder hero artwork — swap the contents of .hero-illustration for a
// real <img>/<video> whenever you have real artwork for this page.
export default function HeroIllustration({ icon, label }) {
  return (
    <div className="hero-illustration">
      <span className="hero-illustration-blob hero-illustration-blob-a" />
      <span className="hero-illustration-blob hero-illustration-blob-b" />
      <span className="hero-illustration-icon">
        <Icon name={icon} className="icon-lg" />
      </span>
      <span className="hero-illustration-label">{label}</span>
    </div>
  );
}
