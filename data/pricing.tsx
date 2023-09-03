import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description: null,
  plans: [
    {
      id: "free",
      title: "Free",
      description: "Basic monitoring, perfect to get started.",
      price: "Free",
      features: [
        {
          title: "Automated PR analysis",
        },
        {
          title: "Access to Public Repositories",
        },
        {
          title: "Basic analysis without context",
        },
        {
          title: "Monitor up to 3 repositories",
        },
        {
          title: "500 lines of code per month",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },
    {
      id: "startup",
      title: "Startup",
      description: "Flexible monitoring license for growing teams.",
      price: "29.99€/mo",
      isRecommended: true,
      features: [
        {
          title: "Automated PR & commit analysis",
        },
        {
          title: "Access to Public & Private Repos",
        },
        {
          title: "In-depth analysis with basic context",
        },
        {
          title: "Monitor up to 10 repositories",
        },
        {
          title: "10,000 lines of code per month",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },
    {
      id: "organization",
      title: "Organization",
      description: "Our most advanced monitoring solution.",
      price: (
        <HStack>
          {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text> */}
          <Text></Text>
        </HStack>
      ),
      features: [
        {
          title: "Automated PR & commit analysis",
        },
        {
          title: "Access to Public & Private Repos",
        },
        {
          title: "Advanced analysis with full context",
        },
        {
          title: "Custom Repositories Limit",
        },
        {
          title: "Custom lines of code per month",
        },
        {
          title: "Initial comprehensive code analysis",
        },
        {
          title: "Human monitoring and support",
        },
        null,
      ],
      action: {
        label: "Contact us",
        href: "mailto:info@naxusai.com",
      },
    },
  ],
};
