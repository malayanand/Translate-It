import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Button,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./logo";

const Navbar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      position="sticky"
      as="nav"
      width="100vw"
      bg={useColorModeValue("#1a202c")}
      css={{ backdropFilter: "blur(6px)" }}
      p={4}
    >
      <Container
        maxW="container.lg"
        align="center"
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
      >
        <Heading as="h1" size="md" letterSpacing={"tighter"}>
          <Logo />
        </Heading>
        <Link to="/create">
          <Button colorScheme="blue" size="sm">
            New Project
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Navbar;
