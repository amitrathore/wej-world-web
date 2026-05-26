// Site-wide content and messaging for wej.world

export const SITE = {
  name: "wej.world",
  tagline: "The Record Label for AI Bands",
  description: "An AI-native music label for AI musicians, AI bands, and the creators and communities behind them.",
  url: "https://wej.world",
  platformUrl: "https://platform.wej.world",
};

export const HERO = {
  eyebrow: "AI-native music label",
  headline: "The Record Label for AI Bands",
  subheadline: "WeJ World develops AI musicians, virtual bands, and participatory music worlds with transparent rights, label-grade releases, and community-powered ownership.",
  primaryCTA: {
    label: "Launch an AI Act",
    href: "https://platform.wej.world/submit",
  },
  secondaryCTA: {
    label: "Explore the Platform",
    href: "/platform",
  },
};

export const FEATURES = [
  {
    icon: "🎤",
    title: "AI Artist Development",
    description: "Shape AI musicians and bands with sonic direction, visual identity, lore, releases, and long-term audience strategy.",
  },
  {
    icon: "🧾",
    title: "Rights & Provenance",
    description: "Track creators, prompts, stems, visuals, model usage, credits, ownership splits, and AI disclosure metadata from day one.",
  },
  {
    icon: "🌐",
    title: "Music Worlds",
    description: "Turn songs into living IP ecosystems with band members, stories, videos, drops, fan decisions, and community participation.",
  },
  {
    icon: "💿",
    title: "Label-Grade Releases",
    description: "Prepare AI-native catalogs for distribution, licensing, sync, merch, memberships, and transparent revenue operations.",
  },
];

export const PROJECTS = {
  title: "AI Bands Are Already Becoming Music Worlds",
  subtitle: "WeJ World is built for artists, builders, and communities creating the next generation of music IP.",
  items: [
    {
      name: "The Js",
      status: "live" as const,
      description: "A flagship AI band ecosystem with AI avatars, on-chain economics, lore, community participation, and collaborative IP development.",
      link: "https://www.jointhejs.com",
      features: ["AI Band", "Worldbuilding", "Collaborative IP"],
    },
    {
      name: "Emotion Engines",
      status: "coming-soon" as const,
      description: "AI-powered emotion reading technology for live performances. Real-time audience sentiment analysis that lets performers adapt on the fly.",
      features: ["Live Emotion Reading", "Real-Time Sentiment", "Performance Adaptation"],
    },
    {
      name: "Band of Avatars",
      status: "coming-soon" as const,
      description: "A guided path for producers, visual artists, writers, and communities to launch AI musicians and AI bands with rights clarity and release strategy.",
      features: ["Artist Registry", "Release Pipeline", "Revenue Splits"],
    },
  ],
};

export const NAVIGATION = {
  main: [
    { label: "Platform", href: "/platform" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta: {
    label: "Launch an AI Act",
    href: "https://platform.wej.world/submit",
  },
};

export const FOOTER = {
  tagline: "Where Everyone's Jamming",
  sections: [
    {
      title: "Product",
      links: [
        { label: "Platform", href: "/platform" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "The Js", href: "https://www.jointhejs.com" },
        { label: "Submit an AI Act", href: "https://platform.wej.world/submit" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Mission", href: "/about#mission" },
        { label: "Contact", href: "mailto:hello@wej.world" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com/wejworld", icon: "twitter" },
    { name: "GitHub", href: "https://github.com/wejworld", icon: "github" },
  ],
};

export const PLATFORM_PAGE = {
  hero: {
    eyebrow: "Coming platform",
    title: "Infrastructure for AI Musicians, AI Bands, and Music Worlds",
    subtitle: "The WeJ World platform is being designed as the operating system for AI-native acts: identity, provenance, releases, revenue, licensing, and fan participation in one label-grade workflow.",
  },
  stages: [
    {
      label: "01",
      title: "Create the Act",
      description: "Define the AI musician or band: sound, members, visual identity, lore, collaborators, rights, and creative rules.",
    },
    {
      label: "02",
      title: "Prepare the Release",
      description: "Package tracks, stems, artwork, lyrics, credits, AI disclosures, ownership splits, and launch campaigns.",
    },
    {
      label: "03",
      title: "Grow the World",
      description: "Invite fans into the evolving universe through community decisions, drops, licensing, remixes, and memberships.",
    },
  ],
  features: [
    {
      status: "Coming",
      title: "AI Artist Registry",
      description: "Canonical profiles for AI musicians and bands, including member identities, lore, catalog, credits, tools, and ownership metadata.",
    },
    {
      status: "Coming",
      title: "Rights & Provenance Ledger",
      description: "Track human creators, AI tools, prompts, stems, lyrics, samples, visual assets, edits, approvals, and disclosure notes.",
    },
    {
      status: "Coming",
      title: "Release Pipeline",
      description: "A guided workflow for preparing AI-native singles, albums, videos, and drops for distribution and promotion.",
    },
    {
      status: "Coming",
      title: "Royalty Split Engine",
      description: "Flexible revenue splits for creators, producers, visual artists, writers, builders, WeJ World, and participating communities.",
    },
    {
      status: "Coming",
      title: "Worldbuilding CMS",
      description: "Pages for band members, episodes, lore, music videos, timelines, campaigns, fan decisions, and canonical universe updates.",
    },
    {
      status: "Coming",
      title: "Fan Participation Tools",
      description: "Voting, submissions, remix challenges, gated drops, memberships, reputation, and community-led creative direction.",
    },
    {
      status: "Coming",
      title: "Licensing Marketplace",
      description: "License tracks, stems, vocals, characters, visuals, virtual performances, and brand-ready AI band IP.",
    },
    {
      status: "Coming",
      title: "Creator Dashboard",
      description: "Catalog status, campaign tasks, release analytics, revenue reporting, collaborator approvals, and platform operations.",
    },
    {
      status: "Research",
      title: "AI Tool Integrations",
      description: "Bring creative outputs from music, voice, video, image, and animation tools into one rights-aware label workflow.",
    },
  ],
  cta: {
    title: "Building an AI musician or AI band?",
    description: "WeJ World is looking for ambitious AI-native acts, creative teams, and builders who want label infrastructure instead of disposable generation.",
    primary: {
      label: "Submit an AI Act",
      href: "https://platform.wej.world/submit",
    },
    secondary: {
      label: "Meet The Js",
      href: "https://www.jointhejs.com",
    },
  },
};

export const FEATURES_PAGE = {
  hero: {
    title: "Everything an AI Music Act Needs to Become a World",
    subtitle: "WeJ World gives AI musicians, AI bands, and their human collaborators the structure to develop identity, release music, prove rights, and grow participatory fan communities.",
  },
  forMusicians: {
    title: "For AI Musicians & AI Bands",
    subtitle: "Turn a generated sound into a credible artist with identity, catalog, and audience",
    features: [
      {
        title: "Act Development",
        description: "Define the AI musician or band: sonic palette, members, voice, visuals, lore, catalog strategy, and creative rules.",
      },
      {
        title: "Label-Grade Releases",
        description: "Prepare singles, albums, videos, and drops with the metadata, credits, artwork, campaign assets, and approval flow a real release needs.",
      },
      {
        title: "Transparent Ownership",
        description: "Document who made what, which tools were used, how revenue is shared, and what rights belong to the act, creators, and community.",
      },
      {
        title: "Participatory Worlds",
        description: "Let fans help shape lore, remixes, visuals, drops, and community decisions without losing control of the canon.",
      },
    ],
  },
  forBuilders: {
    title: "For Human Creators & AI Builders",
    subtitle: "Launch AI-native music IP with rights clarity and a path to monetization",
    features: [
      {
        title: "AI Act Incubation",
        description: "Bring a concept for an AI musician, virtual band, or AI music world and develop it into a release-ready label project.",
      },
      {
        title: "Collaborator Credits",
        description: "Recognize producers, writers, prompt designers, visual artists, model operators, editors, and community contributors.",
      },
      {
        title: "Revenue Architecture",
        description: "Design fair splits across creators, builders, WeJ World, rights holders, and participating communities before the catalog scales.",
      },
      {
        title: "Licensable IP",
        description: "Package music, stems, visuals, characters, virtual performances, and story worlds for sync, brand, game, and creator licensing.",
      },
    ],
  },
};

export const ABOUT_PAGE = {
  mission: {
    title: "Building the Label for AI Musicians and AI Bands",
    content: "wej.world is an AI-native music label for virtual artists, AI bands, and the human creators and communities behind them. We believe the next era of music will be built from identity, provenance, participation, and owned creative worlds.",
  },
  ownershipWeb: {
    title: "From Tracks to Music Worlds",
    content: "AI music should not be treated as disposable output. WeJ World develops AI acts as lasting IP: sound, visuals, lore, community, licensing, revenue, and transparent ownership moving together.",
  },
  different: {
    title: "Why AI-Native Acts Need a New Kind of Label",
    points: [
      "AI musicians need identity and canon, not just generated tracks",
      "AI bands need clear credits, disclosures, provenance, and rights",
      "Human collaborators need fair participation in the value they create",
      "Fans can help shape the world without turning the act into chaos",
      "Music IP should be built for licensing, community, and long-term ownership",
    ],
  },
  aiIncubation: {
    title: "AI Act Incubation Model",
    content: "We support producers, writers, visual artists, builders, and communities who are creating AI musicians and AI bands. The incubation model combines creative direction, rights design, release planning, worldbuilding, and monetization strategy.",
  },
  projects: {
    title: "Flagship AI Music Worlds",
    items: [
      {
        name: "The Js",
        description: "A co-owned AI band ecosystem with avatars, lore, on-chain economics, and community-driven IP development. The Js points toward what a band can become when music, identity, and participation are designed together.",
      },
    ],
  },
};

export const PRICING_PAGE = {
  hero: {
    title: "Choose How to Build Your AI Act",
    subtitle: "Start with platform access, move into label services, or work with WeJ World to develop a full AI band ecosystem.",
  },
  artists: {
    title: "For AI Acts & Creative Teams",
    tiers: [
      {
        name: "Launch",
        price: "Free",
        description: "For early AI musicians, producers, and creative teams shaping an act concept",
        features: [
          "AI act profile",
          "Concept submission",
          "Community access",
          "Basic rights checklist",
          "Platform roadmap updates",
        ],
        cta: "Submit Concept",
        href: "https://platform.wej.world/submit",
      },
      {
        name: "Release",
        price: "Apply",
        description: "For AI-native acts preparing music, visuals, credits, and launch campaigns",
        features: [
          "Release preparation",
          "Rights and provenance review",
          "Catalog and identity strategy",
          "Revenue split planning",
          "Campaign support",
          "Licensing readiness",
        ],
        highlighted: true,
        cta: "Apply for Release",
        href: "https://platform.wej.world/submit?track=release",
      },
      {
        name: "World",
        price: "Custom",
        description: "For teams building a full AI band, character universe, or participatory music IP",
        features: [
          "AI band development",
          "Worldbuilding and lore system",
          "Fan participation design",
          "Licensing package",
          "Custom revenue architecture",
          "Dedicated label support",
        ],
        cta: "Talk to WeJ",
        href: "mailto:sales@wej.world",
      },
    ],
  },
  builders: {
    title: "For AI Tool Builders & IP Partners",
    tiers: [
      {
        name: "Community",
        price: "Free",
        description: "For builders and partners exploring the AI music label ecosystem",
        features: [
          "Platform updates",
          "Community forums",
          "Partner intake",
          "Early feature feedback",
        ],
        cta: "Join Community",
        href: "https://platform.wej.world/developers",
      },
      {
        name: "Partner",
        price: "Custom",
        description: "For tools, studios, brands, and builders integrating with AI-native acts",
        features: [
          "Integration planning",
          "Pilot AI act collaboration",
          "Rights workflow design",
          "Co-marketing opportunities",
          "Licensing experiments",
          "Revenue sharing structures",
        ],
        highlighted: true,
        cta: "Propose Partnership",
        href: "mailto:partners@wej.world",
      },
    ],
  },
  faq: [
    {
      question: "What counts as an AI musician or AI band?",
      answer: "An AI musician or AI band is an artist identity where music, visuals, voice, characters, or performance are meaningfully created or extended with AI. We focus on acts with clear creative direction, rights documentation, and a plan for long-term audience value.",
    },
    {
      question: "Do human creators still matter?",
      answer: "Yes. WeJ World is built around the humans behind AI-native acts: producers, writers, visual artists, prompt designers, editors, model operators, builders, and communities. The goal is to make contribution and compensation visible.",
    },
    {
      question: "How does revenue sharing work?",
      answer: "Each project needs clear splits before release or licensing. The platform roadmap includes flexible royalty splits and provenance records so collaborators can understand how revenue is allocated.",
    },
    {
      question: "Can an existing artist or label launch an AI act with WeJ World?",
      answer: "Yes. Existing artists, labels, producers, and IP owners can use WeJ World to develop AI-native side projects, virtual bands, character-led catalogs, or participatory music worlds.",
    },
  ],
};
