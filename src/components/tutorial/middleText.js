import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { toCapital } from "../../ultillities";
import { FcReadingEbook } from "react-icons/fc";

function MiddleText() {
  const { title } = useParams();
  const iconDisplay = useBreakpointValue({ base: "Block", md: "none" });
  const [sideMenuRef] = useOutletContext();
  const getSinglePage = gql`
    query {
      getSinglePage(title: "${title}") {
        title
        body
      }
    }
  `;
  const { loading, error, data } = useQuery(getSinglePage);

  if (loading) {
    return (
      <Box h="calc(100vh - 70px)" w="100%">
        <Center h="100%">
          <Text>Loading...</Text>
        </Center>
      </Box>
    );
  }

  if (data) {
    return (
      <Container maxW="container.xl" px="10px">
        <Heading my="20px">{toCapital(title)}</Heading>
        <Text>{data.getSinglePage.body}</Text>
        <Text onClick={() => console.log(123)}>Hello</Text>

        <Icon
          position="fixed"
          bottom="40px"
          right="40px"
          w={9}
          h={9}
          bg="gray.400"
          borderRadius="5px"
          display={iconDisplay}
          as={FcReadingEbook}
          onClick={() => sideMenuRef.current.classList.toggle("sideMenuToggle")}
        />
      </Container>
    );
  }
}

export default MiddleText;
