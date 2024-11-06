import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Footer from "components/Footer_bak"
import Layout from "components/Layout"
import Section from "components/Section"
import Title from "components/Title"
import { IEcosystem, IFriend } from "types/generated/contentful"
import client from "core/client"
import useIsVisible from "hooks/useIsVisible"
import dynamic from "next/dynamic"
import Head from "next/head"
import React from "react"
import { Color } from "styles/theme"
import Marker from "components/Marker"

const EcosystemSlider = dynamic(() => import("components/EcosystemSlider"), {
  ssr: false,
})

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
        {societies && (
          <>
            <Text mb={10} fontSize="4xl">
              Les <Marker color={Color.BLUE}>entreprises</Marker> nous font
              confiance
            </Text>
            <EcosystemSlider assets={societies} />
          </>
        )}
        {associations && (
          <>
            <Text my={10} fontSize="4xl">
              Les <Marker color={Color.BLUE}>associations</Marker> également
            </Text>
            <EcosystemSlider assets={associations} />
          </>
        )}
        {parteners && (
          <>
            <Text my={10} fontSize="4xl">
              Nos <Marker color={Color.BLUE}>partenaires</Marker> nous épaulent
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
        <Title fontSize="5xl">
          6 personnalités aux profils complémentaires, qui nous inspirent et
          nous aident à grandir
        </Title>
        <SimpleGrid mt={4} spacing={6} columns={{ base: 2, sm: 3, lg: 3 }}>
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
    </Layout>
  )
}

Ecosystem.backgroundColor = "#EFE6D4"

export const getStaticProps = async () => {
  const friends = await client.getEntries({
    content_type: "friend",
    order: "fields.position",
  })

  const ecosystem = await client.getEntries({
    content_type: "ecosystem",
  })

  return {
    props: {
      ecosystem: ecosystem.items,
      friends: friends.items,
    },
    revalidate: 10,
  }
}

export default Ecosystem
