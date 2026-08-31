// Central content store. All copy below is original writing produced for this
// project — inspired by the *concepts* in the brief (smart/tokenized domains,
// Web2<->Web3 bridging, browser extension resolution) but not copied from any
// third-party site, and using no real company name, logo, or team members.

export const SITE = {
  name: "Web23",
  tagline: "Smart Domains. Tokenized for the Future.",
  dashboardUrl: "https://app.web23.io",
  discord: "https://discord.gg/web23",
  twitter: "https://twitter.com/web23",
  extensionStoreUrl: "https://chrome.google.com/webstore/detail/web23",
  supportEmail: "support@web23.io",
};

export const NAV_LINKS = [
  { label: "Roadmap", to: "/roadmap" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Support", to: "/support" },
];

export const FEATURES = [
  {
    icon: "brain",
    title: "Smart Domains",
    summary:
      "Search and mint tokenized domain names, then wire them up to real actions from your dashboard.",
    detail:
      "A Smart Domain doesn't just point a browser somewhere — it can trigger a transaction, load a profile, or resolve to a wallet address the moment it's typed in.",
  },
  {
    icon: "globe",
    title: "Regular Domains",
    summary:
      "Register and manage traditional ICANN domains right alongside your tokenized ones.",
    detail:
      "Bring domains you already own into the same dashboard as your Smart Domains, so every identity you hold lives in one place.",
    badge: "Coming soon",
  },
  {
    icon: "shield",
    title: "Security & Privacy",
    summary:
      "Automated look-alike scanning flags phishing-style domains before they reach your identity.",
    detail:
      "Every mint is checked against known impersonation patterns, and every subscription renewal is logged for full transparency.",
  },
  {
    icon: "layers",
    title: "Multi-Chain Support",
    summary: "Built to extend beyond a single chain as new networks come online.",
    detail:
      "The registry and resolver layer are chain-agnostic by design, so new networks can be added without breaking existing domains.",
  },
  {
    icon: "wallet",
    title: "Wallet Integration",
    summary: "Connect the wallets you already use to mint, renew, and send from a domain.",
    detail:
      "Support for leading browser and hardware wallets, with more integrations shipping on the roadmap.",
  },
  {
    icon: "extension",
    title: "Chrome Extension",
    summary: "Resolve tokenized domains directly in your browser address bar.",
    detail:
      "Type a Smart Domain into Chrome and the extension routes you to whatever it's mapped to — a site, a profile, or a wallet.",
  },
  {
    icon: "user",
    title: "User Profiles",
    summary: "One profile that carries your identity across Web2 and Web3 surfaces.",
    detail:
      "Import an existing avatar, link social accounts, and manage every domain you hold from a single account.",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Decentralized identity",
    description: "Your domain and profile data live on-chain, not on a company's private server.",
  },
  {
    title: "Security by default",
    description: "Look-alike detection and renewal safeguards run automatically on every domain.",
  },
  {
    title: "Browser-native access",
    description: "No separate app required — resolution happens right inside Chrome.",
  },
  {
    title: "NFT-based ownership",
    description: "Every Smart Domain is a transferable token you fully own and control.",
  },
  {
    title: "Cross-chain interoperability",
    description: "One registry model designed to extend across multiple networks over time.",
  },
  {
    title: "Future-proof architecture",
    description: "New domain extensions, chains, and utilities plug into the same core system.",
  },
];

export const ROADMAP = {
  current: [
    { title: "Smart Domains launch", description: "Mint and manage tokenized domains from the dashboard." },
    { title: "Browser integration", description: "Chrome extension resolves Smart Domains in the address bar." },
  ],
  upcoming: [
    { title: "Multi-chain functionality", description: "Extend the registry model to additional networks." },
    { title: "Smart Pages", description: "Attach a lightweight, ownable webpage to any Smart Domain." },
    { title: "Social verification", description: "Link and verify social accounts against a domain." },
    { title: "Security enhancements", description: "Deeper phishing detection and account recovery tools." },
    { title: "Tokenized utilities", description: "Coupons, gated content, and other on-chain perks tied to domains." },
  ],
  future: [
    { title: "DAO ecosystem", description: "Community governance over registry rules and treasury." },
    { title: "Universal domain interoperability", description: "One resolver standard across every supported chain." },
    { title: "Cross-browser support", description: "Extensions for every major browser, not just Chrome." },
  ],
};

export const TEAM = [
  { name: "Priya Nandan", role: "CEO & Co-Founder", initials: "PN", avatar: "/images/avatars/priya-nandan.svg" },
  { name: "Marcus Ehlers", role: "Head of Partnerships", initials: "ME", avatar: "/images/avatars/marcus-ehlers.svg" },
  { name: "Aki Sato", role: "Technology Lead", initials: "AS", avatar: "/images/avatars/aki-sato.svg" },
  { name: "Lena Cortez", role: "Legal & Privacy", initials: "LC", avatar: "/images/avatars/lena-cortez.svg" },
];

export const TESTIMONIALS = [
  {
    name: "J. Alvarez",
    role: "NFT collector",
    quote:
      "Minting my Smart Domain took minutes, and now it doubles as my wallet address. It's the first Web3 product I've used that felt this simple.",
    rating: 5,
    avatar: "/images/avatars/j-alvarez.svg",
  },
  {
    name: "R. Okafor",
    role: "Indie brand owner",
    quote:
      "Having my regular domain and my tokenized one in the same dashboard removed a whole category of busywork.",
    rating: 5,
    avatar: "/images/avatars/r-okafor.svg",
  },
  {
    name: "T. Lindqvist",
    role: "Developer",
    quote:
      "The Chrome extension resolving domains straight in the address bar is exactly the bridge Web3 needed.",
    rating: 4,
    avatar: "/images/avatars/t-lindqvist.svg",
  },
];

// FAQ content is original writing addressing the same topic areas a tokenized
// domain product typically covers — not copied from any external source.
export const FAQ_CATEGORIES = [
  {
    category: "General",
    items: [
      {
        q: "What is Web23?",
        a: "Web23 is a DNS platform that lets you register and tokenize domain names on-chain, bringing utility to both traditional Web2 domains and tokenized Web3 domains. You can buy, sell, and manage every domain you hold from one dashboard.",
      },
      {
        q: "Why domains and tokens together?",
        a: "Our goal is to be a single place for both ICANN-style domain registration and on-chain domain minting — bridging the gap between Web2 and Web3 by giving browsers direct access to decentralized data.",
      },
      {
        q: "Has the platform been tested?",
        a: "The platform has been through internal testing and an early access program with community members, and we continue to ship improvements based on that feedback.",
      },
    ],
  },
  {
    category: "Smart Domains",
    items: [
      {
        q: "What's a Smart Domain?",
        a: "A traditional domain tells a browser where to go. A Smart Domain tells it what to do — similar to a smart contract, it can carry tokenized functionality tied directly to the URL.",
      },
      {
        q: "How do Smart Domains work?",
        a: "When you mint a Smart Domain, it's linked to decentralized data you define. Typing that domain into a supported browser triggers whatever action you've mapped — a redirect, a profile, or a transaction.",
      },
      {
        q: "How does it all connect?",
        a: "Once your wallet is connected, the browser extension talks to backend APIs and smart contracts to carry out whatever action is mapped to your domain and wallet ID. You set those instructions from the dashboard.",
      },
      {
        q: "Can I mint any extension?",
        a: "We're starting with a small set of extensions to introduce tokenized domains properly, with more extensions and subdomain options planned as the platform grows.",
      },
    ],
  },
  {
    category: "Domains",
    items: [
      {
        q: "What's in the dashboard?",
        a: "The dashboard lets you register traditional domains, transfer in domains you already own, connect social accounts, and access the tools for minting a Smart Domain.",
      },
      {
        q: "Will domains from other providers be altered?",
        a: "Never. Domains minted elsewhere can't be modified by us in any way — you're always in control of assets you hold outside the platform.",
      },
      {
        q: "How do renewals work?",
        a: "Like traditional domains, tokenized domains renew annually to prevent squatting. If a domain isn't renewed after it expires, it returns to the registry and becomes available again.",
      },
      {
        q: "Will certain names be reserved?",
        a: "Yes. We follow trademark and copyright rules and check reserved-name lists so names aren't claimed by parties without rights to them. Otherwise, it's first come, first served.",
      },
    ],
  },
  {
    category: "Wallets & Pricing",
    items: [
      {
        q: "Which wallets are supported?",
        a: "We support several popular browser and hardware wallets for minting and managing Smart Domains, with more integrations planned on the roadmap.",
      },
      {
        q: "What does a Smart Domain cost?",
        a: "Smart Domains start at a low annual fee payable in the network's native token, with tiered pricing for premium names — similar to how traditional domain pricing works.",
      },
      {
        q: "How will I pay?",
        a: "Payments start in the native token of the supported network, with card payments and additional cryptocurrencies planned as we expand chain support.",
      },
      {
        q: "Does price depend on domain length?",
        a: "No — pricing is tiered by rarity and category rather than character count, similar to common Web2 domain pricing conventions.",
      },
    ],
  },
  {
    category: "Chrome Extension",
    items: [
      {
        q: "What does the extension do?",
        a: "It resolves tokenized domains directly in your browser's address bar, so typing a Smart Domain takes you exactly where its owner has mapped it.",
      },
      {
        q: "Can any mapped domain be resolved from Web2?",
        a: "Yes — once mapped on the platform and with the extension installed, a Smart Domain resolves like any other web address.",
      },
      {
        q: "Is my subscription required for resolution?",
        a: "An active subscription keeps your mapping live. If it lapses, visitors are routed to a default fallback page instead of your mapped destination.",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        q: "How are look-alike domains handled?",
        a: "An automated scan checks new mints against existing names to flag possible look-alike or phishing attempts before they can impersonate an existing identity.",
      },
      {
        q: "What happens if I transfer a domain?",
        a: "Transfers work like sending any other NFT. The domain becomes inactive until the new holder links it to an active subscription, which prevents unclaimed domains from silently resolving.",
      },
    ],
  },
];

export const EXTENSION_STEPS = [
  {
    title: "Install from the Chrome Web Store",
    description: "Add the extension in a couple of clicks — no account required to install.",
  },
  {
    title: "Connect your wallet",
    description: "Link a supported wallet so the extension can verify domains you own.",
  },
  {
    title: "Map your Smart Domain",
    description: "From the dashboard, point your domain at a site, profile, or wallet address.",
  },
  {
    title: "Browse as usual",
    description: "Type any mapped Smart Domain into Chrome and it resolves automatically.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "what-are-smart-domains",
    title: "What are Smart Domains, really?",
    excerpt:
      "A plain-language walkthrough of how tokenized domains differ from the domains you already know.",
    category: "Product",
    author: "Priya Nandan",
    date: "2026-06-02",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "bridging-web2-and-web3",
    title: "Bridging Web2 and Web3 without the headaches",
    excerpt: "Why browser-level resolution matters more than another standalone app.",
    category: "Vision",
    author: "Aki Sato",
    date: "2026-05-18",
    readTime: "6 min read",
  },
  {
    slug: "domain-security-101",
    title: "Domain security 101: spotting a look-alike",
    excerpt: "The patterns our scanning tools watch for, explained for humans.",
    category: "Security",
    author: "Lena Cortez",
    date: "2026-05-04",
    readTime: "4 min read",
  },
  {
    slug: "chrome-extension-deep-dive",
    title: "Inside the Chrome extension: how resolution works",
    excerpt: "A technical look at manifest V3, service workers, and domain lookups.",
    category: "Engineering",
    author: "Aki Sato",
    date: "2026-04-22",
    readTime: "7 min read",
  },
  {
    slug: "pricing-domains-fairly",
    title: "How we think about pricing a domain fairly",
    excerpt: "Rarity, category, and why length alone was never the right metric.",
    category: "Product",
    author: "Marcus Ehlers",
    date: "2026-04-09",
    readTime: "3 min read",
  },
];

export const BLOG_CATEGORIES = ["All", "Product", "Vision", "Security", "Engineering"];

// One cover image per category, reused across its posts.
export const BLOG_CATEGORY_COVERS = {
  Product: "/images/blog/product.svg",
  Vision: "/images/blog/vision.svg",
  Security: "/images/blog/security.svg",
  Engineering: "/images/blog/engineering.svg",
};
