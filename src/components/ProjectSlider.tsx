import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { IProject } from "types/generated/contentful"
import React from "react"
import CustomLink from "./CustomLink"
import fontColorContrast from "font-color-contrast"

interface ICardProps {
  title: string
  slug: string
  cover?: string
  tag: string
  colorTag: string
}

export const CardTag = ({
  tag,
  colorTag,
}: {
  tag: string
  colorTag: string
}) => (
  <Text
    transition="all 0.2s"
    _groupHover={{ px: 5, py: 2 }}
    transformOrigin="bottom right"
    right={0}
    bottom={0}
    px={4}
    py={1}
    position="absolute"
    transform="rotate(-90deg) translateX(100%)"
    fontSize={{ base: "20px", md: "28px" }}
    backgroundColor={colorTag}
    color={fontColorContrast(colorTag)}
    textShadow="sm"
  >
    {tag}
  </Text>
)

const Card = ({ tag, colorTag, title, cover, slug }: ICardProps) => (
  <VStack alignItems="flex-start">
    <CustomLink role="group" href={`/projets/${slug}`}>
      <Box width={{ base: "210px", md: "450px" }}>
        <Box position="relative">
          <Image
            src={cover}
            alt={title}
            pos="relative"
            objectFit="cover"
            backgroundColor={colorTag}
            height={{ base: "270px", md: "300px" }}
            width="100%"
          />
          <CardTag tag={tag} colorTag={colorTag} />
        </Box>
        <Text
          textDecoration="underline"
          mt={4}
          textTransform="uppercase"
          _groupHover={{ textDecoration: "underline" }}
          color="#1F392D"
          fontSize={{ base: "xl", md: "3xl" }}
        >
          {title}
        </Text>
      </Box>
    </CustomLink>
  </VStack>
)

const ProjectSlider = ({ projects }: { projects: IProject[] }) => {
  return (
    <HStack alignItems="flex-start" pb={10} overflowX="auto" spacing={4}>
      {projects.map((project) => (
        <Card
          key={project.sys.id}
          title={project.fields.title}
          slug={project.fields.slug}
          cover={
            project.fields.thumbnail?.fields?.file?.url ||
            project.fields.cover?.fields.file.url
          }
          tag={project.fields.tag!}
          colorTag={project.fields.colorTag!}
        />
      ))}
    </HStack>
  )
}

export default ProjectSlider
