import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack
      padding="10px"
      position="sticky"
      top="0"
      zIndex="2"
      bg="#121212"
      boxShadow="0 2px 4px 0 rgba(0,0,0,.2)"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
