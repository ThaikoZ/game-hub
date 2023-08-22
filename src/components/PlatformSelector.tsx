import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const setPlatform = useGameQueryStore((s) => s.setPlatform);

  const { data, error } = usePlatforms();
  //console.log(data);
  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatform(platform)}
            key={platform.id}
            fontWeight={
              selectedPlatform?.name === platform.name ? "bold" : "normal"
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
