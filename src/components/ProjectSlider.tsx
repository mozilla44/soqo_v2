import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { IProject } from "types/generated/contentful"
import React from "react"
import CustomLink from "./CustomLink"

interface ICardProps {
  title: string
  slug: string
  cover?: string
  type: IProject["fields"]["type"]
}

export const CardTag = ({ type }: { type: IProject["fields"]["type"] }) => (
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
    backgroundColor={type === "social" ? "#163A2C" : "#FFE32D"}
    color={type === "social" ? "#F9F5E9" : "#1F392D"}
  >
    {type === "social" ? "Social" : "Environnement"}
  </Text>
)

const Card = ({ type, title, cover, slug }: ICardProps) => (
  <VStack alignItems="flex-start">
    <CustomLink role="group" href={`/projets/${slug}`}>
      <Box width={{ base: "211px", md: "513px" }}>
        <Box position="relative">
          <Image
            src={cover}
            alt={title}
            pos="relative"
            objectFit="cover"
            backgroundColor="blue.100"
            height={{ base: "276px", md: "370px" }}
            width="100%"
          />
          <CardTag type={type} />
        </Box>

        <Text
          _groupHover={{ textDecoration: "underline" }}
          color="#1F392D"
          fontSize={{ base: "18px", md: "32px" }}
        >
          {title}
        </Text>
      </Box>
    </CustomLink>
  </VStack>
)

const ProjectSlider = ({ projects }: { projects: IProject[] }) => {
  return (
    <HStack alignItems="flex-start" pb={10} overflowX="auto" spacing={10}>
      {projects.map((project) => (
        <Card
          key={project.sys.id}
          title={project.fields.title}
          slug={project.fields.slug}
          cover={project.fields.cover?.fields.file.url}
          type={project.fields.type}
        />
      ))}
    </HStack>
  )
}

export default ProjectSlider
