import {
  Box,
  Divider,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import EmptyButton from "components/EmptyButton";
import { Color } from "styles/theme";

export default function Founders() {
  return (
    <Box
      width="100%"
      bg={Color.KAKI}
      fontFamily={"Minion Pro"}
      py={{ base: 10, md: 0 ,}}
    >
      <Flex

        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        height={{ base: "auto", md: "80vh" }}
        wrap="wrap"
        px={10}
      >
        {/* Left Content */}
        <HStack
          pr={{ base: 0, md: "0rem" }}
          maxWidth={{ base: "100%", md: "50%" }}
          height={{ base: "auto", md: "100%" }}
          flex="1"
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"} 
          mt={{ base: 10, md: 0 }}
          spacing={{ base: 6, md: 0 }}
        >
          <Image
            src="/assets/victor.jpg"
            alt="Person 2"
            objectFit={{ base: "cover", md: "contain" }}
            boxSize={{ base: "15rem", md: "25rem" }}
          />
          <VStack
            mr={{ base: 0, md: "rem" }}
            align={{ base: "center", md: "start" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            height={{ base: "auto", md: "25rem" }} // Match image height
            justifyContent="space-between"
            position="relative"
          >
            <Text
            lineHeight={"110%"}
              minWidth={{ base: "100%" }}
              color={Color.BEIGE}
              fontWeight="bold"
              fontSize={{ base: "lg", md: "2xl" }}
              maxWidth="250px"
              marginTop={{ base: "1rem" }}
              textAlign={{ base: "center", md: "left" }} 
            >
              “Une équipe experte et passionnée, à vos côtés pour concrétiser
              vos ambitions et générer un impact significatif”
              <br />
              <br />
              Victor
            </Text>

            <Box
              width="100%"
              display="flex"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <EmptyButton
                href="/adn#team"
                color={Color.BEIGE}
                borderColor={Color.BEIGE}
                paddingX={"3rem"}
              >
                &nbsp;&nbsp;&nbsp;Découvrir la Team&nbsp;&nbsp;&nbsp;
              </EmptyButton>
            </Box>
          </VStack>
        </HStack>

        {/* Center Vertical Divider */}
       {/*  <Divider
          orientation="vertical"
          height="calc(100% - 4rem)"
          borderColor={Color.BEIGE}
          display={{ base: "none", md: "block" }}
          marginTop="4rem"
        /> */}

        {/* Right Content */}
        <HStack
          align={{ base: "center", md: "center" }}
          maxWidth={{ base: "100%", md: "50%" }}
          height={{ base: "auto", md: "100%" }}
          flex="1"
          pr={"1rem"}
          flexWrap={"wrap"}
          justifyContent="center"
          mt={{ base: 10, md: 0 }}
          spacing={{ base: 6, md: 0 }}
        >
          <Image
            src="/assets/najma.jpg"
            alt="Person 2"
            objectFit={{ base: "cover", md: "contain" }}
            boxSize={{ base: "15rem", md: "25rem" }}
          />
          <VStack
            align={{ base: "center", md: "start" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            height={{ base: "auto", md: "25rem" }} // Match image height
            justifyContent="space-between"
            position="relative"
          >
            <Text
            lineHeight={"110%"}
              color={Color.BEIGE}
              fontWeight="bold"
              fontSize={{ base: "lg", md: "2xl" }}
              maxWidth="250px"
              marginTop={{ base: "1rem" }}
              textAlign={{ base: "center", md: "left" }} // Ensure text alignment 
            >
              “Le rôle de notre société à mission innover pour un avenir plus
              durable.&quot;
              <br />
              <br /> Najma
            </Text>

            <Box
              width="100%"
              display="flex"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <EmptyButton
                href="/adn"
                color={Color.BEIGE}
                borderColor={Color.BEIGE}
                paddingX={"3rem"}
              >
                &nbsp;&nbsp;&nbsp;Lire notre Manifeste&nbsp;&nbsp;&nbsp;
              </EmptyButton>
            </Box>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}
