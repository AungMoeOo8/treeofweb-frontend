import React from "react";
import {
  Box,
  Heading,
  Flex,
  useColorMode,
  useBreakpointValue,
  useBreakpoint,
  Text,
} from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";

const ColorIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return colorMode === "dark" ? (
    <HiSun size={"20px"} />
  ) : (
    <HiMoon size={"20px"} />
  );
};

function DarkModeButton() {
  const breakpoint = useBreakpoint();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box onClick={toggleColorMode}>
      {breakpoint !== "base" ? (
        <Box
          bg=""
          borderRadius="8px"
          border="solid 2px"
          borderColor="gray.400"
          padding="5px"
          cursor="pointer"
        >
          <ColorIcon />
        </Box>
      ) : (
        <Flex alignItems="center" gap="5px" cursor="pointer">
          <Text fontWeight='medium'>DarkMode</Text>
          <ColorIcon />
        </Flex>
      )}
    </Box>
  );
}

export default DarkModeButton;
