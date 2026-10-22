import "./BrowserFrame.css";

// Shared "browser chrome" shell — traffic-light dots + a URL bar over a
// scanning-light screen. Used anywhere the site wants to show something
// "live in the browser": the workflow demo on Home, and the dashboard
// preview in LivePreview. One component so that motif reads as the same
// idea everywhere instead of two different mockups that happen to look
// similar.
export default function BrowserFrame({ url, children, className = "", bodyClassName = "" }) {
  return (
    <div className={`card browser-frame ${className}`}>
      <div className="browser-frame-bar">
        <span className="browser-frame-dot browser-frame-dot-red" />
        <span className="browser-frame-dot browser-frame-dot-yellow" />
        <span className="browser-frame-dot browser-frame-dot-green" />
        <div className="browser-frame-url">{url}</div>
      </div>
      <div className={`browser-frame-body ${bodyClassName}`}>{children}</div>
    </div>
  );
}
