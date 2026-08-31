import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";
import HeroIllustration from "../components/HeroIllustration";
import { FAQ_CATEGORIES, SITE } from "../lib/data";
import "./FAQ.css";

export default function FAQ() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...FAQ_CATEGORIES.map((c) => c.category)];

  const filtered = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        const matchesCategory = activeCategory === "All" || activeCategory === cat.category;
        const matchesQuery =
          !query ||
          item.q.toLowerCase().includes(query.toLowerCase()) ||
          item.a.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    })).filter((cat) => cat.items.length > 0);
  }, [query, activeCategory]);

  return (
    <>
      <Helmet>
        <title>FAQ — {SITE.name}</title>
      </Helmet>

      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page">
          <div className="hero-split">
            <div>
              <Reveal>
                <span className="eyebrow">FAQ</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="page-title">Frequently asked questions</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="page-lead">
                  Answers to what we hear most from the community — organized by topic.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <HeroIllustration icon="question" label="Answers, fast" />
            </Reveal>
          </div>

          <Reveal delay={0.2} className="faq-search-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the FAQ…"
              className="faq-search-input"
            />
          </Reveal>

          <Reveal delay={0.25} className="faq-categories">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`faq-category-button ${activeCategory === c ? "faq-category-button-active" : ""}`}
              >
                {c}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-page faq-body">
        {filtered.length === 0 && <p className="faq-empty">No questions match your search.</p>}
        {filtered.map((cat) => (
          <Reveal key={cat.category} className="faq-category-block">
            <h2 className="eyebrow faq-category-block-title">{cat.category}</h2>
            <Accordion items={cat.items} />
          </Reveal>
        ))}

        <Reveal className="card faq-contact-card">
          <p className="faq-contact-title">Can't find an answer?</p>
          <p className="faq-contact-text">No problem — speak with our team directly.</p>
          <a href={SITE.discord} className="btn-primary" target="_blank" rel="noreferrer">
            Ask on Discord
          </a>
        </Reveal>
      </section>
    </>
  );
}
