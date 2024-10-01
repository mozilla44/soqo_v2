import React from "react"
import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import Button from "components/Button"
import Image from "next/image"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import Head from "next/head"

// Assets
import historyProject from "../../public/assets/cover.png"
import about from "../../public/assets/qui-sommes-nous.png"
import { Color } from "styles/theme"
import Marker from "components/Marker"

const ADN = () => {
  return (
    <Layout>
      <Head>
        <title>ADN - Soqo</title>
      </Head>
      <Section backgroundColor="blue.500">
        <Flex flexDirection={{ base: "column-reverse", lg: "row" }}>
          <Flex
            mr={10}
            pb={6}
            flexDirection="column"
            justifyContent="center"
            flex="1"
          >
            <Text
              fontSize={{ base: "30px", md: "3vw", xl: "40px" }}
              lineHeight="120%"
            >
              <Marker isBold color={Color.BEIGE}>
                Entreprise à mission
              </Marker>
              , Soqo* a été fondée en novembre 2021 par Najma Souroque et Victor
              Coeur, dans{" "}
              <b>
                le but de{" "}
                <Marker color={Color.BEIGE}>faciliter les relations</Marker>{" "}
                entre associations et entreprises.
              </b>
            </Text>
          </Flex>
          <Box mb={{ base: 6, lg: 0 }} flex="1">
            <Image
              src={""}
              width="701px"
              height="310px"
              alt="Parlons-nous"
              placeholder="blur"
            />
          </Box>
        </Flex>
      </Section>
      <Section backgroundColor="beige.500">
        <Title>Qui sommes-nous ?</Title>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box mr={{ base: 0, lg: 10 }} flex="1">
            <Image
              src={about}
              width="611px"
              height="626px"
              alt="Qui sommes-nous ?"
              placeholder="blur"
            />
          </Box>
          <Box mt={{ base: 6, lg: 0 }} fontSize="23px" flex="1">
            <VStack spacing={6}>
              <Box>
                <Text fontWeight="bold" fontSize="4xl">
                  Najma
                </Text>
                <Text fontSize="2xl">
                  {`Après une mission au Ministère de l’Ecologie pour la COP21,
                  Najma a travaillé 7 ans pour le festival We Love Green en tant
                  que responsable RSE, Contenus & Institutions. Diplômée d’un
                  MBA en ingénierie culturelle, elle a également reçu une
                  formation d’audit A Greener Festival afin de mesurer l’impact
                  des évènements. Le monde de l’ESS lui est familier tout autant
                  que le pilotage de projet et la RSE.`}
                </Text>
                <Box mt={4} textAlign="right">
                  <Button
                    isSmall
                    href="https://fr.linkedin.com/in/naj-souroque-paris"
                    hoverColor="beige.500"
                  >
                    Linkedin
                  </Button>
                </Box>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="4xl">
                  Victor
                </Text>
                <Text fontSize="2xl">
                  Diplômé de Kedge, Victor a travaillé 10 ans dans la
                  communication événementielle, pour de petites maisons comme de
                  très grandes marques. Il quitte en 2020 ses fonctions de
                  Directeur associé de l’agence Dcontract pour consacrer plus de
                  temps à l’équipe de football associative Team autremonde,
                  suivre une formation sur la philanthropie et le mécénat auprès
                  de l’ESSEC ainsi qu’un programme d’accompagnement chez
                  MakeSense for Entrepreneurs.
                  <Box mt={4} textAlign="right">
                    <Button
                      isSmall
                      href="https://fr.linkedin.com/in/victorcoeur"
                      hoverColor="beige.500"
                    >
                      Linkedin
                    </Button>
                  </Box>
                </Text>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Section>
      <Section color="kaki.500" backgroundColor="blue.500">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Title flex="1">
            Contribution, innovation sociale,
            <Text fontStyle="italic" display="inline-block" color="#163A2C">
              <Marker color={Color.BEIGE}>transparence.</Marker>
            </Text>
          </Title>
          <Text fontSize="2xl" flex="1">
            Notre engagement d’entreprise à mission de l’Économie Sociale
            Environnementale et Solidaire, inscrit dans nos statuts, se traduit
            en 4 axes clés : la poursuite d’une utilité sociale, la recherche
            d’un modèle économique viable, une gouvernance démocratique et une
            lucrativité limitée.
          </Text>
        </Flex>
      </Section>
      <Section backgroundColor="beige.500">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box mr={{ base: 0, lg: 3 }} mb={{ base: 6, lg: 0 }} flex="1">
            <Image
              src={historyProject}
              alt="Soqo"
              objectFit="cover"
              placeholder="blur"
              width="500px"
              height="600px"
            />
          </Box>
          <Flex flexDirection="column" justifyContent="center" flex="1">
            <Title mb={4}>
              Soqo*, partenaire des entreprises, au service des associations
            </Title>
            <VStack>
              <Text fontSize="2xl">
                Nous accompagnons les entreprises dans leur passage à l’action
                et la mise en œuvre concrète de projets à impact.
              </Text>
              <Text fontSize="2xl">
                Nous permettons aux associations de bénéficier de clefs de
                coopération, de temps et de financement d’entreprises engagées
                pour leur cause.
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Section>

      <Footer />
    </Layout>
  )
}

ADN.backgroundColor = "#E3F1FD"

export default ADN
