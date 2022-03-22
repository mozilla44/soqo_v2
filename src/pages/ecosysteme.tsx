import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import { IEcosystem, IFriend } from "types/generated/contentful"
import client from "core/client"
import useIsVisible from "hooks/useIsVisible"
import dynamic from "next/dynamic"
import Head from "next/head"
import React from "react"
import { RoughNotation } from "react-rough-notation"

const EcosystemSlider = dynamic(() => import("components/EcosystemSlider"), {
  ssr: false,
})

const users = [
  {
    name: "Liem Nguyen",
    title: "Strategy & Innovation Transformation in multicultural context",
    cover: "/assets/ecosystem/liem.png",
  },
  {
    name: "Hanieh Hadizadeh",
    title: "Chargée de campagne et plaidoyer chez Démocratie Ouverte",
    cover: "/assets/ecosystem/hanieh.png",
  },
  {
    name: "Swen Déral",
    title: "ESS & Innovation sociale. Fondateur association La Sauge",
    cover: "/assets/ecosystem/swen.png",
  },
  {
    name: "Stephanie Calvino",
    title:
      "Fondatrice Anti-Fashion project. Responsable ateliers Résilience Roubaix",
    cover: "/assets/ecosystem/stephanie.png",
  },
  {
    name: "Alexandre Born",
    title: "Entrepreneur social, Directeur Général chez Bellevilles",
    cover: "/assets/ecosystem/alexandre.png",
  },
  {
    name: "Celine Hay",
    title: "Responsable RSE Veja",
    cover: "/assets/ecosystem/celine.png",
  },
]

const Ecosystem = ({
  ecosystem,
  friends,
}: {
  ecosystem: IEcosystem[]
  friends: IFriend[]
}) => {
  const isVisible = useIsVisible()

  const societies = ecosystem.find((item) => item.fields.type === "societies")
    ?.fields.images

  const associations = ecosystem.find(
    (item) => item.fields.type === "associations"
  )?.fields.images

  const parteners = ecosystem.find((item) => item.fields.type === "partners")
    ?.fields.images

  return (
    <Layout>
      <Head>
        <title>Écosystème - Soqo</title>
      </Head>
      <Section backgroundColor="beige.500">
        <Title mb={2}>
          <RoughNotation
            animationDuration={2000}
            color="#E5F1FC"
            show={isVisible}
            type="highlight"
          >
            Écosystème
          </RoughNotation>
        </Title>
        {societies && (
          <>
            <Text mb={10} fontSize="3xl">
              Entreprises
            </Text>
            <EcosystemSlider assets={societies} />
          </>
        )}
        {associations && (
          <>
            <Text my={10} fontSize="4xl">
              Associations
            </Text>
            <EcosystemSlider assets={associations} />
          </>
        )}
        {parteners && (
          <>
            <Text my={10} fontSize="4xl">
              Partenaires
            </Text>
            <EcosystemSlider assets={parteners} />
          </>
        )}
      </Section>
      <Section
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundImage="url(/assets/bg2.svg)"
        backgroundColor="blue.500"
      >
        <Title fontSize="5xl">Ils nous aident à grandir</Title>
        <SimpleGrid spacing={6} columns={{ base: 2, sm: 3, lg: 4 }}>
          {friends.map((friend) => (
            <Box mb={10} maxWidth="310px" key={friend.sys.id}>
              <Image
                maxWidth="14rem"
                width="100%"
                objectFit="cover"
                src={friend.fields.photo.fields?.file.url}
                alt={friend.fields.name}
              />
              <Text mt={2} fontWeight="bold" fontSize="3xl">
                {friend.fields.name}
              </Text>
              <Text fontSize="xl">{friend.fields.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>
      <Footer />
    </Layout>
  )
}

Ecosystem.backgroundColor = "#f9f5e9"

export const getStaticProps = async () => {
  const entries = await client.getEntries()
  const ecosystem = entries.items.filter(
    (item) => item.sys.contentType.sys.id === "ecosystem"
  )

  const friends = entries.items.filter(
    (item) => item.sys.contentType.sys.id === "friend"
  )

  return {
    props: {
      ecosystem,
      friends,
    },
    revalidate: 10,
  }
}

export default Ecosystem
