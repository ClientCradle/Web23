import { useEffect, useState } from "react";
import "./DomainSearch.css";

const NAMES = ["priya", "studio", "vault", "north"];
const EXT = ".dom";

export default function DomainSearch() {
  const [nameIndex, setNameIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [stage, setStage] = useState("typing");

  useEffect(() => {
    const target = NAMES[nameIndex];
    let i = 0;
    setTyped("");
    setStage("typing");

    const typeInterval = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(typeInterval);
        setStage("checking");
        setTimeout(() => setStage("resolved"), 900);
      }
    }, 110);

    return () => clearInterval(typeInterval);
  }, [nameIndex]);

  useEffect(() => {
    if (stage !== "resolved") return;
    const t = setTimeout(() => {
      setNameIndex((n) => (n + 1) % NAMES.length);
    }, 1800);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <div className="domain-search">
      <div className="card domain-search-bar">
        <StatusIcon status={stage} />
        <div className="domain-search-value">
          <span>{typed}</span>
          <span className="domain-search-cursor" />
          <span className="domain-search-ext">{EXT}</span>
        </div>
        <StatusPill status={stage} />
      </div>

      {stage === "resolved" && (
        <div className="card domain-search-resolved">
          <span className="domain-search-resolved-label">Resolves to</span>
          <span className="domain-search-resolved-value">wallet · 0x9F2…c41A</span>
        </div>
      )}
    </div>
  );
}

function StatusPill({ status }) {
  const label = status === "typing" ? "typing…" : status === "checking" ? "checking" : "available";
  return (
    <span
      className={`domain-search-pill ${status === "resolved" ? "domain-search-pill-resolved" : ""}`}
    >
      {label}
    </span>
  );
}

function StatusIcon({ status }) {
  return (
    <div className="domain-search-icon">
      <span
        className={`domain-search-spinner ${status === "checking" ? "domain-search-spinner-spin" : ""}`}
      />
    </div>
  );
}
