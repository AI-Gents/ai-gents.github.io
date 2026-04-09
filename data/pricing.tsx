import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description:
    "From free scans with your own keys, to fully managed plans, to pay-per-vulnerability — pick what fits your workflow.",
  plans: [
    {
      id: "free",
      title: "Free",
      description: "Get started with your own API keys.",
      price: "Free",
      features: [
        {
          title: "5 security scans (total)",
        },
        {
          title: "Use your own API keys",
        },
        {
          title: "Monitor up to 5 repositories",
        },
        {
          title: "Access to Public Repos only",
        },
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
        {
          title: "100 scans per month",
        },
        {
          title: "Use your own API keys",
        },
        {
          title: "Monitor up to 50 repositories",
        },
        {
          title: "Public & Private Repos",
        },
        {
          title: "Repository Graph View",
        },
        {
          title: "PR & commit monitoring",
        },
        {
          title: "Full context analysis",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },
    {
      id: "pro_full",
      title: "Pro Full",
      description: "Zero config — we provide the API keys.",
      price: "119€/month",
      features: [
        {
          title: "30 scans per month",
        },
        {
          title: "No API keys needed",
        },
        {
          title: "Zero configuration required",
        },
        {
          title: "Monitor up to 30 repositories",
        },
        {
          title: "Public & Private Repos",
        },
        {
          title: "Repository Graph View",
        },
        {
          title: "PR & commit monitoring",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },
  ],
};
