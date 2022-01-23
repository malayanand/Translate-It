import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  Select,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

const ProjectForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    wiki_title: "",
    target: "",
  });

  const handleChange = (e) => {
    if ([e.target.name] == "title") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/", {
        wiki_title: formData.title,
        target: formData.target,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      });
  };

  return (
    <Container
      maxW="container.sm"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      align="center"
      mt={10}
    >
      <Box p={2}>
        <Heading as="h2" mb={5}>
          <Text fontWeight="bold" fontSize="2rem">
            Create New Project
          </Text>
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={5} isRequired>
            <FormLabel>Wikipedia article name</FormLabel>
            <Input
              name="title"
              onChange={handleChange}
              mb={5}
              placeholder="Article title"
              size="md"
            />
          </FormControl>
          <FormControl mt={5} isRequired>
            <FormLabel>Target language</FormLabel>
            <Select
              name="target"
              onChange={handleChange}
              placeholder="Select target language"
            >
              <option value="Hindi">Hindi</option>
              <option value="Bengali">Bengali</option>
            </Select>
          </FormControl>

          <Button mt={5} type="submit" colorScheme="blue" variant="outline">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ProjectForm;
