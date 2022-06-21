import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  useBreakpoint,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineX,
  HiMenuAlt3,
  HiSparkles,
  HiLightningBolt,
  HiLightBulb,
} from "react-icons/hi";
// import { toCapital } from "../../ultillities/index";
import DarkModeButton from "./darkmodeButton";

const NavLinks = React.forwardRef((props, ref) => {
  const breakpoint = useBreakpoint();
  const links = ["tutorials", "blog"];
  const shadowColor = useColorModeValue("#E6E6FA", "#171923");
  const bgColor = useColorModeValue("gray.100", "#171923");
  const closeNavLinks = () => ref.current.classList.remove("navlinkToggle");

  return (
    <Box
      width={["80%", "40%"]}
      height={["500px", "initial"]}
      position={["absolute", "relative"]}
      // top={["20vh", "inherit"]}
      top={["-500px", "inherit"]}
      left={["10%", "0px"]}
      backdropFilter="blur(8px)"
    >
      <Flex
        width={"100%"}
        height={"100%"}
        justifyContent="space-around"
        alignItems="center"
        display={["none", "flex"]}
        flexDirection={["column", "row"]}
        bg={[bgColor, "transparent"]}
        // bg="transparent"
        boxShadow={[`0 0 5px 1px ${shadowColor}`, "none"]}
        borderRadius="1rem"
        transform={["translate(0, 0)", "none !important"]}
        transition="ease 0.5s"
        ref={ref}
      >
        {/* {links.map((item, index) => (
        <NavLink to={`/${item}`} key={index}>
          <Flex alignItems="center" gap="5px">
            <Text>{toCapital(item)}</Text>
            <HiOutlineSparkles size="20px" />
          </Flex>
        </NavLink>
      ))} */}

        <NavLink
          onClick={closeNavLinks}
          to="/tutorials"
          style={({ isActive }) =>
            isActive ? { color: "var(--chakra-colors-red-300)" } : undefined
          }
        >
          <Flex
            alignItems="center"
            gap="5px"
            _hover={{ color: "var(--chakra-colors-red-300)" }}
          >
            <Text fontWeight="medium">Tutorials</Text>
            <HiSparkles size="20px" />
          </Flex>
        </NavLink>

        <NavLink
          onClick={closeNavLinks}
          to="/blog"
          style={({ isActive }) =>
            isActive ? { color: "var(--chakra-colors-blue-300)" } : undefined
          }
        >
          <Flex
            alignItems="center"
            gap="5px"
            _hover={{ color: "var(--chakra-colors-blue-300)" }}
          >
            <Text fontWeight="medium">Blog</Text>
            <HiLightningBolt size="20px" />
          </Flex>
        </NavLink>

        <NavLink to="/About" onClick={closeNavLinks}>
          <Flex
            alignItems="center"
            gap="5px"
            _hover={{ color: "var(--chakra-colors-purple-300)" }}
          >
            <Text fontWeight="medium">About</Text>
            <HiLightBulb size="20px" />
          </Flex>
        </NavLink>

        {breakpoint !== "base" ? null : <DarkModeButton />}

        {breakpoint !== "base" ? null : (
          <Icon
            as={HiOutlineX}
            w={10}
            h={10}
            boxShadow="0 0 10px 1px var(--chakra-colors-gray-400)"
            p="3px"
            onClick={closeNavLinks}
            borderRadius="100%"
            cursor="pointer"
          />
        )}
      </Flex>
    </Box>
  );
});

export default NavLinks;
