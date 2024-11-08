import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  Image,
} from '@chakra-ui/react';
import { Color } from 'styles/theme';

interface DomainsSectionProps {
  title: string;
  textItems: string[];
  logosrc: string;
  bgColor: string;
  color: string;
  bordercolor:string; 
  textcolor: string
}

const DomainSection: React.FC<DomainsSectionProps> = ({ title, textItems, logosrc, bgColor, color ,bordercolor,textcolor}) => {
  return (
    <Flex
    borderBottom={`1px solid ${bordercolor}`}

      color={color}
      as="section"
      bg={bgColor}
      py={[18, 12]}
      justify={["center", "space-between"]}
      align="center"
      position="relative"
      fontFamily={"Minion Pro"}
      flexDirection={["column", "row"]}
      minHeight={["auto", "600px"]}
      px={{ base: 7, md: 0 }}
    >
      
      <VStack
      
        align="flex-start"
        spacing={4}
        maxW={["90%", "50%"]}
        ml={[0, "8%"]}
        mb={[8, 0]}
      >
        <Heading
        as="h2"
        fontSize={{md:"5xl", base: "3xl"}}
        color={textcolor}
        fontFamily={"Minion Pro"}
        fontWeight={"4"}
        mb={{ base: "2rem", md: "2rem" }}
      >
          {title}
        </Heading>

        <Box fontFamily={"Minion Pro"}>
          {textItems.map((text, index) => (
            <Box key={index}>
              <Text
                color={color}
                fontSize={["lg", "2xl"]}
                mb={2}
                display="flex"
                alignItems="center"
                textAlign={["left", "left"]}
              >
                {text}
              </Text>
              <Divider borderColor={color} my={2} />
            </Box>
          ))}
        </Box>
      </VStack>

      <Box
        display={["none", "block"]}
        position="absolute"
        right={0}
        bottom={0}
        boxSize={["250px", "400px", "500px"]}
      >
        <Image
          src={logosrc}
          alt="Illustration"
          boxSize="100%"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default DomainSection;
