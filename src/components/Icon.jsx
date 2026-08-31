import "./Icon.css";

const PATHS = {
  brain: (
    <path d="M9 3a3 3 0 0 0-3 3v.2A3 3 0 0 0 4 9v1a3 3 0 0 0 1 2.2V15a3 3 0 0 0 3 3h1v2a1 1 0 0 0 2 0v-2h2v2a1 1 0 0 0 2 0v-2h1a3 3 0 0 0 3-3v-2.8A3 3 0 0 0 20 10V9a3 3 0 0 0-2-2.8V6a3 3 0 0 0-3-3 3 3 0 0 0-2 .8A3 3 0 0 0 9 3Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />,
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14" r="1" />
    </>
  ),
  extension: (
    <path d="M14 3h-4v3.5a1.5 1.5 0 0 1-3 0V3H4v6.5h3.5a1.5 1.5 0 0 1 0 3H4V19h6.5a1.5 1.5 0 0 1 3 0V19H20v-6.5h-3.5a1.5 1.5 0 0 1 0-3H20V3h-6Z" />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" />
      <path d="M12 17h.01" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-3 1 2-5 3-1Z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />,
};

export default function Icon({ name, className = "icon" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {PATHS[name] ?? PATHS.check}
    </svg>
  );
}
