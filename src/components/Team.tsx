import React, { useState } from 'react';
import { Box, Image, Text, Flex, Stack, useBreakpointValue } from '@chakra-ui/react';
import { useSwipeable } from 'react-swipeable';
import { Color } from 'styles/theme';

interface TeamMember {
  id: number;
  name: string;
  picture: string;
  job: string;
  birthplace: string;
  quote: string;
}

interface TeamProps {
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleQuote, setVisibleQuote] = useState<{ [key: number]: boolean }>({});

  const toggleQuoteVisibility = (id: number) => {
    setVisibleQuote((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length),
    trackMouse: true,
  });

  return (
    <Flex wrap="wrap" justify="center" gap={8} pt={"4rem"} bg={Color.BEIGE} pb="4rem">
      {isMobile ? (
        <Box {...handlers} position="relative" w="300px" h="450px">
          {members.map((member, index) => (
            currentIndex === index && (
              <Box
                key={member.id}
                position="absolute"
                w="300px"
                h="450px"
                boxShadow="md"
                overflow="hidden"
                onClick={() => toggleQuoteVisibility(member.id)}
              >
                <Image src={member.picture} alt={member.name} objectFit="cover" w="100%" h="70%" />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="70%"
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  opacity={visibleQuote[member.id] ? '1' : '0'}
                  transition="opacity 0.3s ease-in-out"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                >
                  <Text fontSize="lg" color={Color.BEIGE} width={"80%"} fontWeight="bold" fontFamily="Minion Pro">
                    {member.quote}
                  </Text>
                </Box>

                <Box position="absolute" bottom="0" w="100%" h="30%" bg={Color.BEIGE} p="4" boxShadow="lg">
                  <Stack spacing={2} textAlign={"center"}>
                    <Text fontWeight="bold" fontSize="xl" color={Color.KAKI} fontFamily="Minion Pro">
                      {member.name}
                    </Text>
                    <Text fontSize="lg" fontFamily="Minion Pro" color={Color.KAKI}>
                      {member.job}
                    </Text>
                    <Text fontSize="m" color={Color.KAKI} fontFamily="Minion Pro">
                      {member.birthplace}
                    </Text>
                  </Stack>
                </Box>
              </Box>
            )
          ))}
        </Box>
      ) : (
        members.map((member) => (
          <Box
            key={member.id}
            position="relative"
            w="300px"
            h="450px"
            boxShadow="md"
            cursor='default'
            overflow="hidden"
          >
            <Image src={member.picture} alt={member.name} objectFit="cover" w="100%" h="70%" />

            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="70%"
              bg="rgba(0, 0, 0, 0.7)"
              color="white"
              opacity="0"
              transition="opacity 0.3s ease-in-out"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              _hover={{ opacity: '0.9', bg: Color.KAKI }}
            >
              <Text fontSize="lg" color={Color.BEIGE} width={"80%"} fontWeight="bold" fontFamily="Minion Pro">
                {member.quote}
              </Text>
            </Box>

            <Box position="absolute" bottom="0" w="100%" h="30%" bg={Color.BEIGE} p="4" boxShadow="lg">
              <Stack spacing={2} textAlign={"center"}>
                <Text fontWeight="bold" fontSize="xl" color={Color.KAKI} fontFamily="Minion Pro">
                  {member.name}
                </Text>
                <Text fontSize="lg" fontFamily="Minion Pro" color={Color.KAKI}>
                  {member.job}
                </Text>
                <Text fontSize="m" color={Color.KAKI} fontFamily="Minion Pro">
                  {member.birthplace}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))
      )}
    </Flex>
  );
};

export default Team;
