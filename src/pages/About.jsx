import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import HeroIllustration from "../components/HeroIllustration";
import { SITE, TEAM } from "../lib/data";
import "./About.css";

const TECH_STACK = [
  { label: "Frontend", items: ["React", "Vite", "TypeScript", "Plain CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "MongoDB", "JWT Auth"] },
  { label: "Extension", items: ["Manifest V3", "Service Workers", "React popup UI"] },
];

const FUTURE_GOALS = [
  "Extend the registry model across additional chains.",
  "Ship Smart Pages so every domain can carry a lightweight, ownable site.",
  "Introduce social verification tied directly to a domain.",
  "Evolve platform governance toward a community-run DAO.",
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — {SITE.name}</title>
      </Helmet>

      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page hero-split">
          <div>
            <Reveal>
              <span className="eyebrow">About {SITE.name}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="page-title page-title-narrow">Simple, seamless & secure.</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="page-lead">
                {SITE.name} is a DNS platform that lets you register and tokenize domain
                names — we call them Smart Domains.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <HeroIllustration icon="user" label="The team & the mission" />
          </Reveal>
        </div>
      </section>

      {/* PLATFORM OVERVIEW — always visible, both mobile & desktop */}
      <section id="platform" className="section-sm section-border-top">
        <div className="container-page about-platform-grid">
          <Reveal>
            <span className="eyebrow">Our Platform</span>
            <h2 className="section-title">Bridging Web2 and Web3</h2>
          </Reveal>
          <Reveal delay={0.08} className="about-platform-copy">
            <p>
              {SITE.name} is dedicated to bridging the gap between Web2 and Web3
              technologies at the intersection of DNS and decentralized ledgers.
            </p>
            <p>
              We offer a regular Web2 domain service where you can search and purchase a
              domain name for your website, alongside a Web3 Smart Domains service where
              you can mint and map functionality to your NFT domain addresses using a
              standard web browser.
            </p>
            <p>
              Our goal is to be a single home for Web2 and Web3 domain management, and to
              extend that functionality to other chains so any domain can be registered,
              managed, and administered from one platform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section-sm section-border-top section-bordered">
        <div className="container-page about-mv-grid">
          <Reveal className="card about-mv-card">
            <span className="eyebrow">Mission</span>
            <p className="about-mv-text">
              Make tokenized domain ownership as simple as registering any traditional
              domain — no separate app, no steep learning curve.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="card about-mv-card">
            <span className="eyebrow">Vision</span>
            <p className="about-mv-text">
              A future where a single domain carries your identity across every browser,
              wallet, and chain you use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="technology" className="section-sm section-border-top">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Technology</span>
            <h2 className="section-title">What the platform runs on</h2>
          </Reveal>
          <div className="about-tech-grid">
            {TECH_STACK.map((stack, i) => (
              <Reveal key={stack.label} delay={i * 0.08} className="card about-tech-card">
                <h3 className="about-tech-title">{stack.label}</h3>
                <ul className="about-tech-list">
                  {stack.items.map((item) => (
                    <li key={item} className="about-tech-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — every member shown in full on mobile and desktop, no truncation */}
      <section id="team" className="section-sm section-border-top section-bordered">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Our Team</span>
            <h2 className="section-title">The people building {SITE.name}</h2>
          </Reveal>

          <div className="about-team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} className="card about-team-card">
                <img src={member.avatar} alt="" className="about-team-avatar" />
                <h3 className="about-team-name">{member.name}</h3>
                <p className="about-team-role">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE GOALS */}
      <section id="future-goals" className="section-sm section-border-top">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Future Goals</span>
            <h2 className="section-title">What's next for the platform</h2>
          </Reveal>
          <div className="about-goals">
            {FUTURE_GOALS.map((goal, i) => (
              <Reveal key={goal} delay={i * 0.06} className="about-goal">
                <span className="about-goal-number">{String(i + 1).padStart(2, "0")}</span>
                <p className="about-goal-text">{goal}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
