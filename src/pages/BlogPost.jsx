import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Reveal from "../components/Reveal";
import { BLOG_CATEGORY_COVERS, BLOG_POSTS, SITE } from "../lib/data";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="container-page blog-post-not-found">
        <h1 className="page-title">Post not found</h1>
        <Link to="/blog" className="btn-secondary blog-post-not-found-cta">
          ← Back to blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} — {SITE.name} Blog</title>
      </Helmet>
      <article className="container-page blog-post">
        <Reveal>
          <Link to="/blog" className="blog-post-back">
            ← Back to blog
          </Link>
          <span className="eyebrow blog-post-eyebrow">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.author}</span>
            <span>·</span>
            <span>
              {new Date(post.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <p className="blog-post-excerpt">{post.excerpt}</p>
          <img
            src={BLOG_CATEGORY_COVERS[post.category]}
            alt=""
            className="blog-post-cover"
          />
          <div className="blog-post-body">
            <p>
              This is placeholder body copy for the article — swap it for real Markdown
              content rendered through your CMS or a static Markdown loader.
            </p>
            <p>
              Structure long-form posts with clear headings, short paragraphs, and inline
              code or domain examples wherever it helps clarify how a feature behaves.
            </p>
          </div>
        </Reveal>
      </article>
    </>
  );
}
