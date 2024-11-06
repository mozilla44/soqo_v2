import React, { useState, useEffect } from "react";
import { Box, Image, Text, Flex, IconButton, VStack, HStack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IVerbatimImpact } from "../types/generated/contentful";
import { Color } from "styles/theme";
import { useSwipeable } from "react-swipeable";

interface VerbatimCardsProps {
  verbatimEntries: IVerbatimImpact[];
}

const VerbatimCards: React.FC<VerbatimCardsProps> = ({ verbatimEntries }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % verbatimEntries.length);
  };

  const showPrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + verbatimEntries.length) % verbatimEntries.length
    );
  };

  const visibleIndices = [startIndex];

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
    delta: 10,
  });

  return (
    <Box
      minHeight="400px"
      p={8}
      pt={{ md: "5rem", base: "2rem" }}
      backgroundColor={Color.BLUE}
      fontFamily={"Minion Pro"}
      color={Color.KAKI}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100%"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Flex
          justifyContent="space-between"
          mb={8}
          alignItems="center"
          flexWrap="wrap"
          width="100%"
        >
          {!isMobile && (
            <IconButton
              borderRadius="50%"
              border="1px solid #163A2C"
              icon={<ArrowBackIcon boxSize={6} />}
              aria-label="Previous"
              color={Color.KAKI}
              onClick={showPrev}
              variant="ghost"
              backgroundColor="transparent"
              _hover={{ backgroundColor: Color.KAKI, color: Color.BEIGE }}
            />
          )}

          <Box flexGrow={1} {...handlers}>
            <Flex justifyContent="center" gap={8} overflow="hidden">
              {verbatimEntries.map((entry, index) => (
                <Box
                  key={entry.sys.id}
                  display={visibleIndices.includes(index) ? "block" : "none"}
                  w={{ base: "100%", md: "700px" }}
                  bg={Color.BEIGE}
                  p={8}
                  borderRadius="xl"
                  boxShadow="md"
                  minHeight="250px"
                >
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="left"
                    mb={6}
                  >
                    {entry.fields.quote &&
                      entry.fields.quote.content.map(
                        (content: { content: any[] }, idx: number) => (
                          <React.Fragment key={idx}>
                            {content.content
                              .map((item) => item.value)
                              .join(" ")}
                          </React.Fragment>
                        )
                      )}
                  </Text>

                  <Flex mt={4} alignItems="center">
                    <Image
                      src={entry.fields.photo.fields.file.url}
                      alt={entry.fields.nom}
                      borderRadius="full"
                      objectFit="cover"
                      w="80px"
                      h="80px"
                      mr={4}
                    />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold" fontSize="lg" pl={"1rem"}>
                        {entry.fields.nom}
                      </Text>
                      <Text fontSize="md" color={Color.KAKI} pl={"1rem"}>
                        {entry.fields.position}
                      </Text>
                      <Text fontSize="md" color={Color.KAKI} pl={"1rem"}>
                        {entry.fields.entreprise}
                      </Text>
                    </VStack>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>

          {!isMobile && (
            <IconButton
              borderRadius="50%"
              border="1px solid #163A2C"
              icon={<ArrowForwardIcon boxSize={6} />}
              aria-label="Next"
              onClick={showNext}
              color={Color.KAKI}
              variant="ghost"
              backgroundColor="transparent"
              _hover={{ backgroundColor: Color.KAKI, color: Color.BEIGE }}
            />
          )}
        </Flex>

        {/* Dots  */}
        <HStack spacing={3} mt={4}>
          {verbatimEntries.map((_, index) => (
            <Box
              key={index}
              w={3}
              h={3}
              borderRadius="50%"
              bg={startIndex === index ? Color.KAKI : Color.BEIGE}
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default VerbatimCards;
