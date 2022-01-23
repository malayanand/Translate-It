import React from "react";
import { Link as ReactRoute } from "react-router-dom";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
  return (
    <ReactRoute to="/">
      <a>
        <Box>
          <Text color="#ffb328" fontSize="lg" fontWeight="bold">
            Translating IND
          </Text>
        </Box>
      </a>
    </ReactRoute>
  );
};

export default Logo;
