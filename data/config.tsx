import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Naxus",
    description: "The EDR of your source code",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "https://docs.naxusai.com/privacy-policy",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      // {
      //   id: "faq",
      //   label: "FAQ",
      // },
      {
        label: "Docs",
        href: "https://docs.naxusai.com/",
      },
      {
        label: "Login",
        href: "https://dashboard.naxusai.com/auth/login",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: <>NAXUS © {new Date().getFullYear()} - All rights reserved</>,
    links: [
      {
        href: "mailto:info@naxusai.com",
        label: "Contact",
      },
      {
        href: "https://docs.naxusai.com/privacy-policy",
        label: "Privacy",
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
