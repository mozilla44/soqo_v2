import React from "react"
import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import { BsArrowUpRight } from "react-icons/bs"
import { RoughNotation } from "react-rough-notation"
import { useInView } from "react-hook-inview"
import useIsVisible from "hooks/useIsVisible"

const Footer = ({
  disableAnimation = false,
}: {
  disableAnimation?: boolean
}) => {
  const [ref, isInView] = useInView()
  const isVisible = useIsVisible()

  return (
    <Box ref={ref} color="beige.500" backgroundColor="kaki.500">
      <Box p={10} maxWidth="container.xl" marginX="auto">
        <Box
          width={{ base: "100%", md: "70%" }}
          fontSize={{ base: "4xl", md: "5xl" }}
          lineHeight={{ base: "38px", md: "initial" }}
        >
          Pour lancer un projet, refaire le monde, ou tout simplement discuter
          <Text
            ml={2}
            display="inline-block"
            color={disableAnimation ? "beige.500" : "kaki.500"}
          >
            <RoughNotation
              color="#E5F1FC"
              show={!disableAnimation && isInView && isVisible}
              type="highlight"
            >
              autour d’un café
            </RoughNotation>
          </Text>
          .
        </Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          my="3rem"
        >
          <VStack alignItems="flex-start">
            <CustomLink
              fontSize={{ base: "2xl", md: "3xl" }}
              _hover={{ textDecoration: "underline" }}
              href="mailto:bonjour@soqo.fr"
            >
              bonjour@soqo.fr
            </CustomLink>
            <CustomLink
              isExternal
              fontSize={{ base: "2xl", md: "3xl" }}
              _hover={{ textDecoration: "underline" }}
              href="https://toyfot4mry1.typeform.com/to/VmjX2qgM"
            >
              Prendre rendez-vous
            </CustomLink>
          </VStack>
          <VStack mt={{ base: 4, md: 0 }} alignItems="flex-end">
            <CustomLink
              isExternal
              display="flex"
              fontSize={{ base: "2xl", md: "3xl" }}
              _hover={{ textDecoration: "underline" }}
              href="https://www.instagram.com/soqo.fr/"
            >
              Instagram <Box fontSize="3l" ml={3} mt={1} as={BsArrowUpRight} />
            </CustomLink>
            <CustomLink
              isExternal
              display="flex"
              fontSize={{ base: "2xl", md: "3xl" }}
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
