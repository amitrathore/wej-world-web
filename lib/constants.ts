// Site-wide content and messaging for wej.world

export const SITE = {
  name: "wej.world",
  tagline: "The AI-Powered Label for Musicians Who Own Their Future",
  description: "Fair distribution. AI innovation. Community ownership. Built on the MainCross fediverse for musicians and DJs at the intersection of music and AI.",
  url: "https://wej.world",
  platformUrl: "https://platform.wej.world",
};

export const HERO = {
  headline: "The AI-Powered Label for Musicians Who Own Their Future",
  subheadline: "Fair distribution. AI innovation. Community ownership. Built on the MainCross fediverse for musicians and DJs at the intersection of music and AI.",
  primaryCTA: {
    label: "Distribute Your Music",
    href: "https://platform.wej.world",
  },
  secondaryCTA: {
    label: "Explore AI Tools",
    href: "/features",
  },
};

export const FEATURES = [
  {
    icon: "🎵",
    title: "Publishing",
    description: "Release music and launch AI projects on the MainCross fediverse with full ownership and control.",
  },
  {
    icon: "🤝",
    title: "Participation",
    description: "Fan engagement meets community-driven project development. Your audience becomes your collaborators.",
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Artist-fan connection and creator collaboration tools built on federated, decentralized infrastructure.",
  },
  {
    icon: "💰",
    title: "Commerce",
    description: "Music sales, streaming revenue, and venture monetization - all with fair splits and transparency.",
  },
];

export const PROJECTS = {
  title: "AI Music Innovation in Action",
  subtitle: "See how creators are building the future of music on wej.world",
  items: [
    {
      name: "The Js",
      status: "live" as const,
      description: "A co-owned music ecosystem with AI avatars, on-chain economics, and collaborative IP development. The first wave is live with community, worldbuilding, and creator participation.",
      link: "https://www.jointhejs.com",
      features: ["AI Avatars", "On-chain Economics", "Collaborative IP"],
    },
    {
      name: "genAI Emotion Engine",
      status: "coming-soon" as const,
      description: "Early-stage AI tool exploring emotional intelligence in music creation. Helping artists infuse authentic emotion into AI-generated compositions.",
      features: ["Emotion Analysis", "AI Music Generation", "Creative Tools"],
    },
  ],
  cta: {
    label: "Submit Your AI Music Project",
    href: "https://platform.wej.world/submit",
  },
};

export const NAVIGATION = {
  main: [
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta: {
    label: "Join Platform",
    href: "https://platform.wej.world",
  },
};

export const FOOTER = {
  tagline: "Where Everyone's Jamming",
  sections: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "The Js", href: "https://www.jointhejs.com" },
        { label: "Platform", href: "https://platform.wej.world" },
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

export const FEATURES_PAGE = {
  hero: {
    title: "Everything You Need to Own Your Music Future",
    subtitle: "Whether you're distributing music or building AI tools, wej.world provides the infrastructure for ownership and innovation.",
  },
  forMusicians: {
    title: "For Musicians & Labels",
    subtitle: "Distribute your music with fair terms and full ownership",
    features: [
      {
        title: "Fair Revenue Splits",
        description: "Keep more of what you earn. No hidden fees, no exploitative contracts. Transparent revenue sharing built on blockchain.",
      },
      {
        title: "Federated Distribution",
        description: "Reach fans across the federated web, not just walled gardens. Your music lives on open protocols.",
      },
      {
        title: "Ownership & Control",
        description: "You own your master recordings, your brand, and your relationship with fans. Forever.",
      },
      {
        title: "Built-in Tools",
        description: "Engagement analytics, merchandising, ticketing, and monetization - all integrated into one platform.",
      },
    ],
  },
  forBuilders: {
    title: "For AI Builders",
    subtitle: "Incubate AI music projects with infrastructure and community support",
    features: [
      {
        title: "Incubation Platform",
        description: "Launch your AI music tools with infrastructure, mentorship, and community support from day one.",
      },
      {
        title: "Musician Feedback",
        description: "Access to real musicians for testing, feedback, and co-creation. Build tools that artists actually want.",
      },
      {
        title: "Fair Compensation Model",
        description: "Blockchain-based smart contracts ensure transparent revenue sharing between builders and artists.",
      },
      {
        title: "Open Innovation",
        description: "Build on MainCross fediverse. Your tools work across platforms, not locked into one ecosystem.",
      },
    ],
  },
};

export const ABOUT_PAGE = {
  mission: {
    title: "Empowering Musicians at the Intersection of Music and AI",
    content: "wej.world is more than a label - we're a platform for fair distribution, AI innovation, and community ownership. We believe the future of music belongs to creators, not platforms.",
  },
  ownershipWeb: {
    title: "The Ownership Web",
    content: "Built on the MainCross fediverse, we're part of a movement toward decentralized, creator-owned infrastructure. Your content, your audience, your revenue - all under your control.",
  },
  different: {
    title: "Why We're Different from Traditional Labels",
    points: [
      "You keep ownership of your masters",
      "Transparent, blockchain-based revenue splits",
      "No exploitative contracts or hidden fees",
      "Built on open protocols, not walled gardens",
      "AI innovation that empowers, not replaces, artists",
    ],
  },
  aiIncubation: {
    title: "AI Incubation Model",
    content: "We support AI music projects that enhance creativity and ensure fair compensation. From emotion engines to collaborative tools, we incubate technology that serves artists.",
  },
  projects: {
    title: "Success Stories",
    items: [
      {
        name: "The Js",
        description: "A co-owned music ecosystem proving that AI and artists can collaborate, not compete. With on-chain economics and community-driven IP development, The Js is redefining what a 'band' can be in the digital age.",
      },
    ],
  },
};

export const PRICING_PAGE = {
  hero: {
    title: "Choose Your Path",
    subtitle: "Whether you're an artist or an AI builder, we have a plan for you",
  },
  artists: {
    title: "For Artists & Labels",
    tiers: [
      {
        name: "Starter",
        price: "Free",
        description: "Perfect for emerging artists testing the waters",
        features: [
          "Up to 5 releases",
          "Basic distribution",
          "Community access",
          "Standard analytics",
          "80/20 revenue split",
        ],
        cta: "Start Free",
        href: "https://platform.wej.world/signup",
      },
      {
        name: "Pro",
        price: "$29/mo",
        description: "For serious musicians building their career",
        features: [
          "Unlimited releases",
          "Advanced analytics",
          "Priority distribution",
          "Marketing tools",
          "90/10 revenue split",
          "Priority support",
        ],
        highlighted: true,
        cta: "Go Pro",
        href: "https://platform.wej.world/signup?plan=pro",
      },
      {
        name: "Label",
        price: "$99/mo",
        description: "For labels managing multiple artists",
        features: [
          "Multi-artist roster",
          "White-label options",
          "Bulk upload tools",
          "Team collaboration",
          "Custom revenue splits",
          "Dedicated account manager",
        ],
        cta: "Contact Sales",
        href: "mailto:sales@wej.world",
      },
    ],
  },
  builders: {
    title: "For AI Builders",
    tiers: [
      {
        name: "Community",
        price: "Free",
        description: "Access tools and resources to start building",
        features: [
          "Access to developer docs",
          "Community forums",
          "API access (rate limited)",
          "Open-source tools",
        ],
        cta: "Join Community",
        href: "https://platform.wej.world/developers",
      },
      {
        name: "Incubator",
        price: "$499/mo",
        description: "Full incubation support for your AI music venture",
        features: [
          "Infrastructure credits",
          "Mentorship program",
          "Musician feedback network",
          "Marketing support",
          "Unlimited API access",
          "Revenue sharing opportunities",
        ],
        highlighted: true,
        cta: "Apply Now",
        href: "https://platform.wej.world/incubator",
      },
    ],
  },
  faq: [
    {
      question: "How does revenue sharing work?",
      answer: "We use blockchain-based smart contracts for transparent, automated revenue distribution. Artists can see exactly where every dollar goes, and payments happen instantly.",
    },
    {
      question: "What is the MainCross fediverse?",
      answer: "MainCross is a decentralized social network infrastructure (similar to Mastodon) that gives you ownership of your content and audience. Your music and brand aren't locked into one platform.",
    },
    {
      question: "Can I use wej.world if I'm already with a label?",
      answer: "It depends on your contract. We work with artists who have non-exclusive deals, but you'll need to check your existing agreements. Contact us for guidance.",
    },
    {
      question: "How do AI incubated projects work?",
      answer: "We provide infrastructure, mentorship, and access to musicians for feedback. Projects get marketing support and opportunities to integrate with our platform. Revenue is shared transparently through smart contracts.",
    },
  ],
};
