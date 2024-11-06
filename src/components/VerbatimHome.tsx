import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Alert,
  AlertIcon,
  IconButton,
  Button,
  Link,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IVerbatimHome } from "../types/generated/contentful.d";
import { Color } from "styles/theme";
import { useSwipeable } from "react-swipeable";

interface VerbatimCardsProps {
  verbatimEntries: IVerbatimHome[];
}

const VerbatimCards: React.FC<VerbatimCardsProps> = ({ verbatimEntries }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Function to handle keydown events
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        showNext();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      }
    };

    // Add event listener for keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isMobile && verbatimEntries.length) {
      interval = setInterval(showNext, 2500); 
    }

    // Clear interval on cleanup
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, verbatimEntries.length]);

  if (verbatimEntries.length === 0) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Alert status="error">
          <AlertIcon />
          Failed to load content. Please try again later.
        </Alert>
      </Flex>
    );
  }

  const showNext = () => {
    setStartIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % verbatimEntries.length
        : (prevIndex + 3) % verbatimEntries.length
    );
  };

  const showPrev = () => {
    setStartIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + verbatimEntries.length) % verbatimEntries.length
        : (prevIndex - 3 + verbatimEntries.length) % verbatimEntries.length
    );
  };

  // Build an array of indices for visible slides
  const visibleIndices = isMobile
    ? [startIndex]
    : [
        startIndex,
        (startIndex + 1) % verbatimEntries.length,
        (startIndex + 2) % verbatimEntries.length,
      ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
  });

  return (
    <Box
      p={8}
      pt={{ md: "5rem", base: "0" }}
      backgroundColor={Color.BEIGE}
      fontFamily={"Minion Pro"}
      color={Color.KAKI}
    >
      <Flex
        direction="column"
        alignItems="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Flex
          justifyContent="center"
          mb={8}
          alignItems="center"
          flexWrap="wrap"
          {...handlers}
        >
          {!isMobile && (
            <IconButton
              icon={<ArrowBackIcon />}
              aria-label="Previous"
              onClick={showPrev}
              variant="ghost"
              marginRight={"2rem"}
              _hover={{ backgroundColor: Color.KAKI, color: Color.BEIGE }}
            />
          )}

          <Flex
            justifyContent="center"
            gap={8}
            overflow="hidden"
            flexWrap="wrap"
          >
            {verbatimEntries.map((entry, index) => (
              <Box
                key={entry.sys.id}
                textAlign="center"
                maxW="300px"
                w={{ base: "100%", md: "300px" }}
                h="400px"
                display={visibleIndices.includes(index) ? "block" : "none"}
              >
                <Box
                  p={4}
                  borderRadius="md"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Flex
                    flexGrow={1}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    padding={"1rem"}
                  >
                    <Text fontSize="lg" textAlign="center">
                      {entry.fields.quote &&
                        entry.fields.quote.content.map(
                          (
                            content: { content: any[] },
                            index: React.Key | null | undefined
                          ) => (
                            <React.Fragment key={index}>
                              {content.content
                                .map((item) => item.value)
                                .join(" ")}
                            </React.Fragment>
                          )
                        )}
                    </Text>
                  </Flex>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mb={2}
                    flexShrink={0}
                  >
                    <Image
                      src={entry.fields.photo.fields.file.url}
                      alt={entry.fields.name}
                      borderRadius="full"
                      objectFit="cover"
                      w="80px"
                      h="80px"
                    />
                  </Box>
                  <Box mt="auto" textAlign="center">
                    <Text fontWeight="bold" fontSize="xl" mt={2}>
                      {entry.fields.name}
                    </Text>
                    <Text color={Color.KAKI} fontSize="m">
                      {entry.fields.position} <br /> {entry.fields.entreprise}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>

          {!isMobile && (
            <IconButton
              icon={<ArrowForwardIcon />}
              aria-label="Next"
              onClick={showNext}
              marginLeft={"2rem"}
              variant="ghost"
              _hover={{ backgroundColor: Color.KAKI, color: Color.BEIGE }}
            />
          )}
        </Flex>
        <Button
          cursor={"pointer"}
          color={Color.BEIGE}
          backgroundColor={Color.KAKI}
          fontWeight={"200"}
          mt={8}
          px={8}
          py={6}
          _hover={{
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            transform: "translateY(-0.09rem)",
          }}
        >
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Je prends rendez-vous
          </Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default VerbatimCards;
