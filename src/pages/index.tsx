import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import Button from "components/Button"
import Counter from "components/Counter"
import Cover from "components/Cover"
import CustomLink from "components/CustomLink"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Marker from "components/Marker"
import ProjectSlider from "components/ProjectSlider"
import Section from "components/Section"
import Title from "components/Title"
import client from "core/client"
import Head from "next/head"
import Image from "next/image"
import { Color } from "styles/theme"
import { IProject } from "types/generated/contentful"
import partenariat from "../../public/assets/partenaires/partenariat.png"
import swimming from "../../public/assets/swimming.jpg"

const Home = ({ projects }: { projects: IProject[] }) => (
  <Layout>
    <Head>
      <title>Accueil - Soqo</title>
    </Head>
    <Flex position="relative" flexDirection="column" backgroundColor="blue.500">
      <Cover />
      <CustomLink href="/eco-conception">
        <Box backgroundColor="yellow.500">
          <Flex
            marginX="auto"
            maxWidth="container.xl"
            px={4}
            py={2}
            justifyContent="flex-end"
            alignItems="center"
            fontSize="2xl"
          >
            <Counter />
          </Flex>
        </Box>
      </CustomLink>
    </Flex>
    <Box as="section" color="kaki.500" backgroundColor="beige.500">
      <Box px={4} pt={10} pb={0} maxWidth="container.xl" marginX="auto">
        <Title mb={4}>Nos projets</Title>
        <Box maxWidth="50rem" fontSize="2xl" mb={10}>
          En créant des partenariats innovants nous contribuons ensemble à la
          construction d’un monde plus juste et plus durable.
        </Box>
      </Box>

      <Box
        maxWidth={{ xl: "container.xl" }}
        px={{ base: 4, md: 10 }}
        marginX="auto"
      >
        <ProjectSlider projects={projects} />
      </Box>
      <Box p={10} pt={0} maxWidth="container.xl" marginX="auto">
        <Button href="/projets" hoverColor="beige.500">
          voir tout
        </Button>
      </Box>
    </Box>
    <Section color="beige.500" backgroundColor="kaki.500">
      <Title color="beige.500">Nos services</Title>
      <VStack>
        {[
          "Définition de la stratégie d’engagement de votre entreprise",
          "Identification de projets associatifs & mise en place du partenariat",
          "Pilotage du partenariat & engagement des collaborateurs",
          "Accompagnement à la communication",
          "Mesure d’impact",
        ].map((text) => (
          <Box
            key={text}
            py={2}
            width="100%"
            borderBottom="2px solid"
            borderBottomColor="beige.500"
            fontSize={{ base: "3xl", md: "4xl" }}
          >
            {text}
          </Box>
        ))}
      </VStack>
      <Button mt={10} href="/services" hoverColor="kaki.500">
        en savoir plus
      </Button>
    </Section>
    <Section position="relative" color="kaki.500" backgroundColor="beige.500">
      <Title display={{ base: "block", md: "none" }} color="kaki.500">
        Notre manifeste
      </Title>
      <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box flex={{ base: 1, md: 2 }}>
          <Title display={{ base: "none", md: "block" }} color="kaki.500">
            Notre manifeste
          </Title>
          <Text
            mt={{ base: 6, md: 0 }}
            width={{ base: "100%", md: "70%" }}
            fontSize="2xl"
          >
            <b>
              Égalité sociale, transition écologique, diversité, inclusion
              économique
            </b>
            . Face aux défis actuels, nous sommes convaincus qu’il faut apporter
            des{" "}
            <Marker isBold color={Color.BLUE}>
              réponses collectives
            </Marker>
            . Associations et entreprises ont un rôle déterminant à jouer{" "}
            <b>ensemble</b>. Chez Soqo, nous croyons en{" "}
            <Marker isBold color={Color.BLUE}>
              l’innovation sociale
            </Marker>{" "}
            et allions l’expertise des associations à la puissance des
            entreprises pour réaliser des{" "}
            <Marker isBold color={Color.BLUE}>
              projets concrets à impact positif
            </Marker>
            .
          </Text>
        </Box>
        <Box textAlign={{ base: "center", md: "right" }} flex="1">
          <Image
            src={swimming}
            width="600px"
            height="900px"
            alt="Notre manifeste"
            placeholder="blur"
          />
        </Box>
      </Flex>
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
        {`Notre dada : l'ODD 17`}
      </Title>
      <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
        <Box flex={{ base: 1, md: 2 }}>
          <Title display={{ base: "none", md: "block" }} color="kaki.500">
            {`Notre dada : l'ODD 17`}
          </Title>
          <Text
            mt={{ base: 6, md: 0 }}
            width={{ base: "100%", md: "70%" }}
            fontSize="2xl"
          >
            L’objectif de développement durable (ODD) n°17 promeut l’importance
            des actions collectives comme leviers incontournables pour réduire
            les problématiques sociales et environnementales, souvent révélées
            par les associations. Ces partenariats doivent être inclusifs,
            construits sur des principes et des valeurs communes et placer au
            coeur des préoccupations les peuples et la planète. Ils permettent
            d’inventer les solutions de demain avec tous les acteurs d’un même
            territoire.
          </Text>
          <Button
            isExternal
            hoverColor="blue.500"
            mt={10}
            href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/"
          >
            découvrir les ODD
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-end" }}
          flex="1"
        >
          <Image
            width="300px"
            height="336px"
            src={partenariat}
            alt="Partenariats"
            placeholder="blur"
          />
        </Box>
      </Flex>
    </Section>
    <Footer />
  </Layout>
)

Home.backgroundColor = "#E3F1FD"

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
