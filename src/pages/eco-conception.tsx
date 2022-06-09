import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Head from "next/head"
import React from "react"
import { BsArrowUpRight } from "react-icons/bs"
import { Color } from "styles/theme"

const EcoConception = () => {
  return (
    <Layout>
      <Head>
        <title>Eco Conception - Soqo</title>
      </Head>
      <Box
        backgroundPosition="bottom left"
        backgroundRepeat="no-repeat"
        backgroundImage="url(/assets/bg3.svg)"
      >
        <Section marginX="auto" maxWidth="container.xl">
          <Flex flexDirection={{ base: "column", md: "row" }}>
            <Box flex={4}></Box>
            <Box flex={5}>
              <Text mb={10} lineHeight="3rem" fontSize="4xl">
                <b>Ce site web est éco conçu </b>
                <i>(réellement).</i>
              </Text>
              <VStack alignItems="flex-start" fontSize="xl" spacing={4}>
                <Text>
                  La maintenance est réalisée par{" "}
                  <Link
                    textDecoration="underline"
                    href="https://simplon.co/"
                    isExternal
                  >
                    Simplon
                  </Link>{" "}
                  le réseau de fabriques numériques et inclusives qui donne sa
                  chance aux femmes, permet l’inclusion socio-professionnelle
                  des personnes étrangères et intègre les personnes en situation
                  de handicap.
                </Text>
                <Text>
                  Le graphisme du site a été adapté pour alléger le poids des
                  photos, et on va essayer de limiter leur nombre.
                </Text>
                <Text>
                  On a aussi pensé aux réseaux sociaux et (par simplicité aussi
                  ^^) on a décidé d’utiliser qu’un seul canal :
                </Text>
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
                <Text fontStyle="italic">
                  On sait aussi une chose c’est que le digital peut aussi
                  devenir une arme redoutable au service des causes que nous
                  défendons.
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Section>
      </Box>
      <Footer />
    </Layout>
  )
}

EcoConception.backgroundColor = Color.YELLOW

export default EcoConception
