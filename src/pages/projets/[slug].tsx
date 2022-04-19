import { Box, Flex, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import Footer from "components/Footer"
import Layout from "components/Layout"
import Section from "components/Section"
import client from "core/client"
import { GetStaticPropsContext } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import { BsArrowRight } from "react-icons/bs"
import { GoQuote } from "react-icons/go"
import { IProject } from "types/generated/contentful"

const Projets = ({ project }: { project: IProject }) => {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  return (
    <Layout>
      <Head>
        <title>{project.fields.title} - Soqo</title>
      </Head>
      <Section color="kaki.500" backgroundColor="beige.500">
        <Flex flexDirection={{ base: "column-reverse", lg: "row" }}>
          <Flex
            mr={10}
            flexDirection="column"
            justifyContent="space-between"
            flex="1"
          >
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="4xl"
              as="h1"
              mb={6}
            >
              {project.fields.title}
            </Text>
            <Box>
              <Text fontWeight="bold" fontSize="2xl">
                {project.fields.society}
              </Text>
              <Text fontSize="xl">{project.fields.societyText}</Text>
              <Text mt={6} fontWeight="bold" fontSize="2xl">
                {project.fields.organization}
              </Text>
              <Text fontSize="xl">{project.fields.organizationText}</Text>
            </Box>
          </Flex>
          <Box mb={{ base: 6, lg: 0 }} flex="1">
            <Image
              alt={project.fields.title}
              src={project.fields.cover?.fields.file.url}
            />
          </Box>
        </Flex>
      </Section>
      <Section p={0} color="kaki.500">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box backgroundColor="yellow.500" p={{ base: 6, sm: 10 }}>
            <Text mb={{ base: 4, sm: 10 }} fontWeight="semibold" fontSize="3xl">
              Résultats
            </Text>
            <VStack fontSize="2xl" alignItems="flex-start">
              {project.fields.metrics?.map((metric) => (
                <Flex fontSize="3xl" key={metric}>
                  <Box mt={1} mr={4}>
                    <Box fontSize="4xl" as={BsArrowRight} />
                  </Box>
                  <Text>
                    <b>{metric.split(" ")[0]} </b>
                    <i>{metric.split(" ").slice(1).join(" ")}</i>
                  </Text>
                  <Text as="span" fontStyle="italic"></Text>
                </Flex>
              ))}
            </VStack>
            <Flex mt={10}>
              <Box mr={4}>
                <Box fontSize="6xl" as={GoQuote} />
              </Box>
              <Box>
                <Text fontSize="2xl">{project.fields.quote}</Text>
                <Text fontWeight="bold" mt={4} fontSize="xl">
                  {project.fields.quoteAuthor}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box p={10} backgroundColor="blue.500">
            <Text mb={{ base: 4, sm: 10 }} fontWeight="semibold" fontSize="3xl">
              L’histoire
            </Text>
            <Box
              whiteSpace="pre-line"
              mt={6}
              fontSize="lg"
              dangerouslySetInnerHTML={{ __html: project.fields.content! }}
            />
          </Box>
        </SimpleGrid>
      </Section>
      <Footer />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const entries = await client.getEntries({
    content_type: "project",
  })

  const projects = entries.items as IProject[]

  return {
    paths: projects.map((project) => ({
      params: { slug: project.fields.slug },
    })),
    fallback: true,
  }
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const entries = await client.getEntries({
    "fields.slug": ctx.params?.slug,
    content_type: "project",
  })

  const project = entries.items[0]

  if (!project) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
    revalidate: 10,
  }
}

export default Projets
