import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE } from "../lib/data";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="container-page navbar-row">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img src="/web23-logo.webp" alt={SITE.name} className="navbar-logo" />
        </Link>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle className="theme-toggle-icon-only" />
          <Link to="/extension" className="btn-secondary">
            Chrome Extension
          </Link>
          <a href={SITE.dashboardUrl} className="btn-primary">
            Dashboard →
          </a>
        </div>

        <div className="navbar-mobile-controls">
          <ThemeToggle className="theme-toggle-icon-only" />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="navbar-toggle"
          >
            <span className="navbar-toggle-lines">
              <span
                className={`navbar-toggle-line navbar-toggle-line-top ${
                  open ? "navbar-toggle-line-top-open" : ""
                }`}
              />
              <span
                className={`navbar-toggle-line navbar-toggle-line-bottom ${
                  open ? "navbar-toggle-line-bottom-open" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div className={`navbar-mobile ${open ? "navbar-mobile-open" : ""}`}>
        <div className="navbar-mobile-inner">
          <div className="container-page navbar-mobile-links">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `navbar-mobile-link ${isActive ? "navbar-mobile-link-active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/extension" onClick={() => setOpen(false)} className="btn-secondary navbar-mobile-cta">
              Chrome Extension
            </Link>
            <a href={SITE.dashboardUrl} className="btn-primary navbar-mobile-cta">
              Dashboard →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
