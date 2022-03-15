import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Button from "components/Button"
import CustomLink from "components/CustomLink"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import Head from "next/head"
import React from "react"
import client from "core/client"
import { IProject } from "types/generated/contentful"
import { CardTag } from "components/ProjectSlider"

const Card = ({
  title,
  slug,
  cover,
  type,
}: {
  title: string
  slug: string
  cover?: string
  type: IProject["fields"]["type"]
}) => (
  <CustomLink role="group" href={`/projets/${slug}`}>
    <Box mb="4rem">
      <Box backgroundColor="blue.500" position="relative">
        <Image alt="title" width="100%" src={cover} />
        <CardTag type={type} />
      </Box>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        mt={4}
        alignItems={{ base: "space-between", xl: "center" }}
        justifyContent="space-between"
      >
        <Text
          textDecoration="underline"
          textTransform="uppercase"
          maxWidth="20rem"
          _groupHover={{ textDecoration: "underline" }}
          color="#1F392D"
          fontSize="2xl"
        >
          {title}
        </Text>
        <Box textAlign="right" mt={{ base: 3, xl: 0 }}>
          <Button hoverColor="beige.500" href={`/projets/${slug}`}>
            découvrir
          </Button>
        </Box>
      </Flex>
    </Box>
  </CustomLink>
)

interface IProps {
  projects: IProject[]
}

const Projets = ({ projects }: IProps) => (
  <Layout>
    <Head>
      <title>Projets - Soqo</title>
    </Head>
    <Section
      backgroundPosition="bottom left"
      backgroundRepeat="no-repeat"
      backgroundImage="url(/assets/bg-blue.svg)"
      color="kaki.500"
      backgroundColor="#F9F5E9"
    >
      <SimpleGrid
        spacing={{ md: "2rem", lg: "4rem" }}
        columns={{ base: 1, md: 2 }}
      >
        <Box>
          {projects
            .filter((_, i) => i % 2 === 0)
            .map((project) => (
              <Card
                key={project.sys.id}
                title={project.fields.title}
                slug={project.fields.slug}
                cover={project.fields.cover?.fields.file.url}
                type={project.fields.type}
              />
            ))}
        </Box>
        <Box mt={{ base: 0, md: "6rem" }}>
          {projects
            .filter((_, i) => i % 2 !== 0)
            .map((project) => (
              <Card
                key={project.sys.id}
                title={project.fields.title}
                slug={project.fields.slug}
                cover={project.fields.cover?.fields.file.url}
                type={project.fields.type}
              />
            ))}
        </Box>
      </SimpleGrid>
    </Section>
    <Footer />
  </Layout>
)

Projets.backgroundColor = "#F9F5E9"

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

export default Projets
