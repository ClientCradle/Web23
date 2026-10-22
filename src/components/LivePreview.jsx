import { useEffect, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import BrowserFrame from "./BrowserFrame";
import "./LivePreview.css";

// One bar in the little chart. Height is a percent so the bars scale with
// the box instead of using fixed pixel numbers.
const CHART_BARS = [40, 65, 50, 80, 60, 95, 70];

const DOMAINS = [
  { name: "priya.dom", target: "wallet · 0x9F2…c41A", status: "active" },
  { name: "studio.dom", target: "storefront.web23.io", status: "active" },
  { name: "vault.dom", target: "wallet · 0x71C…9b2E", status: "pending" },
];

const ACTIVITY = [
  { icon: "check", label: "priya.dom minted", time: "2m ago" },
  { icon: "wallet", label: "Wallet connected", time: "5m ago" },
  { icon: "shield", label: "Look-alike scan passed", time: "18m ago" },
  { icon: "globe", label: "vault.dom renewed", time: "1d ago" },
];

// Three different views of the same dashboard, auto-cycling in place —
// same footprint every time (fixed-height panel, crossfaded), so unlike
// the old version, rotating never touches any other section's layout.
const TABS = ["Overview", "Domains", "Activity"];
const TAB_MS = 4200;

export default function LivePreview() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % TABS.length), TAB_MS);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="section section-bordered">
      <div className="container-page">
        <Reveal direction="left" className="section-header-center">
          <span className="live-preview-eyebrow-row">
            <span className="eyebrow">See it in action</span>
            <span className="live-pill">
              <span className="live-pill-dot" />
              Live
            </span>
          </span>
          <h2 className="section-title">All-in-one platform, live</h2>
          <p className="section-lead">
            A quick look at what the dashboard feels like once your domains
            are minted and mapped.
          </p>
        </Reveal>

        <Reveal direction="left" delay={0.05} className="preview-showcase">
          <BrowserFrame
            url="app.web23.io/dashboard"
            className="preview-dashboard-frame"
            bodyClassName="dashboard-frame-body"
          >
            <div
              className={`dashboard-tabs ${paused ? "dashboard-tabs-paused" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={`dashboard-tab ${i === active ? "dashboard-tab-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="dashboard-panels">
              <OverviewPanel active={active === 0} />
              <DomainsPanel active={active === 1} />
              <ActivityPanel active={active === 2} />
            </div>
          </BrowserFrame>

          {/* <div className="card preview-float preview-float-wallet">
            <span className="preview-float-icon">
              <Icon name="wallet" className="icon-xs" />
            </span>
            Wallet connected
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}

function OverviewPanel({ active }) {
  return (
    <div className={`dashboard-panel ${active ? "dashboard-panel-active" : ""}`}>
      <div className="dashboard-mock-head">
        <div>
          <p className="dashboard-mock-hi">Welcome back,</p>
          <p className="dashboard-mock-name">Priya</p>
        </div>
        <span className="dashboard-mock-tag">3 domains</span>
      </div>

      <div className="dashboard-mock-stats">
        <div className="dashboard-stat">
          <span className="dashboard-stat-value">12</span>
          <span className="dashboard-stat-label">Domains</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat-value">9</span>
          <span className="dashboard-stat-label">Active</span>
        </div>
        <div className="dashboard-stat">
          <span className="dashboard-stat-value">2</span>
          <span className="dashboard-stat-label">Renewals</span>
        </div>
      </div>

      <div className="dashboard-chart">
        {CHART_BARS.map((height, i) => (
          <span
            key={i}
            className="dashboard-chart-bar"
            style={{ "--bar-height": `${height}%`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function DomainsPanel({ active }) {
  return (
    <div className={`dashboard-panel ${active ? "dashboard-panel-active" : ""}`}>
      <p className="dashboard-panel-label">Your domains</p>
      <ul className="dashboard-domain-list">
        {DOMAINS.map((row) => (
          <li key={row.name} className="dashboard-domain-row">
            <div>
              <p className="dashboard-domain-name">{row.name}</p>
              <p className="dashboard-domain-target">{row.target}</p>
            </div>
            <span className={`dashboard-domain-status dashboard-domain-status-${row.status}`}>
              {row.status === "active" ? "active" : "mapping…"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActivityPanel({ active }) {
  return (
    <div className={`dashboard-panel ${active ? "dashboard-panel-active" : ""}`}>
      <p className="dashboard-panel-label">Recent activity</p>
      <ul className="dashboard-timeline">
        {ACTIVITY.map((event) => (
          <li key={event.label} className="dashboard-timeline-row">
            <span className="dashboard-timeline-icon">
              <Icon name={event.icon} className="icon-xs" />
            </span>
            <span className="dashboard-timeline-label">{event.label}</span>
            <span className="dashboard-timeline-time">{event.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
