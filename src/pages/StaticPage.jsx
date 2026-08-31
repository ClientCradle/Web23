import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import { SITE } from "../lib/data";
import "./StaticPage.css";

export default function StaticPage({ title, eyebrow, children }) {
  return (
    <>
      <Helmet>
        <title>{title} — {SITE.name}</title>
      </Helmet>
      <section className="section-hero static-page-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page static-page">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="page-title">{title}</h1>
          </Reveal>
          <Reveal delay={0.1} className="static-page-body">
            {children}
          </Reveal>
        </div>
      </section>
    </>
  );
}
