import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import CustomLink from "components/CustomLink"
import Footer from "components/Footer_bak"
import Layout from "components/Layout"
import Section from "components/Section"
import Head from "next/head"
import React from "react"
import client from "core/client"
import { IProject } from "types/generated/contentful"
import { CardTag } from "components/ProjectSlider"
import { BsArrowRight } from "react-icons/bs"

const Card = ({
  title,
  slug,
  cover,
  tag,
  colorTag,
}: {
  title: string
  slug: string
  cover?: string
  tag: string
  colorTag: string
}) => (
  <CustomLink role="group" href={`/projets/${slug}`}>
    <Box mb="4rem">
      <Box backgroundColor={colorTag} position="relative">
        <Image alt="title" width="100%" src={cover} />
        <CardTag colorTag={colorTag} tag={tag} />
      </Box>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        mt={4}
        alignItems={{ base: "space-between", xl: "center" }}
      >
        <Text
          textDecoration="underline"
          textTransform="uppercase"
          _groupHover={{ textDecoration: "underline" }}
          color="#1F392D"
        >
          <Box fontSize="3xl" display="flex" alignItems="center">
            {title}{" "}
            <Box ml={2}>
              <BsArrowRight />
            </Box>
          </Box>
        </Text>
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
      backgroundColor="beige.500"
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
                tag={project.fields.tag!}
                colorTag={project.fields.colorTag!}
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
                tag={project.fields.tag!}
                colorTag={project.fields.colorTag!}
              />
            ))}
        </Box>
      </SimpleGrid>
    </Section>
  </Layout>
)

Projets.backgroundColor = "#EFE6D4"

export const getStaticProps = async () => {
  const projects = await client.getEntries({
    content_type: "project",
  })

  return {
    props: {
      projects: projects.items,
    },
    revalidate: 10,
  }
}

export default Projets
