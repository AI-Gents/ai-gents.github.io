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
import { Br } from "@saas-ui/react";
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

import { ButtonLink } from "components/button-link/button-link";

import { Highlights, HighlightsItem } from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Naxus - Offensive AI for code and infrastructure"
        description="Mythos-style autonomous security testing that finds zero-days in code and infrastructure with static and dynamic validation."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />
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
                Find zero-days in your code <Br />
                and infrastructure before they
              </FallInPlace>
            }
            title_typed={
              <FallInPlace>
                <Typer />
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Naxus delivers Mythos-style autonomous offensive security at a
                more accessible cost: static and dynamic AI agents hunt real
                vulnerabilities, validate exploitability, and surface zero-days
                with zero false-positive noise.
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
                    Launch a scan
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
              Naxus goes beyond passive scanning. It runs an offensive
              vulnerability lifecycle across code and infrastructure, from
              attack-surface discovery to exploitability validation and
              remediation guidance. The goal is simple: report only issues that
              matter, including previously unknown zero-days, with dynamic
              proof that keeps false positives out of your workflow.
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
        <HighlightsItem colSpan={[1, null, 2]} title="Offensive Attack Path Discovery ">
          <Text color="muted" fontSize="lg">
            See your systems the way an attacker would. Naxus maps attack paths
            across repositories, services, exposed assets, dependencies, and
            infrastructure logic, then pushes deeper to find the bugs that
            normal SAST and cloud posture tools miss. It is built for teams that
            want autonomous offensive testing in the Mythos category, but at a
            more economical price point.
          </Text>
        </HighlightsItem>

        <HighlightsItem colSpan={[1, null, 2]} title="Static + Dynamic Validation ">
          <Text color="muted" fontSize="lg">
            Naxus combines static code analysis with dynamic execution and
            agent-based verification. It understands relationships, behavior,
            reachable flows, and infrastructure context, then validates whether
            a finding can actually be exploited. More signal, more zero-days,
            and a zero false-positive standard before a vulnerability reaches
            your team.
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
          More offensive than a monitoring solution
        </Heading>
      }
      description={
        <>
          Naxus brings autonomous offensive AI into your development and
          infrastructure workflow, finding exploitable vulnerabilities and
          zero-days before attackers do.
        </>
      }
      align="left"
      columns={[1, 2]}
      iconSize={6}
      features={[
        {
          title: "Offensive scanning.",
          icon: FiTerminal,
          description:
            "Continuously hunts exploitable weaknesses across code, dependencies, services, and infrastructure instead of stopping at passive alerts.",
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
          title: "Zero-day discovery.",
          icon: FiTrendingUp,
          description:
            "Looks for previously unknown vulnerabilities with deep contextual reasoning, attack-path analysis, and exploitability checks.",
          variant: "inline",
        },
        {
          title: "Zero false-positive focus.",
          icon: FiUserCheck,
          description:
            "Uses static and dynamic validation to prove real impact before findings are reported, keeping your team focused on exploitable risk.",
          variant: "inline",
        },
        {
          title: "GitHub Integration.",
          icon: FiGithub,
          description:
            "Seamlessly integrates with GitHub so offensive security checks can run directly inside existing development workflows.",
          variant: "inline",
        },
        {
          title: "Autonomous agents.",
          icon: FiEye,
          description:
            "AI agents independently explore, verify, and prioritize vulnerabilities, bringing Mythos-style offensive automation to code and infrastructure.",
          variant: "inline",
        },

        {
          title: "Economical alternative.",
          icon: FiCode,
          description:
            "Delivers the kind of autonomous zero-day hunting associated with Mythos, packaged for teams that need a more affordable path to real findings.",
          variant: "inline",
        },
      ]}
    />
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Autonomous offensive AI for finding zero-days in code and infrastructure.",
        href: "https://dashboard.naxusai.com/auth/login",
        action: false,
      },
    },
  };
}
