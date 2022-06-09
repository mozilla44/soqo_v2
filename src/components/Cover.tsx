import { Box, Flex } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import { Color } from "styles/theme"
import cover from "../../public/assets/hand.jpg"
import Button from "./Button"
import Marker from "./Marker"
import Stamp from "./Stamp"

const Cover = () => {
  return (
    <Flex
      overflow="hidden"
      position="relative"
      px={10}
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
          Nous sommes{" "}
          <Marker isBold color={Color.BEIGE}>
            un créateur de liens
          </Marker>{" "}
          <b>entre associations et entreprises</b> pour développer des projets
          concrets <b>à impact social et environnemental positif</b>.
        </Box>
        <Box mb={{ base: 12, md: 0 }}>
          <Button href="/adn" hoverColor="blue.500">
            découvrir notre adn
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
            src={cover}
            alt="Soqo"
            placeholder="blur"
            width="500px"
            height="750px"
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Cover
