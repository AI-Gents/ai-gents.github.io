import { Avatar, Text, HStack } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack>
      <Avatar size="sm" src="/static/images/logo.png" />
      <Text fontSize="3xl" fontWeight="bold">
        NAXUS
      </Text>
    </HStack>
  );
};
