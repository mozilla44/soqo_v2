import { Text } from "@chakra-ui/react"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import ServiceAccordion from "components/ServiceAccordion"
import Title from "components/Title"
import useIsVisible from "hooks/useIsVisible"
import Head from "next/head"
import React from "react"
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
        <Title>Nos services</Title>
        <ServiceAccordion />
      </Section>
      <Section position="relative" backgroundColor="#E5F1FC">
        <Text
          fontWeight="normal"
          fontSize={{ base: "4xl", lg: "5xl" }}
          lineHeight={{ base: "2.6rem", lg: "initial" }}
          maxWidth={{ base: "100%", md: "80%" }}
        >
          Les <b>collaborations innovantes</b> que nous pilotons aident les
          entreprises à <b>transformer leur modèle et leurs pratiques</b> en
          menant des actions à impact, engageantes pour leurs
          collaborateur.trices et influant positivement la société
        </Text>
      </Section>
      <Footer />
    </Layout>
  )
}

Services.backgroundColor = "#E5F1FC"

export default Services
