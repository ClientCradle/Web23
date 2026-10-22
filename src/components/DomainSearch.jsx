import { useEffect, useState } from "react";
import Icon from "./Icon";
import "./DomainSearch.css";

const NAMES = ["priya", "studio", "vault", "north"];
const EXT = ".dom";

// A real photo instead of an abstract wallet icon — the "resolved" card
// reads like an actual Web3 identity (ENS-style) instead of a placeholder.
const RESOLVED_AVATAR =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=112&h=112&q=70";

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
    }, 2200);
    return () => clearTimeout(t);
  }, [stage]);

  return (
    <div className="domain-search">
      {/* Pill-shaped omnibox, styled like a real address bar rather than a
          plain card — it's the thing being "typed into". */}
      <div className={`domain-search-omnibox domain-search-omnibox-${stage}`}>
        <Icon name="compass" className="icon icon-sm domain-search-omnibox-icon" />
        <div className="domain-search-omnibox-value">
          <span>{typed}</span>
          <span className="domain-search-cursor" />
          <span className="domain-search-ext">{EXT}</span>
        </div>
        <span className="domain-search-status">
          {stage === "checking" && <span className="domain-search-status-spinner" />}
          {stage === "resolved" && <Icon name="check" className="domain-search-status-icon" />}
          {stage === "typing" ? "typing" : stage === "checking" ? "checking" : "available"}
        </span>
      </div>

      {/* Skeleton and profile share one grid cell so swapping between them
          never changes this block's height and never reflows NetworkVisual
          underneath it. */}
      <div className="card domain-search-result" data-stage={stage}>
        <div className="domain-search-skeleton">
          <span className="domain-search-skeleton-avatar" />
          <div className="domain-search-skeleton-lines">
            <span className="domain-search-skeleton-line domain-search-skeleton-line-1" />
            <span className="domain-search-skeleton-line domain-search-skeleton-line-2" />
          </div>
        </div>

        <div className="domain-search-profile">
          <div className="domain-search-profile-avatar-wrap">
            <img src={RESOLVED_AVATAR} alt="" className="domain-search-profile-avatar" />
            <span className="domain-search-profile-badge">
              <Icon name="check" className="domain-search-badge-icon" />
            </span>
          </div>
          <div className="domain-search-profile-info">
            <span className="domain-search-profile-name">
              {typed || NAMES[nameIndex]}
              {EXT}
            </span>
            <span className="domain-search-profile-address">0x9F2…c41A · wallet</span>
          </div>
          <span className="domain-search-profile-chain">Base</span>
        </div>
      </div>
    </div>
  );
}
