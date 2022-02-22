import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Button from "components/Button"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import Head from "next/head"
import React from "react"

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Parlons-nous - Soqo</title>
      </Head>
      <Section backgroundColor="#E5F1FC">
        <Flex flexDirection={{ base: "column-reverse", lg: "row" }}>
          <Flex
            mr={10}
            pb={6}
            flexDirection="column"
            justifyContent="flex-end"
            flex="1"
          >
            <Title mb={4} fontSize="5xl">
              Adn
            </Title>
            <Text fontSize="2xl">
              Entreprise à mission œuvrant aux frontières de la RSE, du mécénat
              et de la communication, Soqo est un créateur de liens entre les
              associations et les entreprises pour développer des projets à
              impact solidaires et durables.
            </Text>
          </Flex>
          <Box mb={{ base: 6, lg: 0 }} flex="1">
            <Image alt="Parlons-nous" src="/assets/parlons-nous.jpg" />
          </Box>
        </Flex>
      </Section>
      <Section color="kaki.500" backgroundColor="beige.500">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Title flex="1">
            Contribution, innovation sociale, transparence.
          </Title>
          <VStack fontSize="xl" flex="1" spacing={4}>
            <Text>
              Sont les valeurs que nous portons, Les collaborations innovantes
              que nous pilotons aident les entreprises à transformer leur modèle
              et leurs pratiques en menant des{" "}
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
              marginX={{ base: "auto", lg: "initial" }}
              mb={10}
              width="100%"
              maxWidth="410px"
              src="/assets/partenaires/partenariat.png"
              alt="dsq"
            />
            <Box textAlign="right">
              <Button hoverColor="#f9f5e9" fontSize="3xl" href="/">
                en savoir plus
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Section>
      <Section backgroundColor="#E5F1FC">
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box mr={{ base: 0, lg: 3 }} mb={{ base: 6, lg: 0 }} flex="1">
            <Image alt="Parlons-nous" src="/assets/histoire-projet.png" />
          </Box>
          <Box flex="1">
            <Title mb={4} fontSize="5xl">
              {`L'histoire du projet`}
            </Title>
            <VStack>
              <Text fontSize="xl">
                Soqo est née de notre expérience auprès des entreprises, et de
                notre engagement bénévole dans les associations. Un constat
                simple : ces 2 acteurs ne se parlent pas assez…
              </Text>
              <Text fontSize="xl">
                L’élément déclencheur a été le partenariat que nous avons mis en
                place entre la Team autremonde, équipe de football associative
                qui lutte contre l’exclusion sociale, et l’équipementier adidas.
                Une collaboration qui a permis à l’association Autremonde de
                prendre une dimension nouvelle, et à l’entreprise adidas d’enfin
                s’engager dans un sujet concret et social. Les deux parties nous
                ont clairement dit que sans nous ce partenariat n’aurait jamais
                vu le jour, qu’ils ne se seraient jamais “trouvé”. C’est à
                partir de ce moment qu’on a décidé d’aller plus loin !
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Section>
      <Section backgroundColor="#f9f5e9">
        <Title>Qui sommes nous ?</Title>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          <Box mr={10} flex="1">
            <Image src="/assets/qui-sommes-nous.png" alt="Qui sommes nous ?" />
            <Text fontSize="xl" mt={10}>
              Leurs personnalités et expériences respectives mises en commun
              forment un cadre de compétences optimal pour mener à bien
              l’accompagnement de ces deux mondes dans leurs relations
              partenariales, et créer de <b>l’impact social</b>.
            </Text>
          </Box>
          <Box fontSize="23px" flex="1">
            <VStack spacing={6}>
              <Text fontSize="xl">
                <b>Najma Souroque</b> et <b>Victor Coeur</b> ont fondé Soqo en
                novembre 2021. Au-delà du désir d’entreprendre, Najma et Victor
                se sont retrouvés dans le constat commun de la nécessité de
                faire communiquer le monde de l’entreprise et celui des
                associations pour créer de l’impact social.
              </Text>
              <Box>
                <Text fontWeight="bold" fontSize="5xl">
                  Najma
                </Text>
                <Text fontSize="xl">
                  {`Après une mission au Ministère de l’Ecologie pour la COP21,
                  Najma a travaillé 7 ans pour le festival We Love Green en tant
                  que responsable RSE, Contenus & Institutions. Diplômée d’un
                  MBA en ingénierie culturelle, elle a également reçu une
                  formation d’audit A Greener Festival afin de mesurer l’impact
                  des évènements. Le monde de l’ESS lui est familier tout autant
                  que le pilotage de projet et la RSE.`}
                </Text>
                <Box mt={6} textAlign="right">
                  <Button
                    href="https://fr.linkedin.com/in/naj-souroque-paris"
                    hoverColor="#f9f5e9"
                    fontSize="3xl"
                  >
                    Linkedin
                  </Button>
                </Box>
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="5xl">
                  Victor
                </Text>
                <Text fontSize="xl">
                  Diplômé de Kedge, Victor a travaillé 10 ans dans la
                  communication événementielle, pour de petites maisons comme de
                  très grandes marques. Il quitte en 2020 ses fonctions de
                  Directeur associé de l’agence Dcontract pour consacrer plus de
                  temps à l’équipe de football associative Team autremonde,
                  suivre une formation sur la philanthropie et le mécénat auprès
                  de l’ESSEC ainsi qu’un programme d’accompagnement chez
                  MakeSense for Entrepreneurs.
                  <Box mt={6} textAlign="right">
                    <Button
                      href="https://fr.linkedin.com/in/victorcoeur"
                      hoverColor="#f9f5e9"
                      fontSize="3xl"
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
      <Footer />
    </Layout>
  )
}

About.backgroundColor = "#E5F1FC"

export default About
