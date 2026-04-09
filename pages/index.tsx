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
  FiEye,
  FiUserCheck,
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
            px={{ base: 0, lg: 10 }}
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
          {/* <Text
            as="div"
            py="8"
            textStyle="subtitle"
            color="gray.700"
            _dark={{ color: "gray.200" }}
            textAlign="center"
          >
            What is Naxus?
          </Text> */}
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            What is Naxus?
          </Text>
        </Container>
      </Flex>

      <Highlights>
        <HighlightsItem
          colSpan={[1, null, 2]}
          title="Automated Vulnerability Lifecycle "
        >
          <VStack alignItems="flex-start" spacing="8">
            <Text color="muted" fontSize="xl">
              We go beyond simple detection. Naxus automates the entire
              vulnerability lifecycle, from identification to resolution, with
              deep insight into exposed assets and proof-of-concept exploits.
              Our system minimizes false positives by validating real
              exploitability, while also guiding you with precise remediation
              suggestions. Stay secure effortlessly as every step of the process
              is handled with intelligence and precision.
            </Text>
          </VStack>
        </HighlightsItem>
        <Box display={{ base: "none", lg: "block" }} p="0" m="auto">
          <Image
            src="/static/images/shield-bot.png"
            width={200}
            height={200}
            alt="Screenshot of a vulnerability"
            quality="100"
            priority
          />
        </Box>
        <Box display={{ base: "none", lg: "block" }} p="0" m="auto">
          <Image
            src="/static/images/shield-cero.png"
            width={200}
            height={200}
            alt="Screenshot of a vulnerability"
            quality="100"
            priority
          />
        </Box>
        <HighlightsItem colSpan={[1, null, 2]} title="Attack Path Discovery ">
          <Text color="muted" fontSize="lg">
            See your code’s vulnerabilities the way an attacker would. Naxus
            maps attack paths across complex code flows and interdependent
            components, tracing weaknesses through the intricate web of your
            software. This full-spectrum visibility empowers your team to make
            proactive, data-driven security decisions before issues become
            breaches.
          </Text>
        </HighlightsItem>

        <HighlightsItem colSpan={[1, null, 2]} title="Context-Aware Detection ">
          <Text color="muted" fontSize="lg">
            Not all vulnerabilities are equal. Naxus performs deep contextual
            analysis of your codebase (understanding relationships, behavior,
            and intent) to detect sophisticated issues that span multiple files
            or layers. By reducing false positives and surfacing what truly
            matters, we make vulnerability detection smarter, faster, and far
            more effective.
          </Text>
        </HighlightsItem>
        <Box display={{ base: "none", lg: "block" }} p="0" m="auto">
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
          icon: FiUserCheck,
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
          title: "Agent-ready.",
          icon: FiEye,
          description:
            "Autonomous AI agents independently verify detected vulnerabilities, validating exploitability and prioritizing real risks with precision, so your team stays focused without the noise of false positives.",
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
