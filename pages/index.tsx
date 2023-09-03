import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  ButtonGroup,
  Icon,
  Heading,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { Typer } from "components/typer/typer";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import {
  FiArrowRight,
  FiCode,
  FiTerminal,
  FiGithub,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";

import faq from "data/faq";
import pricing from "data/pricing";

import { Highlights, HighlightsItem } from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Naxus - The EDR of your source code"
        description="Smart monitoring for your source code."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <PricingSection />

        {/* <FaqSection /> */}
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.2xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack width={"100%"} direction={{ base: "column", lg: "row" }}>
          <Hero
            id="home"
            justifyContent="flex-start"
            px="10"
            title={
              <FallInPlace>
                Find your vulnerabilities, <Br />
                before they
              </FallInPlace>
            }
            title_typed={
              <FallInPlace>
                <Typer />
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Naxus safeguards your code from vulnerabilities, so you can
                focus on building exceptional software. Don&apos;t let any
                vulnerability reach production!
              </FallInPlace>
            }
          >
            <Flex alignItems="center" justifyContent="center" py="12">
              <FallInPlace delay={0.8}>
                <ButtonGroup spacing={4} display={"flex"} alignItems="center">
                  <ButtonLink
                    size="lg"
                    href="https://dashboard.naxusai.com/auth/login"
                    variant="outline"
                    colorScheme="primary"
                    rightIcon={
                      <Icon
                        as={FiArrowRight}
                        sx={{
                          transitionProperty: "common",
                          transitionDuration: "normal",
                          ".chakra-button:hover &": {
                            transform: "translate(5px)",
                          },
                        }}
                      />
                    }
                  >
                    Join now!
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Flex>
          </Hero>

          <Flex
            display={{ base: "none", lg: "flex" }}
            justifyContent="flex-end"
          >
            <FallInPlace delay={1}>
              <Box height="100%">
                <Image
                  src="/static/screenshots/demo.png"
                  width={600}
                  height={450}
                  alt="Screenshot of a vulnerability"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  return (
    <div id="features">
      <Flex justifyContent="center" alignItems="center">
        <Container maxW="container.xl">
          <Text
            as="div"
            py="8"
            textStyle="subtitle"
            color="gray.700"
            _dark={{ color: "gray.200" }}
            textAlign="center"
          >
            What is Naxus?
          </Text>
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            Meet our team of AI-Gents
          </Text>
        </Container>
      </Flex>

      <Highlights>
        <HighlightsItem colSpan={[1, null, 2]} title="AI at the core ">
          <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
              We diligently oversee each modification in your code repository
              with real-time precision. AI-Gents is our AI-powered robust
              monitoring service that ensures that vulnerabilities and potential
              backdoors are detected in PRs and Commits. Stay informed and
              proactive, as we promptly alert you to every emerging potential
              vulnerability in your code.
            </Text>
          </VStack>
        </HighlightsItem>
        <Box p="0" m="auto">
          <Image
            src="/static/images/shield-bot.png"
            width={200}
            height={200}
            alt="Screenshot of a vulnerability"
            quality="100"
            priority
          />
        </Box>
        <Box p="0" m="auto">
          <Image
            src="/static/images/shield-cero.png"
            width={200}
            height={200}
            alt="Screenshot of a vulnerability"
            quality="100"
            priority
          />
        </Box>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="An EDR for your Source Code "
        >
          <Text color="muted" fontSize="lg">
            When you grab our organization&apos;s package, think of it as getting an
            extra set of eyes—actually, make that a whole team of eyes. Our
            cybersecurity crew will dive deep into every alert, giving it a good
            look-over. No more getting bogged down by those pesky false alarms.
            We&apos;ll clear out the noise so you can focus on making your code
            shine.
          </Text>
        </HighlightsItem>

        <HighlightsItem colSpan={[1, null, 2]} title="Expert AI-Human Synergy ">
          <Text color="muted" fontSize="lg">
            Initiate the process with a seasoned penetration tester meticulously
            examining your code, complemented by our advanced AI, to uncover
            existing vulnerabilities. Subsequently, as your code undergoes
            changes, AI-Gents will continually monitor it. Our human experts,
            familiar with the nuances of your code, will authenticate and assess
            each discovery.
          </Text>
        </HighlightsItem>
        <Box p="0" m="auto">
          <Image
            src="/static/images/shield-person.png"
            width={200}
            height={200}
            alt="Screenshot of a vulnerability"
            quality="100"
            priority
          />
        </Box>
      </Highlights>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          More than a monitoring solution
        </Heading>
      }
      description={
        <>
          Elevate your code security practices and streamline your development
          workflow to meet the demands of today&apos;s software development
          landscape.
        </>
      }
      align="left"
      columns={[1, 2]}
      iconSize={6}
      features={[
        {
          title: "Real-time.",
          icon: FiTerminal,
          description:
            "Instantly detects and reports security weaknesses as code is committed, providing immediate feedback to developers.",
          variant: "inline",
        },
        // {
        //   title: "Custom alerts.",
        //   icon: FiLock,
        //   description:
        //     "Tailor alerts to your team&apos;s specific needs, ensuring that you&apos;re only notified about the vulnerabilities that matter most.",
        //   variant: "inline",
        // },
        {
          title: "Historical data.",
          icon: FiTrendingUp,
          description:
            "Maintains a historical record of vulnerabilities, aiding in trend analysis and demonstrating security improvements over time.",
          variant: "inline",
        },
        {
          title: "User-friendly.",
          icon: FiUserPlus,
          description:
            "Features an intuitive, user-friendly interface designed to make vulnerability management accessible to all team members.",
          variant: "inline",
        },
        {
          title: "GitHub Integration.",
          icon: FiGithub,
          description:
            "Seamlessly integrates with GitHub to make it easy for teams to incorporate security checks into their existing development workflows.",
          variant: "inline",
        },
        {
          title: "Expert review.",
          icon: FiTrendingUp,
          description:
            "In the organization tier, human experts review code to ensure that high-risk vulnerabilities are thoroughly assessed, without bothering you with false positives.",
          variant: "inline",
        },

        {
          title: "Contextual Analysis Levels.",
          icon: FiCode,
          description:
            "Multiple levels of contextual analysis, allowing teams to customize the depth of code scrutiny according to their specific requirements.",
          variant: "inline",
        },
      ]}
    />
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      {/* <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text> */}
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Start monitoring for free!",
        href: "https://dashboard.naxusai.com/auth/login",
        action: false,
      },
    },
  };
}
