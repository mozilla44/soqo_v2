import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
/* import Image from "next/image"; */
import React, { ReactNode } from "react";
import { Color } from "styles/theme";
import Marker from "./Marker";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

// Define the props interface
interface CoverProps {
  title: ReactNode;
  content: string;
  // Adjust the type based on your needs
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  btnColor: string;
  btnBackground: string;
}

const Cover: React.FC<CoverProps> = ({
  title,
  content,
  buttonText,
  buttonLink,
  imageSrc,
  btnBackground,
  btnColor,
}) => {
  return (
    <Flex
      overflow="hidden"
      position="relative"
      backgroundColor={Color.BEIGE}
      flex="1"
      flexDirection={{ base: "column", md: "row" }}
      marginX="auto"
      w={"100vw"}
      justifyContent="space-between"
      maxHeight="80vh"
      border={"1px solid black"}
    >
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
          marginLeft="15%"
        >
          <Text fontSize={"6xl"} lineHeight="120%">
            {title}
          </Text>
          <Text marginTop="1rem" fontSize={"3xl"} lineHeight="120%">
            {content}
          </Text>
          <Button
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translateY(-0.09rem)",
            }}
            fontSize="1.6rem"
            color={btnColor}
            backgroundColor={btnBackground}
            fontFamily="Minion Pro"
            marginTop={"2rem"}
            fontWeight="400"
            padding={"1.5rem"}
          >
            <Link _hover={{ textDecoration: "none" }} href={buttonLink}>
              {buttonText}
            </Link>
          </Button>
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        maxWidth="40%"
        height={"100%"}
      >
        <Box
          py={3}
          flex="1 1 auto"
          position="relative"
          margin="0"
          padding={0}
          height="80%"
        >
          <Image
            alt="Soqo"
            placeholder="blur"
            boxSize="100%"
            src={imageSrc}
            margin="0"
            padding={0}
            objectFit="cover"
            borderLeft={"1px solid black"}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Cover;
