import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import HeroIllustration from "../components/HeroIllustration";
import { ROADMAP, SITE } from "../lib/data";
import "./Roadmap.css";

const PHASES = [
  { key: "current", label: "Current", progress: 100, items: ROADMAP.current },
  { key: "upcoming", label: "Upcoming", progress: 45, items: ROADMAP.upcoming },
  { key: "future", label: "Future", progress: 10, items: ROADMAP.future },
];

export default function Roadmap() {
  const [active, setActive] = useState("current");
  const phase = PHASES.find((p) => p.key === active);

  return (
    <>
      <Helmet>
        <title>Roadmap — {SITE.name}</title>
      </Helmet>

      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page hero-split">
          <div>
            <Reveal>
              <span className="eyebrow">Roadmap</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="page-title page-title-narrow">Built in the open, one phase at a time</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="page-lead">
                From Smart Domains and browser integration today, to a full DAO-governed
                ecosystem tomorrow.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <HeroIllustration icon="compass" label="Where we're headed" />
          </Reveal>
        </div>
      </section>

      <section className="container-page roadmap-body">
        {/* phase tabs */}
        <div className="roadmap-tabs">
          {PHASES.map((p) => (
            <button
              key={p.key}
              onClick={() => setActive(p.key)}
              className={`roadmap-tab ${active === p.key ? "roadmap-tab-active" : ""}`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* progress bar */}
        <div className="roadmap-progress">
          <div className="roadmap-progress-labels">
            <span>Progress</span>
            <span>{phase.progress}%</span>
          </div>
          <div className="roadmap-progress-track">
            <div className="roadmap-progress-bar" style={{ width: `${phase.progress}%` }} />
          </div>
        </div>

        {/* milestone timeline */}
        <div className="roadmap-timeline">
          {phase.items.map((item, i) => (
            <Reveal key={`${phase.key}-${item.title}`} delay={i * 0.08} className="roadmap-timeline-item">
              <span className="roadmap-timeline-dot" />
              <h3 className="roadmap-timeline-title">{item.title}</h3>
              <p className="roadmap-timeline-description">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
