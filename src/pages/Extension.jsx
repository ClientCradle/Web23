import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";
import Icon from "../components/Icon";
import HeroIllustration from "../components/HeroIllustration";
import { EXTENSION_STEPS, FAQ_CATEGORIES, SITE } from "../lib/data";
import "./Extension.css";

const EXT_FEATURES = [
  { icon: "extension", title: "Smart domain resolution", description: "Type a Smart Domain into Chrome and land exactly where it's mapped." },
  { icon: "globe", title: "Browser integration", description: "Works natively in the address bar — no separate app window." },
  { icon: "layers", title: "Fast performance", description: "Lookups resolve in milliseconds via a lightweight background worker." },
  { icon: "shield", title: "Secure communication", description: "Every request is signed and verified before resolution completes." },
];

const extensionFaq = FAQ_CATEGORIES.find((c) => c.category === "Chrome Extension").items;

export default function Extension() {
  return (
    <>
      <Helmet>
        <title>Chrome Extension — {SITE.name}</title>
      </Helmet>

      {/* HERO */}
      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page hero-split">
          <div>
            <Reveal>
              <span className="eyebrow">Chrome Extension</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="page-title">Your browser, now Web3-aware</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="page-lead">
                Install the {SITE.name} extension and resolve tokenized Smart Domains
                directly in Chrome's address bar.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href={SITE.extensionStoreUrl} className="btn-primary extension-hero-cta" target="_blank" rel="noreferrer">
                Add to Chrome — it's free
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <HeroIllustration icon="extension" label="Resolved in Chrome" />
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-sm section-bordered">
        <div className="container-page extension-features-grid">
          {EXT_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="card extension-feature-card">
              <div className="extension-feature-icon">
                <Icon name={f.icon} className="icon-sm" />
              </div>
              <h3 className="extension-feature-title">{f.title}</h3>
              <p className="extension-feature-description">{f.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-sm">
        <div className="container-page">
          <Reveal className="section-header-center">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">Four steps to full resolution</h2>
          </Reveal>

          <div className="extension-steps-grid">
            {EXTENSION_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="extension-step-card">
                <span className="extension-step-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="extension-step-title">{step.title}</h3>
                <p className="extension-step-description">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section-sm section-bordered">
        <div className="container-page">
          <Reveal className="section-header-center">
            <span className="eyebrow">Screenshots</span>
            <h2 className="section-title">Inside the extension</h2>
          </Reveal>
          <div className="extension-screens-grid">
            {["Popup dashboard", "Domain mapping", "Settings"].map((label, i) => (
              <Reveal key={label} delay={i * 0.08} className="card extension-screen-card">
                <div className="extension-screen-preview">
                  <div className="extension-screen-line" />
                  <div className="extension-screen-line" />
                </div>
                <p className="extension-screen-label">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXTENSION FAQ */}
      <section className="container-page section-sm extension-faq-section">
        <Reveal>
          <span className="eyebrow">Extension FAQ</span>
          <h2 className="section-title">Common questions</h2>
          <div className="extension-faq-body">
            <Accordion items={extensionFaq} />
          </div>
        </Reveal>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="section-sm section-border-top">
        <div className="container-page extension-cta-section">
          <Reveal>
            <h2 className="extension-cta-title">Ready to resolve your first domain?</h2>
            <a
              href={SITE.extensionStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary extension-cta-button"
            >
              Install Chrome Extension
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
