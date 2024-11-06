import { Box, Flex, Text } from "@chakra-ui/react"
import Footer from "components/Footer_bak"
import Layout from "components/Layout"
import Marker from "components/Marker"
import Section from "components/Section"
import Title from "components/Title"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { Color } from "styles/theme"

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Services - Soqo</title>
      </Head>
      <Section display="flex" position="relative" backgroundColor="blue.500">
        <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
          <Box flex="5">
            <Text
              mt={{ base: 6, lg: 0 }}
              fontWeight="normal"
              fontSize="4xl"
              lineHeight={{ base: "2.6rem", lg: "initial" }}
              maxWidth={{ base: "100%", md: "90%" }}
            >
              Vous êtes{" "}
              <Marker isBold color={Color.BEIGE}>
                une entreprise
              </Marker>
              , vous souhaitez vous engager aux côtés d’une{" "}
              <Marker isBold color={Color.BEIGE}>
                association
              </Marker>{" "}
              mais vous manquez de temps et ne savez pas quelle{" "}
              <b>cause soutenir ?</b> Vous êtes perdus face aux 1,5 millions
              d’associations françaises et ne savez pas{" "}
              <b>comment mesurer votre impact ?</b>
            </Text>
          </Box>
          <Box flex="4">
            <Image
              src={"/public/assets/grandmother.jpg"}
              width="1000"
              height="667"
              alt="Nos services"
            />
          </Box>
        </Flex>
      </Section>
      <Section backgroundColor="beige.500">
        <Title>Nos services</Title>
      </Section>
      <Section position="relative" backgroundColor="blue.500">
        <Text
          fontWeight="normal"
          fontSize={{ base: "4xl", lg: "5xl" }}
          lineHeight={{ base: "2.6rem", lg: "initial" }}
          maxWidth={{ base: "100%", md: "80%" }}
        >
          Les <b>collaborations innovantes</b> que nous pilotons aident les
          entreprises à <b>transformer leur modèle et leurs pratiques</b> en
          menant des actions à impact, engageantes pour leurs
          collaborateur.trices et influant positivement la société.
        </Text>
      </Section>
    </Layout>
  )
}

Services.backgroundColor = "#E3F1FD"

export default Services
