import React, { useState, useEffect } from "react";
import { Container, Heading, Box, Text, Input, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectView = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [sentences, setSentences] = useState([]);
  // const [ translations, setTranslations ] = useState([]);

  let dummy = {};
  // console.log(data);
  useEffect(async () => {
    const response = await axios.get(`http://localhost:8000/api/${id}/`);
    // console.log(response.data);
    // setData(response.data);
    dummy = response.data;
    setData(dummy);

    const response_sentence = await axios.get(
      "http://localhost:8000/api/sentence/view/" + "?project_id=" + id
    );
    // setData(data => [...data, response_sentence]);
    // console.log(response_sentence.data);

    setSentences(response_sentence.data);
  }, [setData]);

  const setChange = (e, index) => {
    const new_setnences = [...sentences];
    new_setnences[index].translated_sentence = e.target.value;
    setSentences(new_setnences);
    console.log(new_setnences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sentences.forEach(async (sentence) => {
      const senid = sentence["id"];
      const response = await axios.put(
        "http://localhost:8000/api/sentence/create/" + senid + "/",
        sentence
      );
      console.log(response.data);
    });
    // const response = await axios.put('http://localhost:8000/api/sentence/create/' + id, sentences);
    // console.log(response.data);
  };

  // console.log(data['wiki_title']);
  // console.log(data['target']);
  console.log(data && data.sentence);
  return (
    <Container
      mt={5}
      mb={5}
      maxW="container.lg"
      align="center"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      {data && (
        <Box
          align="left"
          name="page header"
          display="flex"
          flexDirection="column"
        >
          <Heading as="h2">
            <Text fontSize="1.5rem">Article : {data["wiki_title"]} </Text>
          </Heading>
          <Text fontSize="1.2rem">Target : {data["target"]}</Text>
        </Box>
      )}
      <Box
        mt={5}
        align="center"
        name="wrapper"
        display="flex"
        flexDirection="row"
      >
        <Box mr={2} align="left" name="original_sentences">
          {sentences &&
            sentences.map((i) => {
              return (
                <Text mb={10} key={i.id} fontWeight="normal" fontSize="1rem">
                  {i.original_sentence}
                </Text>
              );
            })}
        </Box>
        <Box align="center" name="translated_sentences">
          {sentences.map(({ id, new_sentence }, index) => {
            return (
              <Input
                mt={5}
                key={id}
                value={new_sentence}
                onChange={(e) => setChange(e, index)}
                placeholder="translate "
              />
            );
          })}
        </Box>
      </Box>
      <Button onClick={handleSubmit} colorScheme="orange">
        Submit Translations
      </Button>
    </Container>
  );
};

export default ProjectView;
