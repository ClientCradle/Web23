import Icon from "./Icon";
import Reveal from "./Reveal";
import "./LivePreview.css";

// Rows shown in the resolution log card. Plain data, easy to edit or reuse.
const LOG_ROWS = [
  { name: "priya.dom", target: "wallet · 0x9F2…c41A", status: "done" },
  { name: "studio.dom", target: "storefront.web23.io", status: "done" },
  { name: "vault.dom", target: "wallet · 0x71C…9b2E", status: "pending" },
];

// One bar in the little chart. Height is a percent so the bars scale with
// the box instead of using fixed pixel numbers.
const CHART_BARS = [40, 65, 50, 80, 60, 95, 70];

export default function LivePreview() {
  return (
    <section className="section section-bordered">
      <div className="container-page">
        <Reveal direction="left" className="section-header-center">
          <span className="eyebrow">See it in action</span>
          <h2 className="section-title">All-in-one platform, live</h2>
          <p className="section-lead">
            A quick look at what the dashboard feels like once your domains
            are minted and mapped.
          </p>
        </Reveal>

        <div className="preview-grid">
          {/* The placement classes (preview-card-*) also drive the grid
              column/row on desktop, so they need to live on the direct
              grid child — Reveal forwards its className there. */}
          <Reveal direction="left" className="preview-card-wallet">
            <div className="card preview-card preview-card-wallet">
              <div className="preview-icon">
                <Icon name="wallet" className="icon-sm" />
              </div>
              <h3 className="preview-title">Wallet connected</h3>
              <p className="preview-text">
                One click links a wallet you already use, no separate sign up.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.05} className="preview-card-dashboard">
            <div className="card preview-card preview-card-dashboard">
              <DashboardMock />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="preview-card-log">
            <div className="card preview-card preview-card-log">
              <p className="preview-title">Instant resolution log</p>
              <ul className="log-list">
                {LOG_ROWS.map((row, i) => (
                  <li
                    key={row.name}
                    className="log-row"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div>
                      <p className="log-name">{row.name}</p>
                      <p className="log-target">{row.target}</p>
                    </div>
                    <span className={`log-status log-status-${row.status}`}>
                      {row.status === "done" ? "resolved" : "mapping…"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="dashboard-mock">
      <div className="dashboard-mock-head">
        <div>
          <p className="dashboard-mock-hi">Welcome back,</p>
          <p className="dashboard-mock-name">Priya</p>
        </div>
        <span className="dashboard-mock-tag">web23 · dashboard</span>
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
