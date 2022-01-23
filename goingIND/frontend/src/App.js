import { 
  Container, 
  Heading, 
  Text 
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import LoaderComponent from "./components/loader";
import Projects from  "./components/projects";

function App() {
  const Loader = LoaderComponent(Projects);
  const [appState, setAppState] = useState({
    loading: false,
    projects: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiURL = 'http://localhost:8000/api';
  
    axios.get(apiURL).then((response) => {
      const allProjects = response.data;
      console.log(response.data)
      setAppState({ loading: false, projects: allProjects });
    });
  }, [setAppState]);

  return (
    <Container mt={5} maxW="container.md" align="center" justifyContent="center">
      <Heading as="h1">
        <Text mb={5}>Projects</Text>
      </Heading>
      <Loader isLoading={ appState.loading } projects={ appState.projects } />
    </Container>
  );
}

export default App;
