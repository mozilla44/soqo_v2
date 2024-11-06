import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import Footer from "components/Footer_bak"
import Layout from "components/Layout"
import Section from "components/Section"
import Head from "next/head"
import Image from "next/image"
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
              <VStack alignItems="flex-start" fontSize="xl" spacing={4}>
                <Text lineHeight="3rem" fontSize="4xl">
                  <b>Ce site web est éco conçu </b>
                  <i>(réellement).</i>
                </Text>
                <Text>
                  Nous le savons, les sites internet ont des conséquences
                  écologiques graves : consommation d’énergie, émissions de gaz
                  à effet de serre, pollution de l’eau et des sols, et
                  épuisement des ressources naturelles notamment.
                </Text>
                <Text>
                  Ainsi chez Soqo* nous débutons un travail sur nos outils
                  numériques :
                </Text>
                <Text>
                  Le graphisme de notre site internet a été développé sur des
                  principes bas carbone et a été adapté pour alléger le poids
                  des photos. Nous agissons également en interne afin de limiter
                  leur nombre.
                </Text>
                <Text>
                  Pour les réseaux sociaux, nous avons décidé de n’utiliser
                  qu’un seul canal de communication pour vous tenir informé de
                  nos projets et actualités :
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
                <Text mb={4} fontStyle="italic">
                  Pour aller encore + loin nous avons confié la maintenance de{" "}
                  <Link textDecoration="underline" href="https://soqo.fr/">
                    soqo.fr
                  </Link>{" "}
                  à{" "}
                  <Link
                    textDecoration="underline"
                    isExternal
                    href="https://www.numerik-ea.fr/"
                  >
                    Numerikea
                  </Link>
                  , le pôle de développement web solidaire pour l’emploi des
                  travailleurs handicapés.
                </Text>
                <Box>
                  <Image
                    alt="Numerikea"
                    src="/assets/numerikea.png"
                    width="182px"
                    height="47px"
                    placeholder="blur"
                  />
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Section>
      </Box>
    </Layout>
  )
}

EcoConception.backgroundColor = Color.YELLOW

export default EcoConception
