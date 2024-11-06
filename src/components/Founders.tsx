import { Box, Flex, Text, Button, Image, VStack } from "@chakra-ui/react";
import { Color } from "styles/theme";

function Founders() {
  return (
    <Flex
      bg={Color.KAKI}
      color={Color.BEIGE}
      justify="space-evenly"
      align="center"
      p={8}
      pt={16} // Add padding-top here for additional space
      gap={8}
      wrap="wrap"
    >
      {/* First Column */}
      <Flex
        align="center"
        gap={6}
        w={{ base: "100%", md: "500px" }}
        maxW="600px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src="/assets/victor.jpg"
          width={{ base: "15rem", md: "18rem" }}
          height={{ base: "25rem", md: "25rem" }}
          objectFit="cover"
          alt="Victor"
        />
        <VStack
          align="start"
          spacing={4}
          height={{ base: "auto", md: "25rem" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Box>
            <Text fontSize="xl">
              “Une équipe experte et passionnée, à vos côtés pour concrétiser
              vos ambitions et générer un impact significatif”
            </Text>
            <Text mt={2}>
              Victor
            </Text>
          </Box>
          <Button
            padding="1.5rem"
            cursor="pointer"
            as="a"
            fontWeight="500"
            href="/adn#team"
            variant="outline"
            fontSize="1.2rem"
            borderColor={"borderColor"}
            color={"color"}
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translateY(-0.09rem)",
            }}
          >
            Découvrir la Team
          </Button>
        </VStack>
      </Flex>

      {/* Second Column */}
      <Flex
        align="center"
        gap={6}
        w={{ base: "100%", md: "500px" }}
        maxW="600px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Image
          src="/assets/najma2.jpg"
          width={{ base: "15rem", md: "18rem" }}
          height={{ base: "25rem", md: "25rem" }}
          objectFit="cover"
          alt="Najma"
        />
        <VStack
          align="start"
          spacing={4}
          height={{ base: "auto", md: "25rem" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
        >
          <Box>
            <Text fontSize="xl">
              “Le rôle de notre société à mission : innover pour un avenir plus
              durable.”
            </Text>
            <Text mt={2}>
              Najma
            </Text>
          </Box>
          <Button
            padding="1.5rem"
            cursor="pointer"
            as="a"
            fontWeight="500"
            href="/adn"
            variant="outline"
            fontSize="1.2rem"
            borderColor={"borderColor"}
            color={"color"}
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translateY(-0.09rem)",
            }}
          >
            Lire notre manisfeste
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Founders;
