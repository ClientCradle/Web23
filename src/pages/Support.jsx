import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import HeroIllustration from "../components/HeroIllustration";
import { SITE } from "../lib/data";
import "./Support.css";

const HELP_LINKS = [
  { title: "Getting started", description: "Set up your account and mint your first domain." },
  { title: "Managing renewals", description: "Understand annual renewal timing and fees." },
  { title: "Wallet connection issues", description: "Fix common wallet linking problems." },
  { title: "Chrome extension setup", description: "Install, connect, and troubleshoot resolution." },
];

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support — {SITE.name}</title>
      </Helmet>

      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page hero-split">
          <div>
            <Reveal>
              <span className="eyebrow">Support</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="page-title">Support</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="page-lead">
                Browse the help center, join the community, or reach our team directly.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <HeroIllustration icon="shield" label="We've got you covered" />
          </Reveal>
        </div>
      </section>

      <section className="container-page support-grid">
        {/* HELP CENTER */}
        <Reveal className="card support-card">
          <h2 className="support-card-title">Help center</h2>
          <div className="support-help-list">
            {HELP_LINKS.map((link) => (
              <div key={link.title} className="support-help-item">
                <p className="support-help-item-title">{link.title}</p>
                <p className="support-help-item-description">{link.description}</p>
              </div>
            ))}
          </div>

          <div className="support-contact">
            <p className="support-contact-title">Contact us</p>
            <p className="support-contact-description">
              Can't find what you need? Email our team and we'll get back to you.
            </p>
            <a href={`mailto:${SITE.supportEmail}`} className="support-contact-email">
              {SITE.supportEmail}
            </a>
          </div>
        </Reveal>

        {/* COMMUNITY */}
        <Reveal delay={0.06} className="card support-card">
          <h2 className="support-card-title">Community channels</h2>
          <div className="support-community-links">
            <a href={SITE.discord} target="_blank" rel="noreferrer" className="btn-secondary">
              Join Discord
            </a>
            <a href={SITE.twitter} target="_blank" rel="noreferrer" className="btn-secondary">
              Follow on Twitter
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
