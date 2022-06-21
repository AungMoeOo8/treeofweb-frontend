import React from "react";
import { Box } from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";

const MenuButton = React.forwardRef((props, ref) => {
  const toggleNavlinks = () => ref.current.classList.toggle("navlinkToggle");

  return (
    <Box onClick={toggleNavlinks} cursor="pointer">
      <HiMenuAlt3 size={"30px"} />
    </Box>
  );
});

export default MenuButton;
