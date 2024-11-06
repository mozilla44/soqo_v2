import { Box, Grid, Heading, Image, VStack, Link } from "@chakra-ui/react";
import React from "react";
import { Color } from "styles/theme";
import EmptyButton from "./EmptyButton";

const OurProjects = () => {
  return (
    <Box bg="#E5DCC3" pt={{ base: 4, md: 8 }} pb={{ md: "3rem", base: "3rem" }} minHeight={"85vh"}>
      <Heading
      
        as="h2"
        ml={{ base: "1rem", md: "8rem" }}
        fontSize={{ md: "5xl", base: "3xl" }}
        color={Color.KAKI}
        fontFamily={"Minion Pro"}
        fontWeight={"thin"}
        mb={{ base: "2rem", md: "0.5rem" }}
        textAlign={{ base: "center", md: "left" }}
      >
        Nos projets
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        px={{ base: 0, md: "10rem" }}
        py={{ base: 4, md: "2rem" }}
        mr={{ base: "1rem ",  }}
      >
        <VStack
          spacing={4}
          align="center"
          w="100%"
          mx={{ base: 2, md: -2 }}
          mb={{ base: 4, md: 0 }}
        >
          <Link href="/projets">
            <Image
              src="/assets/kids.jpeg"
              alt="Project Impact"
              boxSize={{ base: "300px", md: "25rem" }} // Increased box size
              objectFit="cover"
              marginBottom={{ base: "0", md: "2rem" }}
            />
          </Link>
          <EmptyButton href="/projets">Découvrir les projets à impact</EmptyButton>
        </VStack>

        <VStack
          spacing={4}
          align="center"
          w="100%"
          mx={{ base: 2, md: -2 }}
        >
          <Link href="/projets_evenements">
            <Image
              src="/assets/poubelles.jpg"
              alt="Responsible Events"
              boxSize={{ base: "300px", md: "25rem" }} // Increased box size
              objectFit="cover"
              marginBottom={{ base: "0rem", md: "2rem" }}
            />
          </Link>
          <EmptyButton href="projets_evenements">Découvrir les événéments responsables</EmptyButton>
        </VStack>
      </Grid>
    </Box>
  );
};

export default OurProjects;
