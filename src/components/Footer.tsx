import React from "react"
import {
  Box,
  Flex,
  HStack,
  Text,
  VStack,
  Link,
  Input,
  IconButton,
} from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import { BsArrowUpRight } from "react-icons/bs"
import { GoMail } from "react-icons/go"
import { useInView } from "react-hook-inview"
import { Widget } from "@typeform/embed-react"
import { Color } from "styles/theme"
import Marker from "./Marker"
import useIsVisible from "hooks/useIsVisible"
import { CheckIcon } from "@chakra-ui/icons"
import Newsletter from "./Newsletter"

const Footer = ({
  disableAnimation = false,
}: {
  disableAnimation?: boolean
}) => {
  const [ref, isInView] = useInView()
  const isVisible = useIsVisible()

  return (
    <>
      <Box ref={ref} color="beige.500" backgroundColor="kaki.500">
        <Box p={6} maxWidth="container.xl" marginX="auto">
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
              <Marker
                isVisible={!disableAnimation && isInView && isVisible}
                color={Color.BLUE}
              >
                autour d’un café
              </Marker>
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
                <HStack>
                  <GoMail />
                  <Text>bonjour@soqo.fr</Text>
                </HStack>
              </CustomLink>

              <Newsletter />
            </VStack>
            <VStack mt={{ base: 4, md: 0 }} alignItems="flex-end">
              <CustomLink
                isExternal
                display="flex"
                fontSize={{ base: "2xl", md: "3xl" }}
                _hover={{ textDecoration: "underline" }}
                href="https://www.instagram.com/soqo.fr/"
              >
                Instagram{" "}
                <Box fontSize="3l" ml={3} mt={1} as={BsArrowUpRight} />
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
      <Box
        backgroundColor="kaki.500"
        id="parlons-nous"
        height="40rem"
        position="relative"
      >
        <Box
          zIndex={10}
          position="absolute"
          height="1rem"
          width="100%"
          backgroundColor="kaki.500"
        />
        <Widget
          hideFooter
          hideHeaders
          disableAutoFocus
          id="VmjX2qgM"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Box
        height="14rem"
        backgroundRepeat="repeat-x"
        backgroundImage="url(/assets/footer.svg)"
      >
        <Box pt={1} textAlign="right" maxWidth="container.xl" marginX="auto">
          <Link
            px={1}
            py={1}
            color="beige.500"
            backgroundColor="kaki.500"
            href="/mentions-legales"
          >
            Mention légales
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Footer
