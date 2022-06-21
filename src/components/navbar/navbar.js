import React, { useRef } from "react";
import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  useBreakpoint,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavLinks from "./navLinks";
import DarkModeButton from "./darkmodeButton";
import MenuButton from "./menuButton";

function Navbar() {
  // const responsiveLogo = useBreakpointValue({ base: "TOW", sm: "TreeOfWeb" });
  const breakpoint = useBreakpoint();
  const navlinksRef = useRef();
  const shadowColor = useColorModeValue("#E6E6FA", "#171923");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      px="10px"
      height="70px"
      position="sticky"
      top="0px"
      zIndex="1000"
      backdropFilter="blur(15px)"
      boxShadow={`0 0 5px 1px ${shadowColor}`}
    >
      <Flex height="100%" justifyContent="space-between" alignItems="center">
        <Heading as="h1" color="purple.400">
          <Link to={"/"}>TreeOfWeb</Link>
        </Heading>
        <NavLinks ref={navlinksRef} />
        {breakpoint !== "base" ? <DarkModeButton /> : null}
        {breakpoint !== "base" ? null : <MenuButton ref={navlinksRef} />}
      </Flex>
    </Box>
  );
}

export default Navbar;
