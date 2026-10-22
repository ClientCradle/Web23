import { useEffect, useRef } from "react";
import "./GlobalBackground.css";

// Site-wide animated backdrop: two families of drifting nodes — a "WEB2/DNS"
// cluster and a "WEB3/DLT" cluster — occasionally bridge to one another, with
// a small pulse of light skating along the bridge to suggest a domain
// resolving. Same visual language as the hero's <NetworkVisual>, just
// ambient and mounted once for every page instead of drawn per-section.
//
// Performance / accessibility notes:
// - Canvas 2D, not per-node DOM nodes — cheap even with ~60 points on screen.
// - Colors are read from the live CSS custom properties so light/dark theme
//   and the ThemeToggle just work without any JS-side color table.
// - Animation is skipped entirely (a single static frame is drawn) when the
//   user prefers reduced motion, and paused while the tab is hidden.

const MAX_NODES = 64;
const MIN_NODES = 28;
const LINK_DIST = 150;
const BRIDGE_EVERY_MS = 2600;

function readTheme() {
  const style = getComputedStyle(document.documentElement);
  return {
    signal: (style.getPropertyValue("--color-signal-rgb") || "43, 255, 160").trim(),
    bridge: (style.getPropertyValue("--color-bridge-rgb") || "139, 124, 255").trim(),
  };
}

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let pulses = [];
    let theme = readTheme();
    let rafId = null;
    let lastBridgeAt = 0;
    let hidden = document.hidden;

    function makeNodes() {
      const count = Math.max(MIN_NODES, Math.min(MAX_NODES, Math.round((width * height) / 26000)));
      nodes = Array.from({ length: count }, (_, i) => {
        const kind = i % 2 === 0 ? "signal" : "bridge";
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: kind === "signal" ? 1.6 + Math.random() * 1.2 : 1.3 + Math.random() * 1.1,
          kind,
        };
      });
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeNodes();
    }

    function spawnBridgePulse(now) {
      if (nodes.length < 2 || now - lastBridgeAt < BRIDGE_EVERY_MS) return;
      const signalNodes = nodes.filter((n) => n.kind === "signal");
      const bridgeNodes = nodes.filter((n) => n.kind === "bridge");
      if (!signalNodes.length || !bridgeNodes.length) return;
      const from = signalNodes[Math.floor(Math.random() * signalNodes.length)];
      const to = bridgeNodes[Math.floor(Math.random() * bridgeNodes.length)];
      const dist = Math.hypot(from.x - to.x, from.y - to.y);
      if (dist > width * 0.55) return; // keep bridges visually plausible
      pulses.push({ from, to, t: 0, speed: 0.006 + Math.random() * 0.004 });
      lastBridgeAt = now;
    }

    function step(now) {
      ctx.clearRect(0, 0, width, height);

      // drift + wrap
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // links between nearby same-kind nodes (quiet lattice)
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.kind !== b.kind) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;
          const alpha = (1 - dist / LINK_DIST) * 0.16;
          ctx.strokeStyle = `rgba(${theme[a.kind]}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // occasional cross-cluster bridge pulse (domain resolving Web2 <-> Web3)
      spawnBridgePulse(now);
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        p.t += p.speed;
        const x = p.from.x + (p.to.x - p.from.x) * p.t;
        const y = p.from.y + (p.to.y - p.from.y) * p.t;
        const fade = Math.sin(Math.min(p.t, 1) * Math.PI); // fade in, fade out

        ctx.strokeStyle = `rgba(${theme.signal}, ${0.1 * fade})`;
        ctx.beginPath();
        ctx.moveTo(p.from.x, p.from.y);
        ctx.lineTo(p.to.x, p.to.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme.signal}, ${0.85 * fade})`;
        ctx.shadowColor = `rgba(${theme.signal}, ${0.9 * fade})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // nodes on top
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme[n.kind]}, 0.55)`;
        ctx.fill();
      }

      if (!reduceMotion && !hidden) {
        rafId = requestAnimationFrame(step);
      }
    }

    function handleVisibility() {
      hidden = document.hidden;
      if (!hidden && !reduceMotion && rafId === null) {
        rafId = requestAnimationFrame(step);
      }
    }

    const themeObserver = new MutationObserver(() => {
      theme = readTheme();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemThemeChange = () => {
      theme = readTheme();
    };
    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    if (reduceMotion) {
      step(0); // draw exactly one static frame, no loop
    } else {
      rafId = requestAnimationFrame(step);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div className="global-background" aria-hidden="true">
      <canvas ref={canvasRef} className="global-background-canvas" />
      <div className="global-background-fade" />
    </div>
  );
}
