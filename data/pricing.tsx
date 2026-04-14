import { HStack, Text } from "@chakra-ui/react";

const ownKeysPlans = [
  {
    id: "free",
    title: "Free",
    description: "Get started with your own API keys.",
    price: "Free",
    features: [
      { title: "5 security scans (total)" },
      { title: "Use your own provider API keys" },
      { title: "No Naxus API keys" },
      { title: "Access to Public Repos only" },
      { title: "ZIP uploads unavailable on Free" },
      { title: "No PR & commit monitoring" },
    ],
    action: {
      href: "https://dashboard.naxusai.com/auth/login",
    },
  },
  {
    id: "startup",
    title: "Startup",
    description: "Affordable scan capacity with your own API keys.",
    price: "19€/month",
    features: [
      { title: "10 scans per month" },
      { title: "Use your own provider API keys" },
      { title: "No Naxus API keys" },
      { title: "Monitor up to 10 repositories" },
      { title: "Public & Private Repos" },
      { title: "Repository Graph View" },
      { title: "No PR & commit monitoring" },
      { title: "Full context analysis" },
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
      { title: "Use your own provider API keys" },
      { title: "Naxus API keys available" },
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
    price: "259€/month",
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
    price: "799€/month",
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

const allConfiguredQualityPlans = [
  {
    id: "pro_full_quality",
    title: "Pro Full Quality",
    description: "Best models and configuration for maximum accuracy.",
    price: "999€/month",
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
    price: "3199€/month",
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

const payPerVulnPlan = [
  {
    id: "pay_per_vuln",
    title: "Pay Per Vuln",
    description: "Bring your own provider API keys, launch scans, and pay only for the findings you unlock.",
    price: "From 100€",
    isRecommended: true,
    features: [
      { title: "1 scan per 100€ deposited" },
      { title: "Use your own provider API keys" },
      { title: "No Naxus API keys" },
      { title: "View vulnerabilities table for free" },
      { title: "Pay per vulnerability detail unlocked" },
      { title: "Public & Private Repos" },
      { title: "No PR & commit monitoring" },
      { title: "Info/Low: 50€ · Medium: 150€" },
      { title: "High: 300€ · Critical: 500€" },
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
    { label: "All Configured Quality", plans: allConfiguredQualityPlans },
    { label: "Pay Per Vuln", plans: payPerVulnPlan },
    { label: "Enterprise", plans: enterprisePlan },
  ],
  // Flat list for backward compat
  plans: [...ownKeysPlans, ...allConfiguredPlans],
};
