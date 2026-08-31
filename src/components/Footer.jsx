import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../lib/data";
import "./Footer.css";

const PRODUCT_LINKS = [
  { label: "Smart Domains", to: "/#features" },
  { label: "Roadmap", to: "/roadmap" },
  { label: "Chrome Extension", to: "/extension" },
  { label: "Dashboard", href: SITE.dashboardUrl },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

const RESOURCE_LINKS = [
  { label: "Documentation", to: "/docs" },
  { label: "Security Audit", to: "/audit" },
  { label: "API Status", to: "/status" },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // No backend wired up — replace this with a real call to your
    // email provider (Mailchimp, ConvertKit, Resend, etc.) when ready.
    setTimeout(() => {
      setStatus("done");
      setEmail("");
    }, 500);
  }

  return (
    <footer className="footer">
      <div className="container-page footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-row">
            <img src="/web23-logo.webp" alt={SITE.name} className="footer-logo" />
          </Link>
          <p className="footer-tagline">Smart Domains. Tokenized for the Future.</p>

          <form onSubmit={handleSubscribe} className="footer-subscribe">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.eth"
              className="footer-subscribe-input"
            />
            <button type="submit" className="btn-primary footer-subscribe-button">
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
          {status === "done" && <p className="footer-note">You're subscribed — welcome aboard.</p>}
          {status === "error" && (
            <p className="footer-note footer-note-error">Something went wrong. Try again.</p>
          )}
        </div>

        <FooterColumn title="Product" links={PRODUCT_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
        <FooterColumn title="Resources" links={RESOURCE_LINKS} />
      </div>

      <div className="container-page footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>

        <div className="footer-legal">
          {LEGAL_LINKS.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
          <a href={SITE.discord} target="_blank" rel="noreferrer">
            Discord
          </a>
          <a href={SITE.twitter} target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="eyebrow footer-column-title">{title}</h4>
      <ul className="footer-column-list">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a href={link.href} target="_blank" rel="noreferrer" className="footer-column-link">
                {link.label}
              </a>
            ) : (
              <Link to={link.to} className="footer-column-link">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
