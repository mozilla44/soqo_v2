import React from "react";
import { ChakraProvider, Box, Text, Flex } from "@chakra-ui/react";
import { Color } from "styles/theme";

function StatisticBanner() {
  return (
    <Box
      borderTop="1px solid"
      borderBottom="1px solid"
      width="100vw"
      bg={Color.BLUE}
      py={8}
      px={[4, 8, 12]}
      fontFamily="Minion Pro"
    >
      <Flex
        align="center"
        justify="center"
        direction={{ base: "column", md: "row" }} 
      >
        <Text
          fontSize={["6xl", "8xl"]}
          fontWeight="bold"
          color={Color.KAKI}
          mr={{base:"1rem"}}
          textAlign="left"
          mb={{ base: 4, md: 0 }} 
        >
          89%
        </Text>
        <Text
          fontSize={["xl", "3xl"]}
          color={Color.KAKI}
          textAlign="left"
          lineHeight="110%"
        >
          des entreprises estiment que les enjeux sociaux et environnementaux <br />
          sont un moteur essentiel dans la mise en œuvre de leurs actions RSE.
          <br />
          <Text 
            as="span" 
            fontSize={{ base: "sm", md: "md" }} 
            display="block" 
            mt={{ base: "0.5rem" }} 
            color={Color.KAKI}
            textAlign="left"
          >
            *Barometre RSE 2024
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default StatisticBanner;
