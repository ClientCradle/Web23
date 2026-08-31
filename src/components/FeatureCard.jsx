import Icon from "./Icon";
import "./FeatureCard.css";

export default function FeatureCard({ icon, title, summary, detail, badge, size = "default" }) {
  return (
    <div className={`card card-hover feature-card feature-card-${size}`}>
      {badge && <span className="feature-card-badge">{badge}</span>}
      <div className="feature-card-icon">
        <Icon name={icon} className={size === "lg" ? "icon-lg" : "icon-sm"} />
      </div>
      <div className="feature-card-body">
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-summary">{summary}</p>
        {detail && <p className="feature-card-detail">{detail}</p>}
      </div>
    </div>
  );
}
