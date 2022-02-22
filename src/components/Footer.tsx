import React from "react"
import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import { BsArrowUpRight } from "react-icons/bs"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-hook-inview"

const Footer = () => {
  const [ref, isVisible] = useInView()

  return (
    <Box ref={ref} color="#f9f5e9" backgroundColor="#163A2C">
      <Box p={10} maxWidth="container.xl" marginX="auto">
        <Box
          width={{ base: "100%", md: "70%" }}
          fontSize={{ base: "34px", md: "50px" }}
          lineHeight={{ base: "38px", md: "initial" }}
        >
          Pour lancer un projet, refaire le monde, ou tout simplement discuter
          <Text display="inline-block" color="#163A2C">
            <RoughNotation color="#E5F1FC" show={isVisible} type="highlight">
              autour d’un café
            </RoughNotation>
          </Text>
          .
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          my="4rem"
        >
          <VStack alignItems="flex-start">
            <CustomLink
              fontSize={{ base: "25px", md: "35px" }}
              _hover={{ textDecoration: "underline" }}
              href="mailto:bonjour@soqo.fr"
            >
              bonjour@soqo.fr
            </CustomLink>
            <CustomLink
              fontSize={{ base: "25px", md: "35px" }}
              _hover={{ textDecoration: "underline" }}
              href="/"
            >
              Prendre rendez-vous
            </CustomLink>
          </VStack>
          <VStack mt={{ base: 10, md: 0 }} alignItems="flex-end">
            <CustomLink
              isExternal
              display="flex"
              fontSize={{ base: "25px", md: "35px" }}
              _hover={{ textDecoration: "underline" }}
              href="https://www.instagram.com/soqo.fr/"
            >
              Instagram <Box fontSize="3l" ml={3} mt={1} as={BsArrowUpRight} />
            </CustomLink>
            <CustomLink
              isExternal
              display="flex"
              fontSize={{ base: "25px", md: "35px" }}
              _hover={{ textDecoration: "underline" }}
              href="https://fr.linkedin.com/company/soqo-fr"
            >
              Linkedin <Box fontSize="3l" ml={3} mt={1} as={BsArrowUpRight} />
            </CustomLink>
          </VStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer
