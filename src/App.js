import React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  Heading,
  Text,
  Link,
  Flex,
  Divider,
} from "@chakra-ui/react";

// Відзначені проекти
const topProjects = [
  {
    title: "Serenity Suites (For Hotel Employees) 🏨",
    description:
      'Next.js "app" router, React ServerComponents, server actions,authentication with NextAuth',
    link_s: "https://github.com/Vitalii-chillbro/Serenity-Suites",
    link_d: "https://serenity-suites.netlify.app/",
  },
  {
    title: "Serenity Suites (For All guests) 🏩",
    description:
      "React Query, Supabase, authentication, Styled Components, dark mode, charts, React Hook Form",
    link_s: "https://github.com/Vitalii-chillbro/Booking-website",
    link_d: "https://booking-website-brown.vercel.app/",
  },
  {
    title: "Booklist App 📖",
    description: "ReduxJS Toolkit, React Router, Firebase, authentication",
    link_s: "https://github.com/Vitalii-chillbro/react-booklist-app",
    link_d: "https://react-booklist-with-firebase.web.app/",
  },
  {
    title: "Pizza App 🍕",
    description: "React Router data loading, ReduxJS Toolkit, Tailwind CSS",
    link_s: "https://github.com/Vitalii-chillbro/pizza_react_app",
    link_d: "https://pizza-app-reduxtoolkit.netlify.app/",
  },
];

const otherProjects = [
  {
    title: "Worldwise 🌍",
    description:
      "Context API, React Router, Leaflet JS, memo, useMemo, useCallback",
    link_s: "https://github.com/Vitalii-chillbro/worldwiseRC",
    link_d: "https://worldwise-rc.netlify.app/",
  },
  {
    title: "React Quiz exmpl1 📔",
    description: "React, useReducer",
    link_s: "https://github.com/Vitalii-chillbro/React-Quiz-hardcoded-",
    link_d: "https://react-quiz-rquestions.netlify.app/",
  },
  {
    title: "React Quiz exmpl2 📑",
    description: "React, Typescript, Context API, useReducer",
    link_s: "https://github.com/Vitalii-chillbro/react-quiz-ts-useReducer",
    link_d: "https://game-quiz-ts.netlify.app/",
  },
  {
    title: "My-MoviesApp 🎬",
    description: "useEffect, data fetching, custom hooks",
    link_s: "https://github.com/Vitalii-chillbro/my-movies-app",
    link_d: "https://mymovies-app-react.netlify.app/",
  },
  {
    title: "React-chat 💬",
    description: "React Router, data fetching & saving",
    link_s: "https://github.com/Vitalii-chillbro/react_chat",
    link_d: "https://react-chat-gh-test.netlify.app/",
  },
  {
    title: "Clothes-shop 🛍️",
    description: "Typescript, React-Redux, ReduxJS Toolkit",
    link_s: "https://github.com/Vitalii-chillbro/clothes-shop-r-ts-redux",
    link_d: "https://clothes-shop-r-ts-redux.netlify.app/",
  },
  {
    title: "Todo App ✅",
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
    display="flex"
    flexDirection="column"
    height="100%"
  >
    <Box flex="1">
      <Heading fontSize="xl" mb="4" color="blue.500">
        {title}
      </Heading>
      <Text mb="4" color="gray.700">
        {description}
      </Text>
    </Box>
    <Flex direction="column" align="start" mt="auto">
      <Link href={link_d} color="blue.600" isExternal mb="2">
        View Live Project
      </Link>
      <Link href={link_s} color="blue.600" isExternal>
        View Project Source Code
      </Link>
    </Flex>
  </Box>
);

function App() {
  return (
    <ChakraProvider>
      <Box p="8" bg="blue.50" minH="100vh">
        <Heading mb="8" color="blue.600" textAlign="center">
          Main Projects
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={6}
          mb="8"
        >
          {topProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>

        <Divider my="8" borderColor="gray.300" />

        <Heading mb="8" color="blue.600" textAlign="center">
          Other Projects
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
