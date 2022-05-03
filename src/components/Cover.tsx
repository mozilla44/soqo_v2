import { Box, Flex, Text } from "@chakra-ui/react"
import useIsVisible from "hooks/useIsVisible"
import Image from "next/image"
import React from "react"
import { RoughNotation } from "react-rough-notation"
import cover from "../../public/assets/hand.jpg"
import Button from "./Button"
import Stamp from "./Stamp"

const Cover = () => {
  const isVisible = useIsVisible()

  return (
    <Flex
      position="relative"
      px={10}
      backgroundColor="blue.500"
      flex="1"
      flexDirection={{ base: "column", md: "row" }}
      marginX="auto"
      maxWidth="container.xl"
      justifyContent="space-between"
    >
      <Stamp display={{ base: "none", md: "block" }} top="5rem" right="-2rem" />
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
          Soqo* est{" "}
          <Text display="inline-block" color="kaki.500">
            <RoughNotation
              animationDuration={2000}
              color="#F9F5E9"
              show={isVisible}
              type="highlight"
            >
              <b>un créateur de liens</b>
            </RoughNotation>
          </Text>{" "}
          <strong>entre associations et entreprises</strong> pour développer des
          projets concrets{" "}
          <strong>à impact social et environnemental positif</strong>.
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
