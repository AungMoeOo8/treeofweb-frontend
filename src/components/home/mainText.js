import React from "react";
import {
  Box,
  Text,
  Heading,
  Container,
  Link,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function MainText() {
  const shadowColor = useColorModeValue("lavender", "blueviolet");
  return (
    <Flex mt="8rem"  flexDirection="column" alignItems="center">
      <Box
        fontSize={{ base: "3rem", md: "4rem", sm: "3.5rem" }}
        fontWeight="semibold"
        textAlign="center"
        textShadow="0 0 5px skyblue"
      >
        Let's Learn{" "}
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          display="inline"
          textShadow="0 0 100px red"
        >
          Coding
        </Text>{" "}
        And{" "}
        <Text
          bgGradient="linear(to-r, purple.500, green.400)"
          bgClip="text"
          display="inline"
          textShadow="0 0 100px blue"
        >
          Web
        </Text>{" "}
        Technology
      </Box>

      {/*-------------- Two Buttons --------------*/}
      <Flex
        mt="2rem"
        flexDirection={{
          base: "column",
          xl: "row",
          lg: "row",
          md: "row",
          sm: "row",
        }}
        width="100%"
        maxWidth="400px"
        justifyContent="space-between"
        gap="20px"
      >
        <Link
          to={"/tutorials"}
          as={RouterLink}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          minWidth="170px"
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2rem"
          color="white"
          fontWeight="medium"
          transition="ease 0.1s"
          _hover={{}}
          _focus={{}}
          _active={{ transform: "scale(1.02)" }}
        >
          Learn
        </Link>
        <Link
          to={"/contact"}
          as={RouterLink}
          //   border="solid 1px #9F7AEA"
          minWidth="170px"
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="2rem"
          fontWeight="medium"
          transition="ease 0.1s"
          boxShadow={`0px 0px 10px 1px ${shadowColor}`}
          _hover={{
            color: "white",
            border: "none",
            bgGradient: "linear(to-r, purple.500, green.400)",
          }}
          _focus={{}}
          _active={{ transform: "scale(1.02)" }}
        >
          Contact
        </Link>
      </Flex>
      {/*------------ Two Buttons End ------------*/}
    </Flex>
  );
}

export default MainText;
