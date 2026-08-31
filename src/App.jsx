import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Extension from "./pages/Extension";
import StaticPage from "./pages/StaticPage";
import NotFound from "./pages/NotFound";
import { SITE } from "./lib/data";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/extension" element={<Extension />} />

          <Route
            path="/contact"
            element={
              <StaticPage title="Contact" eyebrow="Get in touch">
                <p>Reach the team directly at hello@{SITE.name.toLowerCase()}.io.</p>
              </StaticPage>
            }
          />
          <Route
            path="/docs"
            element={
              <StaticPage title="Documentation" eyebrow="Resources">
                <p>API and integration documentation lives here — connect your docs site or Docusaurus instance to this route.</p>
              </StaticPage>
            }
          />
          <Route
            path="/audit"
            element={
              <StaticPage title="Security Audit" eyebrow="Resources">
                <p>Our smart contracts undergo independent third-party review. Full audit reports are published here.</p>
              </StaticPage>
            }
          />
          <Route
            path="/status"
            element={
              <StaticPage title="API Status" eyebrow="Resources">
                <p>All systems operational. Connect this page to your status provider (e.g. Statuspage, BetterStack) for live data.</p>
              </StaticPage>
            }
          />
          <Route
            path="/terms"
            element={
              <StaticPage title="Terms of Service" eyebrow="Legal">
                <p>Placeholder terms of service — replace with your reviewed legal copy before launch.</p>
              </StaticPage>
            }
          />
          <Route
            path="/privacy"
            element={
              <StaticPage title="Privacy Policy" eyebrow="Legal">
                <p>Placeholder privacy policy — replace with your reviewed legal copy before launch.</p>
              </StaticPage>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
