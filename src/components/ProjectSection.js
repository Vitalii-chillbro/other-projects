import React from "react";
import { Box, Heading, Grid, useColorModeValue } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const ProjectSection = ({ title, projects }) => (
  <Box mb="12">
    <Heading
      mb="8"
      color={useColorModeValue("blue.600", "blue.300")}
      textAlign="center"
      size="xl"
    >
      {title}
    </Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
  </Box>
);

export default ProjectSection;
