import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

/**
 * Renders a list of icons corresponding to the given platforms.
 *
 * @param {Platform[]} platforms - An array of platforms to render.
 * @return {JSX.Element} A list of icons corresponding to the given platforms.
 */
const PlatformIconList = ({ platforms }: Props): JSX.Element => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={IconMap[platform.slug]}
          color='grey.500'
          key={platform.name}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
