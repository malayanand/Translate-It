import React, { useEffect, useState } from "react";
import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
// import axios from "axios";

function Projects(props) {
  const { projects } = props;
  if (!projects || projects.length === 0)
    return <p>Cannot find any projects, create a new project</p>;

  return (
    <Container
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      align="center"
      maxW="container.lg"
      mt={10}
      mb={10}
    >
      <SimpleGrid columns={[1, 1, 3]} spacing={10}>
        {projects.map((project) => {
          return (
            <RouteLink to={"/view/" + project.id}>
              <Box
                align="center"
                bg="#080e18"
                width="15rem"
                height="10rem"
                rounded={8}
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="space-evenly"
              >
                <Text fontSize="18px" fontWeight="bold" color="#ffb328">
                  {project.wiki_title}
                </Text>
                <Text fontSize="12px">Target language: {project.target}</Text>
              </Box>
            </RouteLink>
          );
        })}

        {/* 
        <Box bg="#ffb328" width="15rem" height="10rem" rounded={8}></Box>
        <Box bg="#ffb328" width="15rem" height="10rem" rounded={8}></Box>
        <Box bg="#ffb328" width="15rem" height="10rem" rounded={8}></Box> */}
      </SimpleGrid>
    </Container>
  );
}

export default Projects;
