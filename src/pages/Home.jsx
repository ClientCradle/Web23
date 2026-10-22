import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import DomainSearch from "../components/DomainSearch";
import NetworkVisual from "../components/NetworkVisual";
import CyclingFeatureGrid from "../components/CyclingFeatureGrid";
import LivePreview from "../components/LivePreview";
import BrowserFrame from "../components/BrowserFrame";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Testimonials from "../components/Testimonials";
import { FEATURES, ROADMAP, SITE, TRUST_AVATARS, WHY_CHOOSE_US, EXTENSION_STEPS } from "../lib/data";
import "./Home.css";

const STATS = [
  { value: String(FEATURES.length), label: "Core Features" },
  { value: `${EXTENSION_STEPS.length}-Step`, label: "Setup Flow" },
  { value: "3", label: "Roadmap Phases" },
  { value: "Web2 + Web3", label: "One Dashboard" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE.name} — Smart Domains, Tokenized for the Future</title>
      </Helmet>

      {/* HERO */}
      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />

        <div className="container-page hero-grid">
          <div>
            <Reveal direction="left" className="hero-badge-row">
              <span className="eyebrow-badge">
                <span className="eyebrow-badge-dot" />
                <span className="eyebrow">Smart Domains · Web2 + Web3</span>
              </span>
            </Reveal>
            <Reveal direction="left" delay={0.05}>
              <h1 className="hero-title">
                Smart Domains.
                <br />
                Tokenized for the future.
              </h1>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <p className="hero-copy">
                Connect Web2 and Web3 identities through decentralized smart domains —
                mint, manage, and resolve every domain you own from one dashboard.
              </p>
            </Reveal>
            <Reveal direction="left" delay={0.15} className="hero-actions">
              <a href={SITE.dashboardUrl} className="btn-primary">
                Mint Domain →
              </a>
              <Link to="/extension" className="btn-secondary">
                Install Chrome Extension
              </Link>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="card hero-showcase">
              <DomainSearch />
              <div className="hero-showcase-visual">
                <NetworkVisual />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIVE PREVIEW (bento-style showcase) */}
      <LivePreview />

      {/* FEATURE SHOWCASE */}
      <section id="features" className="section">
        <div className="container-page">
          <Reveal direction="right" className="section-header-center">
            <span className="eyebrow">Core features</span>
            <h2 className="section-title">Everything a modern domain needs</h2>
            <p className="section-lead">
              Seven building blocks that make up the {SITE.name} platform, from minting to
              resolution. Hover the grid to pause the rotation.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.05}>
            <CyclingFeatureGrid features={FEATURES} />
          </Reveal>
        </div>
      </section>

      {/* PRODUCT BENEFITS */}
      <section className="section section-bordered">
        <div className="container-page">
          <Reveal direction="left" className="section-header-center">
            <span className="eyebrow">Why {SITE.name}</span>
            <h2 className="section-title">Built for ownership, not lock-in</h2>
          </Reveal>

          <div className="benefits-grid">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal
                key={item.title}
                direction="left"
                delay={i * 0.05}
                className={i === 0 || i === 5 ? "benefit-card-wide" : ""}
              >
                <div className="card card-hover benefit-card">
                  <span className="benefit-icon">
                    <Icon name="check" className="icon-xs" />
                  </span>
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP PREVIEW */}
      <section className="section">
        <div className="container-page">
          <Reveal direction="right" className="section-header-row">
            <div>
              <span className="eyebrow">Where we're headed</span>
              <h2 className="section-title">Roadmap preview</h2>
            </div>
            <Link to="/roadmap" className="btn-secondary">
              View full roadmap →
            </Link>
          </Reveal>

          <div className="roadmap-columns">
            {[
              { label: "Current", items: ROADMAP.current },
              { label: "Upcoming", items: ROADMAP.upcoming.slice(0, 3) },
              { label: "Future", items: ROADMAP.future },
            ].map((col, i) => (
              <Reveal key={col.label} direction="right" delay={i * 0.08}>
                <div className="card card-hover roadmap-column">
                  <span className="eyebrow">{col.label}</span>
                  <ul className="roadmap-list">
                    {col.items.map((it) => (
                      <li key={it.title} className="roadmap-list-item">
                        <p className="roadmap-item-title">{it.title}</p>
                        <p className="roadmap-item-description">{it.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section section-bordered">
        <div className="container-page">
          <Reveal direction="left" className="section-header-center">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">Resolve Smart Domains right in Chrome</h2>
            <p className="section-lead">
              Install the extension once, and any Smart Domain you type into your address
              bar resolves instantly — no separate app, no extra tab.
            </p>
          </Reveal>

          <div className="workflow-grid">
            <Reveal direction="left">
              <ol className="workflow-steps">
                {EXTENSION_STEPS.map((step, i) => (
                  <li key={step.title} className="workflow-step">
                    <span className="workflow-step-marker">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="workflow-step-title">{step.title}</p>
                      <p className="workflow-step-description">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link to="/extension" className="btn-primary extension-cta">
                Install Chrome Extension
              </Link>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <BrowserFrame url="priya.dom" bodyClassName="browser-frame-body-lines">
                <span className="browser-frame-badge">resolved via extension</span>
                <div className="browser-frame-lines">
                  <div className="browser-frame-line line-1" />
                  <div className="browser-frame-line line-2" />
                  <div className="browser-frame-line line-3" />
                </div>
              </BrowserFrame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY */}
      <section className="section">
        <div className="container-page">
          <Reveal direction="left" className="section-header-center">
            <span className="eyebrow">Trusted by design</span>
            <h2 className="section-title">By the numbers</h2>
            <div className="trust-avatars">
              <div className="trust-avatars-stack">
                {TRUST_AVATARS.map((avatar, i) => (
                  <img key={avatar} src={avatar} alt="" className="trust-avatars-item" style={{ zIndex: TRUST_AVATARS.length - i }} />
                ))}
              </div>
              <p className="trust-avatars-label">The team building {SITE.name} — and the people already using it.</p>
            </div>
          </Reveal>

          <div className="stats-strip">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} direction="left" delay={i * 0.05}>
                <div className="stat-pill">
                  <span className="stat-pill-value">{stat.value}</span>
                  <span className="stat-pill-label">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="left" delay={0.2}>
            <div className="card testimonial-panel">
              <Testimonials />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page final-cta-section">
        <Reveal direction="right">
          <div className="card final-cta">
            <div className="section-glow" />
            <h2 className="final-cta-title">Ready to mint your first Smart Domain?</h2>
            <p className="final-cta-copy">
              Connect a wallet, search a name, and resolve it straight from your browser —
              the whole platform in one dashboard.
            </p>
            <div className="final-cta-actions">
              <a href={SITE.dashboardUrl} className="btn-primary">
                Mint Domain →
              </a>
              <Link to="/extension" className="btn-secondary">
                Install Chrome Extension
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
