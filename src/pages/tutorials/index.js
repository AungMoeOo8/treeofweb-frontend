import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Center,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { toCapital, toSmall } from "../../ultillities/index";

const TypeWrapper = ({ children, name, bgColor }) => {
  return (
    <Box mb="30px">
      <Center w="100%" h="70px" bg={bgColor} color="white" borderRadius="5px">
        {name}
      </Center>
      {children}
    </Box>
  );
};

const TutorialsOfSametype = ({ type }) => {
  const getTutorials = gql`
    query {
      getSameTypeTutorials(type: "${type}") {
        name
        type
      }
    }
  `;

  const { loading, error, data } = useQuery(getTutorials);

  if (loading) {
    return (
      <Center>
        <Text>Loading...</Text>
      </Center>
    );
  }

  if (error) {
    return (
      <Center>
        <Text>Error...</Text>
      </Center>
    );
  }

  return (
    <Grid gridTemplateColumns="repeat(auto-fit, minmax(50%, 1fr))">
      {data.getSameTypeTutorials.map((item, index) => (
        <NavLink
          key={index}
          as={RouterLink}
          to={`${toSmall(item.name)}/introduction`}
        >
          <Text textAlign="center" p="10px">
            {toCapital(item.name)}
          </Text>
        </NavLink>
      ))}
    </Grid>
  );
};

function Tutorials() {
  return (
    <Box position="relative" top="70px">
      <Container
        maxW="container.xl"
        px="10px"
        display="flex"
        justifyContent="center"
      >
        <Flex
          justifyContent="center"
          width="1000px"
          my="5rem"
          gap="30px"
          flexDir={{ base: "column", md: "row" }}
        >
          {/*------------- Left -------------*/}
          <Box minW="100px" w="100%">
            {/*=============== Languages =============*/}
            <TypeWrapper name="Languages" bgColor="purple.500">
              <TutorialsOfSametype type="language" />
            </TypeWrapper>

            {/*============== Server Side ============*/}
            <TypeWrapper name="Server Side" bgColor="pink.500">
              <TutorialsOfSametype type="serverside" />
            </TypeWrapper>
          </Box>

          {/*-------------- Right -------------*/}
          <Box minW="100px" w="100%">
            {/*============= Frameworks ==============*/}
            <TypeWrapper name="Frameworks" bgColor="cyan.500">
              {/* <TutorialsOfSametype /> */}
            </TypeWrapper>

            {/*============= Others ==============*/}
            <TypeWrapper name="Others" bgColor="green.500">
              {/* <TutorialsOfSametype /> */}
            </TypeWrapper>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Tutorials;
