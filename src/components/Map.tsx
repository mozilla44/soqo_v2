import React from "react";
import { ChakraProvider, Flex, Box, Text, Image } from "@chakra-ui/react";
import { Color } from "styles/theme";
import Stamp from "./Stamp";
import EmptyButton from "./EmptyButton";

export const Map = () => {
  return (
    <Flex
      maxHeight={{ md: "85vh" }}
      bg="#EFE5D4"
      w="100vw"
      h={{ base: "auto", md: "100vh" }}
      alignItems="center"
      justifyContent="space-between"
      p={{ base: "5", md: "0" }}
      direction={{ base: "column", md: "row" }}
      pt={{ base: "3rem", md: "0" }}
    >
      <Box
        w={{ base: "100%", md: "40%" }}
        textAlign="left"
        pl={{ base: 0, md: "5rem" }}
        mt={{ base: 4, md: "0" }}
        mb={{ base: 4, md: 0 }}
        ml={{ base: 0, md: "2rem" }}
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="400"
          fontFamily="Minion Pro"
          color={Color.KAKI}
          width={{ md: "88%" }}
          lineHeight="110%"
        >
          Nos projets n&apos;ont pas de frontières
        </Text>
        <Text
          fontSize={{ base: "lg", md: "3xl" }}
          fontFamily="Minion Pro"
          color={Color.KAKI}
          mt={4}
          width={{ md: "100%" }}
          lineHeight="110%"
        >
          Notre savoir-faire nous permet de vous accompagner en France comme à
          l&apos;international.
        </Text>
        <EmptyButton
          marginTop="3rem"
          href="/projets_evenements"
          color={Color.KAKI}
          borderColor={Color.KAKI}
          paddingX={"5rem"}
        >
          &nbsp;&nbsp;&nbsp;En savoir plus&nbsp;&nbsp;&nbsp;
        </EmptyButton>
      </Box>
      <Box w={{ base: "90%", md: "50%" }} mr={{ base: 0, md: "2rem" }}>
        <Image
          src="/assets/Map2.png"
          alt="World Map"
          boxSize="full"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default Map;
