import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import LeftSideMenu from "../../components/tutorial/leftSideMenu";
import RightSideMenu from "../../components/tutorial/rightSideMenu";

function TutorialPage() {
  // console.log(useParams());
  // console.log(useLocation());
  const sideMenuRef = useRef();
  return (
    <Box >
      <Flex gap="30px" >
        <LeftSideMenu ref={sideMenuRef} />
        <Outlet context={[sideMenuRef]} />
        <RightSideMenu />
      </Flex>
    </Box>
  );
}

export default TutorialPage;
