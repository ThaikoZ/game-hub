import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    xbox: FaXbox,
    playstation: FaPlaystation,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintento: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY="1">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500">
          {platform.name}
        </Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
