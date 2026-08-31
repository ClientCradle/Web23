import { useEffect, useLayoutEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import "./CyclingFeatureGrid.css";

const ROTATE_MS = 4000;
const FLIP_MS = 700;

// Send the front card to the back of the deck and shift everyone else
// forward by one — a steady, self-running cycle rather than anything
// driven by where the cursor happens to be.
function rotate(order) {
  const [front, ...rest] = order;
  return [...rest, front];
}

function sizeForPosition(position, total) {
  if (position === 0) return { size: "lg", span: "bento-2x2" };
  if (position >= total - 2) return { size: "wide", span: "bento-2x1" };
  return { size: "default", span: "" };
}

export default function CyclingFeatureGrid({ features }) {
  const [order, setOrder] = useState(() => features.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const nodeRefs = useRef({});
  const flipRects = useRef(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      const rects = {};
      for (const key of Object.keys(nodeRefs.current)) {
        const node = nodeRefs.current[key];
        if (node) rects[key] = node.getBoundingClientRect();
      }
      flipRects.current = rects;
      setOrder((current) => rotate(current));
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  useLayoutEffect(() => {
    const rects = flipRects.current;
    if (!rects) return;
    flipRects.current = null;

    for (const key of Object.keys(nodeRefs.current)) {
      const node = nodeRefs.current[key];
      const before = rects[key];
      if (!node || !before) continue;

      const after = node.getBoundingClientRect();
      const deltaX = before.left - after.left;
      const deltaY = before.top - after.top;
      if (!deltaX && !deltaY) continue;

      node.style.transition = "none";
      node.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      // Force layout so the browser registers the starting position before
      // we animate back to translate(0, 0).
      node.getBoundingClientRect();
      node.style.transition = `transform ${FLIP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
      node.style.transform = "translate(0, 0)";
    }
  }, [order]);

  return (
    <div
      className="bento-grid cycling-feature-grid"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {order.map((originalIndex, position) => {
        const feature = features[originalIndex];
        const { size, span } = sizeForPosition(position, order.length);
        return (
          <div
            key={feature.title}
            ref={(node) => {
              nodeRefs.current[feature.title] = node;
            }}
            className={`cycling-feature-item ${span}`}
          >
            <FeatureCard {...feature} size={size} />
          </div>
        );
      })}
    </div>
  );
}
