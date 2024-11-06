import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import Footer from "components/Footer_bak"
import Layout from "components/Layout"
import Section from "components/Section"
import Stamp from "components/Stamp"
import client from "core/client"
import { GetStaticPropsContext } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import {
  BsArrowLeft,
  BsArrowRight,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs"
import { GoQuote } from "react-icons/go"
import ReactMarkdown from "react-markdown"
import { IProject } from "types/generated/contentful"
import Carousel from "nuka-carousel"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import CustomLink from "components/CustomLink"

const Projets = ({ project }: { project: IProject }) => {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  let photos = []

  if (project.fields.cover) {
    photos.push(project.fields.cover)
  }

  if (project.fields.photos) {
    photos = [...photos, ...project.fields.photos]
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
            {photos?.length > 0 && (
              <Carousel
                renderCenterLeftControls={({ previousSlide, currentSlide }) => (
                  <>
                    {currentSlide > 0 && (
                      <IconButton
                        ml={3}
                        borderRadius="full"
                        color="kaki.500"
                        fontSize="3xl"
                        aria-label="Suivant"
                        onClick={() => previousSlide()}
                        icon={<BsArrowLeft />}
                      />
                    )}
                  </>
                )}
                renderCenterRightControls={({
                  nextSlide,
                  slideCount,
                  currentSlide,
                }) => (
                  <>
                    {currentSlide < slideCount - 1 && (
                      <IconButton
                        mr={3}
                        borderRadius="full"
                        color="kaki.500"
                        fontSize="3xl"
                        aria-label="Suivant"
                        onClick={() => nextSlide()}
                        icon={<BsArrowRight />}
                      />
                    )}
                  </>
                )}
                autoplay
                autoplayInterval={4000}
                slidesToShow={1}
              >
                {photos.map((photo) => (
                  <AspectRatio key={photo.sys.id} ratio={1}>
                    <Image
                      height="100%"
                      width="100%"
                      objectFit="cover"
                      src={photo.fields.file.url}
                      alt={photo.fields.file.fileName}
                    />
                  </AspectRatio>
                ))}
              </Carousel>
            )}
          </Box>
        </Flex>
      </Section>
      <Section overflow="hidden" p={0} color="kaki.500" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box p={10} backgroundColor="blue.500">
            <Text mb={{ base: 4, sm: 10 }} fontWeight="semibold" fontSize="3xl">
              L’histoire
            </Text>
            <Box whiteSpace="pre-line" mt={6} fontSize="lg">
              <ReactMarkdown>{project.fields.content!}</ReactMarkdown>
            </Box>
          </Box>
          <Flex
            flexDirection="column"
            position="relative"
            backgroundColor="yellow.500"
          >
            <Stamp top={0} />
            <Box flex="1" p={{ base: 6, sm: 10 }}>
              <Text mb={4} fontWeight="semibold" fontSize="3xl">
                Les résultats
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
              <HStack justifyContent="flex-end" mt={10} spacing={4}>
                {project.fields.instagramUrl && (
                  <CustomLink isExternal href={project.fields.instagramUrl}>
                    <Box fontSize="4xl" as={BsInstagram} />
                  </CustomLink>
                )}
                {project.fields.facebookUrl && (
                  <CustomLink isExternal href={project.fields.facebookUrl}>
                    <Box fontSize="4xl" as={BsFacebook} />
                  </CustomLink>
                )}
              </HStack>
            </Box>
            <Flex
              p={{ base: 6, sm: 10 }}
              color="blue.500"
              backgroundColor="kaki.500"
              mt={2}
              fontStyle="italic"
            >
              <Box mr={4}>
                <Box fontSize="6xl" as={GoQuote} />
              </Box>
              <Box>
                <Text fontWeight="600" fontSize="2xl">
                  {project.fields.quote}
                </Text>
                <Text mt={4} fontSize="xl">
                  {project.fields.quoteAuthor}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </SimpleGrid>
        {project.fields.videoId && (
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box
              backgroundColor={
                project.fields.videoId ? "transparent" : "blue.500"
              }
            >
              {project.fields.videoId && (
                <LiteYouTubeEmbed
                  aspectHeight={10}
                  aspectWidth={10}
                  id={project.fields.videoId}
                  title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                />
              )}
            </Box>
            <Box backgroundColor={"kaki.500"}></Box>
          </SimpleGrid>
        )}
      </Section>
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
