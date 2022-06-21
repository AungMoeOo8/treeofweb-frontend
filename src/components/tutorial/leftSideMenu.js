import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { NavLink, useParams } from "react-router-dom";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { toCapital, toSmall } from "../../ultillities";

const PagesComponent = () => {
  const { name } = useParams();
  const getTutorial = gql`
    query {
      getSingleTutorial(name: "${name}") {
        name
        pages {
          title
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getTutorial);
  if (data) {
    return (
      <Flex flexDirection="column">
        {data.getSingleTutorial.pages.map((item, index) => (
          <NavLink
            key={index}
            to={`/tutorials/${name}/${toSmall(item.title)}`}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "var(--chakra-colors-blue-300)",
                    fontWeight: "bold",
                    fontSize: "25px",
                    paddingLeft: "5px",
                    transition: "ease 0.2s",
                  }
                : { opacity: 0.6, fontWeight: "bold", transition: "ease 0.2s" }
            }
          >
            <Text my="5px" py="5px" px="20px" textAlign="start">{`${toCapital(
              item.title
            )}`}</Text>
          </NavLink>
        ))}
      </Flex>
    );
  }
};

const LeftSideMenu = React.forwardRef((props, ref) => {
  const { name } = useParams();
  return (
    <Box
      position={["fixed", "fixed", "sticky"]}
      // position="sticky"
      top="70px"
      alignSelf="flex-start"
      minW="300px"
      // h={["calc(100vh - 70px)", "calc(100vh - 70px)", "min-content"]}
      h="calc(100vh - 70px)"
      overflow="hidden"
      transform={[
        "translate(-300px, 0)",
        "translate(-300px, 0)",
        "translate(0, 0)",
      ]}
      backdropFilter="blur(15px)"
      boxShadow={["0 1px 1px gray", "0 1px 1px gray", "none"]}
      ref={ref}
    >
      <Box>
        <Heading as="h3" textAlign="center" fontSize="3xl" my="20px">
          {toCapital(name)}
        </Heading>
        <PagesComponent />
      </Box>
    </Box>
  );
});

export default LeftSideMenu;
