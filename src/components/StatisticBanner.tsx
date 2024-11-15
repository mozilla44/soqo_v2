import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
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
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        textAlign={{ base: "center", md: "left" }} // Center text on mobile, align left on desktop
      >
        <Text
          fontSize={["6xl", "8xl"]}
          fontWeight="bold"
          color={Color.KAKI}
          mr={{ base: 0, md: "1rem" }} // Add margin on desktop for spacing
          textAlign={{ base: "center", md: "right" }} // Center on mobile
          mb={{ base: 4, md: 0 }} // Add margin bottom on mobile
        >
          89%
        </Text>
        <Text
          fontSize={["xl", "3xl"]}
          color={Color.KAKI}
          lineHeight="110%"
          width={{ base: "85%", md: "auto" }}
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
          >
            *Barometre RSE 2024
          </Text>
        </Text>
      </Flex>
    </Box>
  );
}

export default StatisticBanner;
