import React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";

const projects = [
  {
    title: "Worldwise 🌍",
    description:
      "Context API, React Router, Leaflet JS, memo, useMemo, useCallback",
    link_s: "https://github.com/Vitalii-chillbro/worldwiseRC",
    link_d: "https://worldwise-rc.netlify.app/",
  },
  {
    title: "React Quiz exmpl1",
    description: "React, useReducer",
    link_s: "https://github.com/Vitalii-chillbro/React-Quiz-hardcoded-",
    link_d: "https://react-quiz-rquestions.netlify.app/",
  },
  {
    title: "React Quiz exmpl2",
    description: "React, Typescript, Context API, useReducer",
    link_s: "https://github.com/Vitalii-chillbro/react-quiz-ts-useReducer",
    link_d: "https://game-quiz-ts.netlify.app/",
  },
  {
    title: "My-MoviesApp",
    description: "useEffect, data fetching, custom hooks",
    link_s: "https://github.com/Vitalii-chillbro/my-movies-app",
    link_d: "https://mymovies-app-react.netlify.app/",
  },
  {
    title: "React-chat",
    description: "React Router, data fetching & saving",
    link_s: "https://github.com/Vitalii-chillbro/react_chat",
    link_d: "https://react-chat-gh-test.netlify.app/",
  },
  {
    title: "Clothes-shop",
    description: "Typescript, React-Redux, ReduxJS Toolkit",
    link_s: "https://github.com/Vitalii-chillbro/clothes-shop-r-ts-redux",
    link_d: "https://clothes-shop-r-ts-redux.netlify.app/",
  },
  {
    title: "Todo App",
    description: "React, Typescript, Context API, useReducer",
    link_s: "https://github.com/Vitalii-chillbro/To-do-AppReactContext",
    link_d: "https://to-do-app-reactcontext.netlify.app/",
  },
];

const ProjectCard = ({ title, description, link_s, link_d }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p="6"
    bg="white"
    boxShadow="lg"
    transition="transform 0.2s"
    _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
  >
    <Heading fontSize="xl" mb="4" color="blue.500">
      {title}
    </Heading>
    <Text mb="4" color="gray.700">
      {description}
    </Text>
    <VStack align="start" spacing={2}>
      <Link href={link_d} color="blue.600" isExternal>
        View Live Project
      </Link>
      <Link href={link_s} color="blue.600" isExternal>
        View Project Source Code
      </Link>
    </VStack>
  </Box>
);

function App() {
  return (
    <ChakraProvider>
      <Box p="8" bg="blue.50" minH="100vh">
        <Heading mb="8" color="blue.600" textAlign="center">
          My Other Projects
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
