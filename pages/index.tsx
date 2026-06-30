import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  VStack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Link,
  SimpleGrid,
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
  FiMail,
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

        <ContactSection />
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
                  <ButtonLink
                    size="lg"
                    href="#contact"
                    colorScheme="primary"
                    leftIcon={<Icon as={FiMail} />}
                  >
                    Contact us
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

const ContactSection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Naxus contact request");
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:info@naxusai.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box id="contact" py={{ base: 20, lg: 28 }} bg="gray.900" color="white">
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }}>
          <Stack spacing="6" justifyContent="center">
            <Heading
              as="h2"
              lineHeight="short"
              fontSize={["2xl", null, "4xl"]}
            >
              Talk to Naxus
            </Heading>
            <Text color="gray.300" fontSize="xl">
              Send us your repository, infrastructure scope, or offensive
              security goals and we will help you launch a zero-day hunting
              workflow.
            </Text>
            <Text color="gray.400" fontSize="lg">
              Prefer direct email?{" "}
              <Link href="mailto:info@naxusai.com" color="primary.300">
                info@naxusai.com
              </Link>
            </Text>
          </Stack>

          <Box
            as="form"
            onSubmit={onSubmit}
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="md"
            p={{ base: 5, md: 8 }}
            bg="blackAlpha.300"
          >
            <Stack spacing="5">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Company name"
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>What do you want to test?</FormLabel>
                <Textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Codebase, infrastructure, exposed services, or a specific target scope."
                  minH="140px"
                  bg="whiteAlpha.100"
                  borderColor="whiteAlpha.300"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="primary"
                size="lg"
                rightIcon={<Icon as={FiArrowRight} />}
              >
                Send message
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
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
