import { Container, Flex, FlexProps, Text, VStack } from "@chakra-ui/react";

interface HeroProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  title_typed?: string | React.ReactNode;
}

export const Hero = ({
  title,
  title_typed,
  description,
  children,
  ...rest
}: HeroProps) => {
  return (
    <Flex alignItems="flex-start" {...rest}>
      <Container maxWidth={"120ch"}>
        <VStack spacing={0}>
          <div>
            <Text
              as={"div"}
              fontSize={{ md: "6xl", base: "3xl" }}
              fontWeight="bold"
              textAlign="left"
            >
              {title}
            </Text>
            <Text
              as={"div"}
              fontSize={{ md: "6xl", base: "3xl" }}
              bgClip="text"
              bgGradient="linear(to-l, #466bdf, #2f3d8a)"
              fontWeight="bold"
              textAlign="left"
            >
              {title_typed}
            </Text>
          </div>
          <Container>
            <Text
              as="div"
              py="8"
              textStyle="subtitle"
              color="gray.700"
              _dark={{ color: "gray.200" }}
              maxWidth="45ch"
              textAlign="left"
            >
              {description}
            </Text>
          </Container>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};
