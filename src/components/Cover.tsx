import { Box, Flex, Text } from "@chakra-ui/react"
import useIsVisible from "hooks/useIsVisible"
import Image from "next/image"
import React from "react"
import { RoughNotation } from "react-rough-notation"
import cover from "../../public/assets/cover.png"

const Cover = () => {
  const isVisible = useIsVisible()

  return (
    <Flex
      px={10}
      backgroundColor="#E5F1FC"
      flex="1"
      flexDirection={{ base: "column", md: "row" }}
      marginX="auto"
      maxWidth="container.xl"
      justifyContent="space-between"
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
        >
          Face aux defis actuels, nous sommes convaincus qu’il faut apporter des
          <Box fontWeight="bold" as="span" mx={2}>
            réponses collectives :
          </Box>{" "}
          associations et entreprises ont un rôle determinant{" "}
          <Text display="inline-block" color="#163A2C">
            <RoughNotation
              animationDuration={2000}
              color="#F9F5E9"
              show={isVisible}
              type="highlight"
            >
              à <b>jouer ensemble</b>.
            </RoughNotation>
          </Text>
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
