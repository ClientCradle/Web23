import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import HeroIllustration from "../components/HeroIllustration";
import { BLOG_CATEGORIES, BLOG_CATEGORY_COVERS, BLOG_POSTS, SITE } from "../lib/data";
import "./Blog.css";

const PAGE_SIZE = 4;

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const featured = BLOG_POSTS.find((p) => p.featured);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => !p.featured || category !== "All" || query).filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !query || p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Helmet>
        <title>Blog — {SITE.name}</title>
      </Helmet>

      <section className="section-hero">
        <div className="section-glow" />
        <div className="section-grid-fade" />
        <div className="container-page hero-split">
          <div>
            <Reveal>
              <span className="eyebrow">Blog</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="page-title">Notes on domains, chains, and identity</h1>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <HeroIllustration icon="layers" label="Latest writing" />
          </Reveal>
        </div>
      </section>

      {featured && category === "All" && !query && (
        <section className="container-page blog-featured-section">
          <Reveal>
            <Link to={`/blog/${featured.slug}`} className="card card-hover blog-featured-card">
              <img
                src={BLOG_CATEGORY_COVERS[featured.category]}
                alt=""
                className="blog-featured-cover"
              />
              <div className="blog-featured-grid">
                <div>
                  <span className="eyebrow">Featured · {featured.category}</span>
                  <h2 className="blog-featured-title">{featured.title}</h2>
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                </div>
                <div className="blog-featured-meta">
                  <span>{featured.author}</span>
                  <span>
                    {new Date(featured.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {featured.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="container-page blog-list-section">
        <div className="blog-toolbar">
          <div className="blog-categories">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`blog-category-button ${category === c ? "blog-category-button-active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search posts…"
            className="blog-search-input"
          />
        </div>

        <div className="blog-grid">
          {paged.map((post) => (
            <Reveal key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="card card-hover blog-card">
                <img
                  src={BLOG_CATEGORY_COVERS[post.category]}
                  alt=""
                  className="blog-card-cover"
                />
                <div className="blog-card-body">
                  <span className="eyebrow">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          {paged.length === 0 && <p className="blog-empty">No posts match your search.</p>}
        </div>

        {totalPages > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`blog-pagination-button ${page === i + 1 ? "blog-pagination-button-active" : ""}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
