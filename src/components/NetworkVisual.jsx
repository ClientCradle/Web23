import "./NetworkVisual.css";

const nodesLeft = [
  { x: 40, y: 60 },
  { x: 40, y: 140 },
  { x: 40, y: 220 },
];
const nodesRight = [
  { x: 460, y: 40 },
  { x: 460, y: 110 },
  { x: 460, y: 180 },
  { x: 460, y: 250 },
];

export default function NetworkVisual() {
  return (
    <svg
      viewBox="0 0 500 280"
      className="network-visual"
      role="img"
      aria-label="Diagram showing traditional DNS nodes bridging into a decentralized network of nodes"
    >
      <defs>
        <linearGradient id="bridgeLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#2BFFA0" />
          <stop offset="100%" stopColor="#8B7CFF" />
        </linearGradient>
      </defs>

      {/* connecting lines */}
      {nodesLeft.map((l, i) =>
        nodesRight
          .filter((_, j) => (i + j) % 2 === 0)
          .map((r, j) => (
            <line
              key={`${i}-${j}`}
              x1={l.x}
              y1={l.y}
              x2={r.x}
              y2={r.y}
              stroke="url(#bridgeLine)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="network-connector"
              style={{ animationDelay: `${0.1 * (i + j)}s` }}
            />
          ))
      )}

      {/* center bridge node */}
      <circle
        cx="250"
        cy="140"
        r="26"
        fill="#0F1B16"
        stroke="#2BFFA0"
        strokeWidth="1.5"
        className="network-center-node"
      />
      <text x="250" y="145" textAnchor="middle" fontSize="10" fill="#2BFFA0" fontFamily="IBM Plex Mono, monospace">
        .dom
      </text>

      {[0, 1].map((i) => (
        <line
          key={`bridge-${i}`}
          x1={i === 0 ? 66 : 434}
          y1="140"
          x2={i === 0 ? 224 : 276}
          y2="140"
          stroke={i === 0 ? "#2BFFA0" : "#8B7CFF"}
          strokeWidth="2"
          className="network-bridge-line"
        />
      ))}

      {/* left cluster: DNS / Web2 */}
      {nodesLeft.map((n, i) => (
        <circle
          key={`l-${i}`}
          cx={n.x}
          cy={n.y}
          r="16"
          fill="#0F1B16"
          stroke="#1E332A"
          strokeWidth="1.5"
          className="network-drift-node"
          style={{ animationDuration: `${4 + i}s` }}
        />
      ))}
      <text x="40" y="20" textAnchor="middle" fontSize="10" fill="#5C7A6E" fontFamily="IBM Plex Mono, monospace">
        WEB2 / DNS
      </text>

      {/* right cluster: DLT / Web3 */}
      {nodesRight.map((n, i) => (
        <circle
          key={`r-${i}`}
          cx={n.x}
          cy={n.y}
          r="14"
          fill="#0F1B16"
          stroke="#8B7CFF"
          strokeWidth="1.5"
          className="network-drift-node"
          style={{ animationDuration: `${5 + i}s` }}
        />
      ))}
      <text x="460" y="20" textAnchor="middle" fontSize="10" fill="#5C7A6E" fontFamily="IBM Plex Mono, monospace">
        WEB3 / DLT
      </text>
    </svg>
  );
}
