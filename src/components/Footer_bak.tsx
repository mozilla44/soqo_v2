import React from "react";
import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import Newsletter from "./Newsletter";
import { Color } from "styles/theme";

interface AltFooterProps {
  bgColor: string;
  color: string;
  logoSrc: string;
  logoBgcolor: string;
  dividerColor: string;
  newsletterProps: {
    inputBorderColor: string;
    inputColor: string;
    btnBgColor: string;
    btnBorderColor: string;
    placeholderColor: string;
  };
}

const Footer: React.FC<AltFooterProps> = ({
  bgColor,
  logoSrc,
  logoBgcolor,
  newsletterProps,
  color,
  dividerColor
}) => {
  return (
    <Box bg={bgColor} position="relative" color={Color.BEIGE}>
      <Box position="relative">
        <Flex align="center" justify="center" position="relative">
          <Divider borderColor={dividerColor} flex="1" />
          <Box
            position="relative"
            p={2}
            mx={4}
            bg={logoBgcolor}
            borderRadius="full"
            zIndex={1}
          >
            <Image src={logoSrc} alt="Logo" boxSize="6rem" objectFit="contain" />
          </Box>
          <Divider borderColor={dividerColor}  flex="1" />
        </Flex>
      </Box>

      <Flex
        direction={["column", null, "row"]}
        justify="space-between"
        align="center"
        mt={8}
        px={[4, null, "3rem"]}
        color={Color.BEIGE}
      >
        <VStack
          align="flex-start"
          spacing={4}
          mb={[8, null, 0]}
          width={["100%", null, "50%"]}
        >
          <Text fontWeight="bold" fontSize={"2xl"} color={color}>
            Dernier article de blog
          </Text>
          <Text fontSize={"xl"} color={color}>Lorem ipsum</Text>
          <Text fontSize="xl" color={color}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </VStack>

        <VStack align="flex-start" spacing={4} width={["100%", null, "30%"]}>
          <Text alignSelf="flex-start" fontSize={"xl"} color={color}>
            Recevoir notre Newsletter
          </Text>
          <Newsletter {...newsletterProps} />
          <HStack spacing={4}>
            <Link href="https://www.instagram.com/soqo.fr/">
              <Image alt="instagram" src="/assets/instagram_beige.png" />
            </Link>
            <Link href="https://fr.linkedin.com/company/soqo-fr">
              <Image alt="linkedin" src="/assets/linkedin_beige.png" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      <Divider borderColor={dividerColor} mt={8} />
      <Flex color={color}
        direction={["column", "row"]}
        align="center"
        justify="center"
        mt={4}
        pb={4}
        fontFamily={"Minion Pro"}
        textAlign="center"
      >
        <Link href="/" fontSize="sm" mr={[0, 4]} mb={[2, 0]}>
          Mentions légales
        </Link>
        <Link href="/" fontSize="sm">
          Politique de confidentialité
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
