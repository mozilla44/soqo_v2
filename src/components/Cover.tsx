import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { Color } from "styles/theme";
import Button from "./Button";
import Marker from "./Marker";
import Stamp from "./Stamp";
import { Text } from "@chakra-ui/react";

// Define the props interface
interface CoverProps {
  title: string;
  content: string;
  imageSrc: StaticImageData; // Adjust the type based on your needs
  buttonText: string;
  buttonLink: string;
}

const Cover: React.FC<CoverProps> = ({
  title,
  content,
  imageSrc,
  buttonText,
  buttonLink,
}) => {
  return (
    <Flex
      overflow="hidden"
      position="relative"
      px={{ base: 4, md: 10 }}
      backgroundColor="blue.500"
      flex="1"
      flexDirection={{ base: "column", md: "row" }}
      marginX="auto"
      maxWidth="container.xl"
      justifyContent="space-between"
    >
      <Stamp display={{ base: "none", md: "block" }} top="5rem" right="-1rem" />
      <Flex
        justifyContent="center"
        flexDirection="column"
        whiteSpace="pre-wrap"
        width={{ base: "100%", md: "60%" }}
        mr={4}
      >
        <Box
          maxWidth="40rem"
          display="block"
          fontSize={{ base: "30px", md: "3vw", xl: "40px" }}
          lineHeight="120%"
          mb={10}
        >
          <Text fontSize={"5xl"} lineHeight="120%">{title}</Text>
          <Text  marginTop="1rem"fontSize={"2xl"} lineHeight="120%">{content}</Text>
        </Box>
        <Box mb={{ base: 12, md: 0 }}>
          <Button fontSize="1.6rem" href={buttonLink} hoverColor="blue.500">
            {buttonText}
          </Button>
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        width="40%"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box py={3} flex="1 1 auto" position="relative">
          <Image
            src={imageSrc}
            alt="Soqo"
            placeholder="blur"
            width="500px"
            height="750px"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Cover;
