import React from "react";
import {
  Box,
  Text,
  Heading,
  Container,
  Link,
  Button,
  useColorModeValue,
  Image,
  Icon,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";
import onlineLearning from "../../assets/images/online_learning.svg";
import myanmarContent from "../../assets/images/myanmar_content.svg";
import donate from "../../assets/images/donate.svg";

function Services() {
  return (
    <Flex my="6rem" flexDir="column">
      <Flex alignItems="center" gap="10px">
        <Box w="100%" h="1px" borderBottom="solid 1px gray" />
        <Icon my="2rem" as={HiCode} w="40px" h="40px" color="purple.400" />
        <Box w="100%" h="1px" borderBottom="solid 1px gray" />
      </Flex>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="20px"
        alignSelf="center"
        maxW={"900px"}
      >
        <Flex p="20px" flexDir="column" alignItems="center">
          <Image
            src={onlineLearning}
            width="200px"
            h="150px"
            transition="ease 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
          <Text mt="20px" fontWeight="semibold">
            Learn Online
          </Text>
          <Text textAlign="center" fontWeight="thin" fontSize="0.9rem">
            Even on your phone
          </Text>
        </Flex>

        <Flex p="20px" flexDir="column" alignItems="center">
          <Image
            src={myanmarContent}
            width="250px"
            h="170px"
            transition="ease 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
          <Text mt="20px" fontWeight="semibold">
            Myanmar Contents
          </Text>
          <Text textAlign="center" fontWeight="thin" fontSize="0.9rem">
            Every tutorial is written in Myanmar
          </Text>
        </Flex>

        <Flex p="20px" flexDir="column" alignItems="center">
          <Image
            src={donate}
            width="200px"
            h="150px"
            transition="ease 0.3s"
            _hover={{ transform: "scale(1.1)" }}
          />
          <Text mt="20px" fontWeight="semibold">
            Donate
          </Text>
          <Text textAlign="center" fontWeight="thin" fontSize="0.9rem">
            We work with donation
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
}

export default Services;
