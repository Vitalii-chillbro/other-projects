import React from "react";
import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ProjectCard = ({ title, description, link_s, link_d }) => {
  const bgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const headingColor = useColorModeValue("blue.500", "blue.300");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      bg={bgColor}
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <VStack align="start" spacing={4} flex="1">
        <Heading fontSize="xl" color={headingColor}>
          {title}
        </Heading>
        <Text color={textColor}>{description}</Text>
      </VStack>
      <Flex direction="column" align="start" mt="4">
        <Link href={link_d} color={linkColor} isExternal mb="2">
          View Live Project <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href={link_s} color={linkColor} isExternal>
          View Project Source Code <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
