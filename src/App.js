import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Button,
  Container,
  useColorMode,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { topProjects, otherProjects } from "./projectData";
import ProjectSection from "./components/ProjectSection";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("blue.50", "gray.800");

  return (
    <ChakraProvider>
      <Box bg={bgColor} minH="100vh" py="8">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" mb="8">
            <Heading color={useColorModeValue("blue.600", "blue.300")}>
              My Pet Projects
            </Heading>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>

          <ProjectSection title="Main Projects" projects={topProjects} />

          <Divider
            my="8"
            borderColor={useColorModeValue("gray.300", "gray.600")}
          />

          <ProjectSection title="Other Projects" projects={otherProjects} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
