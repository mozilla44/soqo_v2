import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { IProject } from "types/generated/contentful"
import Button from "components/Button"
import Cover from "components/Cover"
import Footer from "components/Footer"
import { HEADER_HEIGHT } from "components/Header"
import Layout from "components/Layout"
import ProjectSlider from "components/ProjectSlider"
import Section from "components/Section"
import Title from "components/Title"
import client from "core/client"
import Head from "next/head"
import { use100vh } from "react-div-100vh"

const Home = ({ projects }: { projects: IProject[] }) => {
  const height = use100vh()

  return (
    <Layout>
      <Head>
        <title>Accueil - Soqo</title>
      </Head>
      <Flex
        flexDirection="column"
        backgroundColor="blue.500"
        height={{ base: "auto", xl: `calc(${height}px - ${HEADER_HEIGHT})` }}
      >
        <Cover />
        {false && (
          <Box backgroundColor="yellow.500">
            <Flex
              marginX="auto"
              maxWidth="container.xl"
              px={4}
              justifyContent="flex-end"
              alignItems="center"
              fontSize="34px"
              height="60px"
            >
              3757 802 806 173
            </Flex>
          </Box>
        )}
      </Flex>
      <Box as="section" color="kaki.500" backgroundColor="beige.500">
        <Box p={10} pb={0} maxWidth="container.xl" marginX="auto">
          <Title>Projets</Title>
        </Box>
        <Box
          maxWidth={{ xl: "container.xl" }}
          px={{ base: 4, md: 10 }}
          marginX="auto"
        >
          <ProjectSlider projects={projects} />
        </Box>
        <Box p={10} pt={0} maxWidth="container.xl" marginX="auto">
          <Button href="/projets" hoverColor="#f9f5e9">
            voir tout
          </Button>
        </Box>
      </Box>
      <Section color="beige.500" backgroundColor="kaki.500">
        <Title color="beige.500">Nos services</Title>
        <VStack>
          {[
            "Analyse des besoins et définition des objectifs",
            "Identification de projets associatifs & mise en place du partenariat",
            "Accompagnement & pilotage du partenariat",
            "Mesure d’impact",
            "No bullshit communication",
          ].map((text) => (
            <Box
              key={text}
              py={4}
              width="100%"
              borderBottom="3px solid"
              borderBottomColor="beige.500"
              fontSize={{ base: "28px", md: "48px" }}
            >
              {text}
            </Box>
          ))}
        </VStack>
        <Button mt={10} href="/services" hoverColor="kaki.500">
          en savoir plus
        </Button>
      </Section>
      <Section
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundImage="url(/assets/bg2.svg)"
        position="relative"
        color="kaki.500"
        backgroundColor="blue.500"
      >
        <Title display={{ base: "block", md: "none" }} color="kaki.500">
          Partenariats
        </Title>
        <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box flex={{ base: 1, md: 2 }}>
            <Title display={{ base: "none", md: "block" }} color="kaki.500">
              Partenariats
            </Title>
            <Text
              mt={{ base: 6, md: 0 }}
              width={{ base: "100%", md: "70%" }}
              fontSize="2xl"
            >
              L’objectif de développement durable n°17 (ODD) met à l’honneur
              l’importance d’une action collective et concertée comme levier
              incontournable pour réduire les fractures territoriales &
              problématiques existantes, souvent révélées par les associations
              et porteurs de projets. Cette action collective et concertée
              permet d’inventer les solutions de demain avec tous les acteurs
              d’un même territoire.
            </Text>
            <Button hoverColor="blue.500" mt={10} href="/ecosysteme">
              en savoir plus
            </Button>
          </Box>
          <Box textAlign="right" flex="1">
            <Image
              width="381px"
              src="/assets/partenaires/partenariat.png"
              alt="Partenariats"
            />
          </Box>
        </Flex>
      </Section>
      <Footer />
      <Box
        height="14rem"
        backgroundRepeat="repeat-x"
        backgroundImage="url(/assets/footer.svg)"
      />
    </Layout>
  )
}

Home.backgroundColor = "#E5F1FC"

export const getStaticProps = async () => {
  const entries = await client.getEntries()
  const projects = entries.items.filter(
    (item) => item.sys.contentType.sys.id === "project"
  )

  return {
    props: {
      projects,
    },
    revalidate: 10,
  }
}

export default Home
