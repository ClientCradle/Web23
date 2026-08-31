import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="container-page not-found">
      <span className="not-found-code">404</span>
      <h1 className="not-found-title">This domain hasn't resolved</h1>
      <p className="not-found-description">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary not-found-cta">
        Back to home
      </Link>
    </section>
  );
}
