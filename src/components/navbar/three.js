import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Three() {
  return (
    <Flex justifyContent="space-between">
      <Box alignSelf="flex-start" position="sticky" top="60px">
        <Box height="50vh">one</Box>
      </Box>
      <Box height="150vh">two</Box>
      <Box alignSelf="flex-start" position="sticky" top="60px">
        <Box height="50vh">three</Box>
      </Box>
    </Flex>
  );
}

export default Three;
