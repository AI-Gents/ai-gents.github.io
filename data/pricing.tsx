import { HStack, Text } from "@chakra-ui/react";

const ownKeysPlans = [
  {
    id: "free",
    title: "Free",
    description: "Get started with your own API keys.",
    price: "Free",
    features: [
      { title: "5 security scans (total)" },
      { title: "Use your own API keys" },
      { title: "Monitor up to 5 repositories" },
      { title: "Access to Public Repos only" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
  {
    id: "pro",
    title: "Pro",
    description: "Full-featured scanning with your own keys.",
    price: "49€/month",
    isRecommended: true,
    features: [
      { title: "100 scans per month" },
      { title: "Use your own API keys" },
      { title: "Monitor up to 50 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "PR & commit monitoring" },
      { title: "Full context analysis" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
];

const allConfiguredPlans = [
  {
    id: "pro_full",
    title: "Pro Full",
    description: "Zero config — we provide the API keys.",
    price: "119€/month",
    features: [
      { title: "30 scans per month" },
      { title: "No API keys needed" },
      { title: "Zero configuration required" },
      { title: "Monitor up to 30 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "PR & commit monitoring" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
  {
    id: "pro_full_plus",
    title: "Pro Full+",
    description: "High-volume scanning, zero config.",
    price: "399€/month",
    isRecommended: true,
    features: [
      { title: "150 scans per month" },
      { title: "No API keys needed" },
      { title: "Zero configuration required" },
      { title: "Monitor up to 100 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "PR & commit monitoring" },
      { title: "Priority support" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
];

const qualityPlans = [
  {
    id: "pro_full_quality",
    title: "Pro Full Quality",
    description: "Best models and configuration for maximum accuracy.",
    price: "499€/month",
    features: [
      { title: "30 scans per month" },
      { title: "No API keys needed" },
      { title: "Best quality models & configuration" },
      { title: "Monitor up to 30 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "PR & commit monitoring" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
  {
    id: "pro_full_plus_quality",
    title: "Pro Full+ Quality",
    description: "Maximum volume with premium models.",
    price: "1599€/month",
    isRecommended: true,
    features: [
      { title: "150 scans per month" },
      { title: "No API keys needed" },
      { title: "Best quality models & configuration" },
      { title: "Monitor up to 100 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "PR & commit monitoring" },
      { title: "Priority support" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
];

const enterprisePlan = [
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Full-service security for large organizations.",
    price: "Contact us",
    features: [
      { title: "Every feature included" },
      { title: "Unlimited scans" },
      { title: "Unlimited repositories" },
      { title: "Dedicated infrastructure" },
      { title: "Dedicated pentester (optional)" },
      { title: "SLA guarantees" },
      { title: "Custom integrations & on-premise" },
    ],
    action: {
      href: "mailto:info@naxusai.com",
      label: "Contact Us",
    },
  },
];

export default {
  title: "Pricing for every stage",
  description:
    "From free scans with your own keys, to fully managed plans, to pay-per-vulnerability — pick what fits your workflow.",
  tabs: [
    { label: "Use Your Own Keys", plans: ownKeysPlans },
    { label: "All Configured", plans: allConfiguredPlans },
    { label: "Quality", plans: qualityPlans },
    { label: "Enterprise", plans: enterprisePlan },
  ],
  // Flat list for backward compat
  plans: [...ownKeysPlans, ...allConfiguredPlans],
};
