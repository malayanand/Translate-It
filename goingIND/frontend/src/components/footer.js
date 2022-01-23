import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" p={2}>
      &copy; {new Date().getFullYear()} Designed and developed by Malay Anand.
    </Box>
  );
};

export default Footer;
