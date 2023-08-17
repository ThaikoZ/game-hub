import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark mode" : "Light mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
