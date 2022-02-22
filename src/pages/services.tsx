import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import useIsVisible from "hooks/useIsVisible"
import Head from "next/head"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { RoughNotation } from "react-rough-notation"

const Services = () => {
  const isVisible = useIsVisible()

  return (
    <Layout>
      <Head>
        <title>Services - Soqo</title>
      </Head>
      <Section position="relative" backgroundColor="#E5F1FC">
        <Text
          fontWeight="normal"
          fontSize={{ base: "4xl", lg: "5xl" }}
          lineHeight={{ base: "2.6rem", lg: "initial" }}
          maxWidth={{ base: "100%", md: "80%" }}
        >
          Créer une rencontre inédite et faire converger les enjeux sociaux et
          environnementaux entre
          <Text display="inline-block" color="#163A2C">
            <RoughNotation
              animationDuration={2000}
              color="#F9F5E9"
              show={isVisible}
              type="highlight"
            >
              entreprises et associations
            </RoughNotation>
          </Text>
        </Text>
      </Section>
      <Section backgroundColor="#f9f5e9">
        <Flex flexDirection={{ base: "column-reverse", lg: "row" }}>
          <Box mr={{ base: 0, lg: 10 }} mt={{ base: 6, lg: 0 }} flex="1">
            <Image alt="Parlons-nous" src="/assets/service.png" />
          </Box>
          <Box flex="1">
            <Text fontWeight="bold" fontSize="5xl" lineHeight="3rem" mb={6}>
              Pourquoi s’adresser à nous ?
            </Text>
            <VStack fontSize="2xl" spacing={6} alignItems="flex-start">
              <Flex>
                <Box mr={4}>
                  <Box fontSize="4xl" as={BsArrowRight} />
                </Box>
                Associations et entreprises évoluent dans des environnements &
                silos différents, avec un langage, des outils, des process et
                codes différents.
              </Flex>
              <Flex>
                <Box mr={4}>
                  <Box fontSize="4xl" as={BsArrowRight} />
                </Box>
                Les associations manquent de ressources, de clefs de coopération
              </Flex>
              <Flex>
                <Box mr={4}>
                  <Box fontSize="4xl" as={BsArrowRight} />
                </Box>
                Les entreprises manquent de temps, sont perdues face au nombre
                élevé d’associations et de causes à défendre, ne savent pas
                comment mesurer leur impact
              </Flex>
            </VStack>
          </Box>
        </Flex>
        <SimpleGrid mt={10} columns={{ base: 1, md: 2 }} spacing={6}>
          <Box>
            <Title mt="4rem">Nos services</Title>
            <VStack py={10} borderTop="4px" alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                Communication
              </Text>
              <List pl={6} listStyleType="" fontSize="xl">
                <ListItem>Principe d’une stratégie Be → Do → Say</ListItem>
                <ListItem> Création de contenus liés au projet</ListItem>
                <ListItem>Amplification (interne / B2B / B2C)</ListItem>
                <ListItem> Stratégie influence</ListItem>
              </List>
            </VStack>
            <VStack py={10} borderTop="4px" alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                Identification associations et mise en place de partenariat
              </Text>
              <List pl={6} listStyleType="" fontSize="xl">
                <ListItem>
                  Proposition d’associations cohérentes avec les objectifs
                </ListItem>
                <ListItem>
                  Stratégie de récits pour donner vie à la collaboration
                </ListItem>
                <ListItem>
                  Mise en place de la convention partenariat / mécénat
                </ListItem>
              </List>
            </VStack>
          </Box>
          <Box>
            <VStack py={10} borderTop="4px" alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                Définition d’objectifs RSE/ RSM
              </Text>
              <List pl={6} listStyleType="" fontSize="xl">
                <ListItem>Analyse de la stratégie</ListItem>
                <ListItem>
                  Cadrage des besoins (RSE, RSM, Mécénat, Sponsoring)
                </ListItem>
                <ListItem>Objectif de la collaboration</ListItem>
                <ListItem>Définition budgétaire</ListItem>
                <ListItem>Engagement des collaborateurs</ListItem>
              </List>
            </VStack>
            <VStack py={10} borderTop="4px" alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                Pilotage du partenariat / mécénat
              </Text>

              <List pl={6} listStyleType="" fontSize="xl">
                <ListItem>Outils d’analyse global (dashboard)</ListItem>
                <ListItem>Suivi du plan d’action</ListItem>
                <ListItem>{`Suivi budget Diagnostic & Efficacité`}</ListItem>
                <ListItem>Reporting mensuel</ListItem>
              </List>
            </VStack>
            <VStack py={10} borderTop="4px" alignItems="flex-start">
              <Text fontSize="3xl" fontWeight="bold">
                Mesure de l’impact social & environnementaux
              </Text>
              <List pl={6} listStyleType="" fontSize="xl">
                <ListItem>Résultats qualitatifs et quantitatifs</ListItem>
                <ListItem>{`Analyse reporting, KPI's, bénéficiaires, retombées presses)`}</ListItem>
                <ListItem>{`Elaboration de document stratégiques alimentant vos rapports RSE
              (diagnostics, définition du périmètre de l'étude d'impact,
              sélection de la méthode d'étude, social ROI)`}</ListItem>
              </List>
            </VStack>
          </Box>
        </SimpleGrid>
      </Section>
      <Footer />
    </Layout>
  )
}

Services.backgroundColor = "#E5F1FC"

export default Services
