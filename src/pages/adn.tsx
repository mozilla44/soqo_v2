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
import partnership from "../../public/assets/partenaires/partenariat.png"
import speakUs from "../../public/assets/parlons-nous.jpg"
import historyProject from "../../public/assets/cover.png"
import about from "../../public/assets/qui-sommes-nous.png"
import { RoughNotation } from "react-rough-notation"
import useIsVisible from "hooks/useIsVisible"

const ADN = () => {
  const isVisible = useIsVisible()

  return (
    <Layout>
      <Head>
        <title>ADN - Soqo</title>
      </Head>
      <Section backgroundColor="#E5F1FC">
        <Flex flexDirection={{ base: "column-reverse", lg: "row" }}>
          <Flex
            mr={10}
            pb={6}
            flexDirection="column"
            justifyContent="center"
            flex="1"
          >
            <Text fontSize="2xl">
              Entreprise à mission œuvrant aux frontières de la RSE, du mécénat
              et de la communication, Soqo est un{" "}
              <b>créateur de liens entre les associations et les entreprises</b>{" "}
              pour développer des{" "}
              <b>projets à impact solidaires et durables.</b>
            </Text>
          </Flex>
          <Box mb={{ base: 6, lg: 0 }} flex="1">
            <Image
              src={speakUs}
              width="701px"
              height="310px"
              alt="Parlons-nous"
              placeholder="blur"
            />
          </Box>
        </Flex>
      </Section>
      <Section backgroundColor="beige.500">
        <Title>Qui sommes nous ?</Title>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box mr={{ base: 0, lg: 10 }} flex="1">
            <Image
              src={about}
              width="611px"
              height="626px"
              alt="Qui sommes nous ?"
              placeholder="blur"
            />
          </Box>
          <Box mt={{ base: 6, lg: 0 }} fontSize="23px" flex="1">
            <VStack spacing={6}>
              <Text fontSize="lg">
                <b>Najma Souroque</b> et <b>Victor Coeur</b> ont fondé Soqo en
                novembre 2021. Au-delà du désir d’entreprendre, Najma et Victor
                se sont retrouvés dans le constat commun de la nécessité de
                faire communiquer le monde de l’entreprise et celui des
                associations pour créer de l’impact social.
              </Text>
              <Box>
                <Text fontWeight="bold" fontSize="4xl">
                  Najma
                </Text>
                <Text fontSize="lg">
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
                <Text fontSize="lg">
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
              <RoughNotation
                animationDuration={2000}
                color="#f9f5e9"
                show={isVisible}
                type="highlight"
              >
                transparence.
              </RoughNotation>
            </Text>
          </Title>
          <VStack fontSize="xl" flex="1" spacing={4}>
            <Text>
              Les collaborations innovantes que nous pilotons aident les
              entreprises à transformer leur modèle et leurs pratiques en menant
              des{" "}
              <b>
                actions à impact, engageantes pour leurs collaborateur.trice.s
                et influant positivement la société.
              </b>
            </Text>
            <Text>
              {`Notre engagement d’entreprise à mission de l'Économie Sociale
              Environnementale et Solidaire, inscrit dans nos statuts, se
              traduit en 4 axes clés : la poursuite d'une utilité sociale, la
              recherche d'un modèle économique viable, une gouvernance
              démocratique et une lucrativité limitée.`}
            </Text>
          </VStack>
        </Flex>
        <Flex
          alignItems={{ base: "initial", lg: "flex-end" }}
          mt={{ base: 10, lg: 0 }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box flex="1">
            <Title mb={4} fontSize="63px">
              ODD 17
            </Title>
            <Text maxWidth="28rem" fontSize="xl">
              {`L’objectif de développement durable n°17 (ODD) met à l’honneur
              l’importance d’une action collective et concertée comme levier
              incontournable pour réduire les fractures territoriales &
              problématiques existantes, souvent révélées par les associations
              et porteurs de projets. Cette action collective et concertée
              permet d’inventer les solutions de demain avec tous les acteurs
              d’un même territoire.`}
            </Text>
          </Box>
          <Flex
            mt={{ base: 10, lg: 0 }}
            alignItems="flex-end"
            flex="1"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Image
              width="300px"
              height="336px"
              src={partnership}
              alt="Partenariats"
              placeholder="blur"
            />
            <Box mt={6} textAlign="right">
              <Button
                href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/"
                isExternal
                hoverColor="beige.500"
              >
                en savoir plus
              </Button>
            </Box>
          </Flex>
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
            <Title mb={4} fontSize="4xl" lineHeight="3rem">
              {`Soqo, permet la concrétisation de l'engagement.`}
            </Title>
            <VStack>
              <Text fontSize="xl">
                {`Nous accompagnons les entreprises dans leur passage à l'action
                et la mise en œuvre concrète de projets à impact.`}
              </Text>
              <Text fontSize="xl">
                {`Nous permettons aux associations de bénéficier de clefs de
                coopération, de temps et de financement d'entreprises engagées
                pour leur cause.`}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Section>

      <Footer />
    </Layout>
  )
}

ADN.backgroundColor = "#E5F1FC"

export default ADN
