import {
  Box,
  HStack,
  Text,
  Image,
  Flex,
  IconButton,
  Heading,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import Cover2 from "components/Cover_bak";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import LogosSlideshow from "components/LogosSlideshow";
import client from "core/client";
import Head from "next/head";
import { Color } from "styles/theme";
import {
  ICarrousePartnersFields,
  ITeam,
  ITeamFields,
} from "types/generated/contentful";
import { useEffect, useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useSwipeable } from "react-swipeable";
import { useBreakpointValue } from "@chakra-ui/react";
import EmptyButton from "components/EmptyButton";
import Cover from "components/Cover";
import AltCover from "components/AltCover";

interface Slide {
  name: string;
  description: string;
  imageUrl: string;
}

interface SlideshowProps {
  slides: Slide[];
}

interface AdnProps {
  logos: { name: string; imageUrl: string }[];
  teamEntries: ITeam[];
}



const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const isMobile = useBreakpointValue({ base: true, md: false });

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return (prev + slidesToShow!) % slides.length;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return (prev - slidesToShow! + slides.length) % slides.length;
    });
  };

  const getSlidesToShow = () => {
    let result = [];
    for (let i = 0; i < (slidesToShow || 1); i++) {
      const index = (currentSlide + i) % slides.length;
      result.push(slides[index]);
    }
    return result;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesToShow]);

  return (
    <Flex
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      maxWidth="100%"
      mx="auto"
      p={4}
      position="relative"
      {...swipeHandlers}
    >
      <IconButton
        borderRadius="50%"
        mr={{ base: "1rem", md: "3rem" }}
        icon={<ArrowBackIcon boxSize={6} />}
        aria-label="Previous"
        onClick={prevSlide}
        variant="ghost"
        _hover={{ backgroundColor: "white", color: "black" }}
      />

      <HStack spacing={4} justifyContent="center" flexGrow={1} overflow="hidden">
        {getSlidesToShow().map((slide, index) => (
          <Box
            key={`${slide.name}-${index}`}
            position="relative"
            w={{ base: "80%", md: "40%", lg: "25%" }} // Smaller width for each breakpoint
            height={{ base: "200px", md: "300px", lg: "350px" }} // Smaller height for each breakpoint
            cursor="pointer"
            _hover={{
              '.descriptionBox': { opacity: 1 },
            }}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.name}
              width="100%"
              height="100%"
              objectFit="cover"
              transition="opacity 0.3s"
              _hover={{ opacity: !isMobile ? 0.8 : 1 }}
            />
            <Box
              className="descriptionBox"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              textAlign="center"
              p={4}
              opacity={0}
              transition="opacity 0.3s"
            >
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}> {/* Smaller font size */}
                {slide.name}
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} mt={2}> {/* Smaller font size */}
                {slide.description}
              </Text>
            </Box>
          </Box>
        ))}
      </HStack>

      <IconButton
        ml={{ base: "1rem", md: "3rem" }}
        borderRadius="50%"
        icon={<ArrowForwardIcon boxSize={6} />}
        aria-label="Next"
        onClick={nextSlide}
        variant="ghost"
        _hover={{ backgroundColor: "white", color: "black" }}
      />
    </Flex>
  );
};






const Adn: React.FC<AdnProps> = ({ logos, teamEntries }) => {
  const strategicCommittee = [
    {
      name: "Sarah Oiknine",
      description:
        "Multi entrepreneur, co-fondatrice de Babbler, CEO @1pact: studio de développement de projets à impact",
      imageUrl: "/assets/oiknine.png",
    },
    {
      name: "Stéphanie Calvino",
      description:
        "Fondatrice Anti-Fashion project. Responsable ateliers Résilience Roubaix",
      imageUrl: "/assets/calvino.jpg",
    },
    {
      name: "Alexandre Born",
      description: "Entrepreneur social, Directeur Général chez Bellevilles",
      imageUrl: "assets/born.jpeg",
    },
    {
      name: "Celine Hay",
      description: "Responsable RSE et développement durable chez Veja",
      imageUrl: "/assets/hay.jpg",
    },
    {
      name: "Swen Déral",
      description: "ESS & Innovation sociale. Fondateur association La Sauge.",
      imageUrl: "/assets/deral.jpeg",
    },
    {
      name: "Liem Nguyen",
      description:
        "Intrapreneur, stratégie & partenariats, management interculturel, mentor chez makesense.",
      imageUrl: "/assets/nguyen.png",
    },
  ];
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleQuote, setVisibleQuote] = useState<{ [key: number]: boolean }>(
    {}
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isMobile) {
      setCurrentIndex(0); // Reset to show the first card on mobile
    }
  }, [isMobile]);


  const toggleQuoteVisibility = (id: number) => {
    setVisibleQuote((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamEntries.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + teamEntries.length) % teamEntries.length
      ),
    trackMouse: true,
  });
  if (!isMounted) return null;
  return (
    <Layout>
      <Head>
        <title>ADN - Soqo</title>
      </Head>
      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        dropdownBgColor={Color.BEIGE}
        dropdownTextColor={Color.KAKI}
        dropdownHoverBgColor={Color.BLUE}
        logosrc={"/assets/logo.png"}
      />

      {/* <Cover2
        title={"Notre manifeste"}
        content={
          "Notre équipe passionnée par les enjeux sociaux et environnementaux, élabore des stratégies impactantes et agit sur le terrain.\n\nNous transformons les valeurs des entreprises en actions concrètes, créant des projets qui répondent aux besoins actuels de la société et de la planète.\n\nLe rôle de notre société à mission : innover pour un avenir plus durable."
        }
        imageSrc={"/assets/team.png"}
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        borderColor={Color.KAKI}
        lineHeight={"110%"}
        marginTop={"2rem"}
        BtnMarginTop={"2rem"}
      /> */}
      <Cover
        btnText={"Prendre rendez-vous avec Najma"}
        buttonLink={"https://cal.com/najmasouroque"}
        btnBorderColor=""
        borderColor={Color.KAKI}
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        mobileHeight={"30vh"}
        imageSrc={"/assets/team.jpg"}
        title={"Notre manifeste"}
        content={(
          <>
            Notre équipe passionnée par les enjeux sociaux et environnementaux, élabore des stratégies impactantes et agit sur le terrain. <br /><br />
            Nous transformons les valeurs des entreprises en actions concrètes, créant des projets qui répondent aux besoins actuels de la société et de la planète.<br /><br />
            Le rôle de notre société à mission : innover pour un avenir plus durable.
          </>
        )}
      />
      <Box bg={Color.BLUE} borderTop={"1px solid"}>
        <Heading
          as={"h2"}
          color={Color.KAKI}
          fontWeight={"thin"}
          fontFamily={"Minion Pro"}
          fontSize={{ md: "5xl", base: "3xl" }}
          ml={"8%"}
          pt={"1.5rem"}
          mb={"-1rem"}
        >
          Notre écosystème
        </Heading>
        <LogosSlideshow
          items={logos}
          bgColor={Color.BLUE}
          borderBottom={"1px solid"}
        />
      </Box>

      {/* Team section */}
      <Box bg={Color.BEIGE} py={10} id="team">
        <Heading
          fontWeight={"thin"}
          as={"h2"}
          fontFamily={"Minion Pro"}
          fontSize={{ md: "5xl", base: "3xl" }}
          ml={"8%"}
          pt={"1rem"}
          mb={"-1rem"}
          color={Color.KAKI}

        >
          Notre équipe
        </Heading>
      </Box>

      <Box bg={Color.BEIGE} pb="4rem" px={{ base: 5, md: 10 }}>
        <Flex wrap="wrap" justify="center" gap={6} pt={"1rem"}>
          {isMobile ? (
            <Box {...handlers} position="relative" w="270px" h="420px">
              {teamEntries.map(
                (entry, index) =>
                  currentIndex === index && (
                    <Box
                      key={entry.fields.name}
                      position="absolute"
                      w="270px"
                      h="420px"
                      boxShadow="md"
                      overflow="hidden"
                      onClick={() => toggleQuoteVisibility(index)}
                      cursor="pointer"
                    >
                      <Image
                        src={entry.fields.image.fields.file.url}
                        alt={entry.fields.name}
                        objectFit="cover"
                        w="100%"
                        style={{ aspectRatio: "1 / 1" }}
                      />

                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        height="300px"
                        bg="rgba(0, 0, 0, 0.7)"
                        color="white"
                        opacity={visibleQuote[index] ? "1" : "0"}
                        transition="opacity 0.3s ease-in-out"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                      >
                        <Text
                          fontSize="lg"
                          color={Color.BEIGE}
                          width={"80%"}
                          fontWeight="bold"
                          fontFamily="Minion Pro"
                        >
                          {entry.fields.quote}
                        </Text>
                      </Box>

                      <Box
                        position="absolute"
                        bottom="0"
                        w="100%"
                        h="150px"
                        bg={Color.BEIGE}
                        p="4"
                        boxShadow="lg"
                      >
                        <Stack spacing={2} textAlign={"center"}>
                          <Text
                            fontWeight="bold"
                            fontSize="xl"
                            color={Color.KAKI}
                            fontFamily="Minion Pro"
                          >
                            {entry.fields.name}
                          </Text>
                          <Text
                            fontSize="lg"
                            fontFamily="Minion Pro"
                            color={Color.KAKI}
                          >
                            {entry.fields.role}
                          </Text>
                          <Text
                            fontSize="m"
                            color={Color.KAKI}
                            fontFamily="Minion Pro"
                          >
                            {entry.fields.birthplace}
                          </Text>
                        </Stack>
                      </Box>
                    </Box>
                  )
              )}

              {/* Mobile Navigation Arrows */}
              <IconButton
                position="absolute"
                top="50%"
                left="-3rem"
                transform="translateY(-50%)"
                aria-label="Previous Slide"
                icon={<ArrowBackIcon />}
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) =>
                      (prevIndex - 1 + teamEntries.length) % teamEntries.length
                  )
                }
                backgroundColor="transparent"
                color={Color.KAKI}
                borderRadius="full"
                _hover={{ backgroundColor: Color.BEIGE, color: Color.KAKI }}
              />

              <IconButton
                position="absolute"
                top="50%"
                right="-3rem"
                transform="translateY(-50%)"
                aria-label="Next Slide"
                icon={<ArrowForwardIcon />}
                onClick={() =>
                  setCurrentIndex(
                    (prevIndex) => (prevIndex + 1) % teamEntries.length
                  )
                }
                backgroundColor="transparent"
                color={Color.KAKI}
                borderRadius="full"
                _hover={{ backgroundColor: Color.BEIGE, color: Color.KAKI }}
              />
            </Box>
          ) : (
            teamEntries.map((entry) => (
              <Box
                key={entry.fields.name}
                position="relative"
                w="270px"
                h="420px"
                boxShadow="md"
                cursor="default"
                overflow="hidden"
              >
                <Image
                  src={entry.fields.image.fields.file.url}
                  alt={entry.fields.name}
                  objectFit="cover"
                  w="100%"
                  style={{ aspectRatio: "1 / 1" }}
                />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  height="300px"
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  opacity="0"
                  transition="opacity 0.3s ease-in-out"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  _hover={{ opacity: "0.9", bg: Color.KAKI }}
                >
                  <Text
                    fontSize="lg"
                    color={Color.BEIGE}
                    width={"80%"}
                    fontWeight="bold"
                    fontFamily="Minion Pro"
                  >
                    {entry.fields.quote}
                  </Text>
                </Box>

                <Box
                  position="absolute"
                  bottom="0"
                  w="100%"
                  h="150px"
                  bg={Color.BEIGE}
                  p="4"
                  boxShadow="lg"
                >
                  <Stack spacing={2} textAlign={"center"}>
                    <Text
                      fontWeight="bold"
                      fontSize="xl"
                      color={Color.KAKI}
                      fontFamily="Minion Pro"
                    >
                      {entry.fields.name}
                    </Text>
                    <Text
                      fontSize="lg"
                      fontFamily="Minion Pro"
                      color={Color.KAKI}
                    >
                      {entry.fields.role}
                    </Text>
                    <Text
                      fontSize="m"
                      color={Color.KAKI}
                      fontFamily="Minion Pro"
                    >
                      {entry.fields.birthplace}
                    </Text>
                  </Stack>
                </Box>
              </Box>
            ))
          )}
        </Flex>

        <Flex justifyContent="center" mt={8}>
          <Button
            onClick={onOpen}
            padding="1.5rem"
            cursor="pointer"
            as="a"
            fontWeight="500"
            variant="outline"
            fontSize="1.2rem"
            borderColor={"borderColor"}
            color={"color"}
            mt={"marginTop"}
            mb={"marginBottom"}
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translateY(-0.09rem)",
            }}
          >
            Nous rejoindre
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent h="700px" maxH="90vh">
              <ModalCloseButton color={"white"} />
              <ModalBody p={0} h="100%">
                <iframe
                  src={"https://tally.so/r/3j9o2J"}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="External Content"
                ></iframe>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>

      {/* Strategic Committee */}
      <Box bg={Color.KAKI} color={Color.BEIGE} pt={"2rem"} pb={"4rem"}>
        <Heading
        fontWeight={"thin"}
          as={"h2"}
          fontFamily={"Minion Pro"}
          fontSize={{ md: "5xl", base: "3xl" }}
          ml={"8%"}
          pt={"1rem"}
        >
          Notre comité d&apos;impact
        </Heading>
        <Text ml="8%" mb="2rem" fontSize={{ md: "3xl", base: "2xl" }}>
          6 personnalités aux profils complémentaires, qui nous inspirent et
          nous aident à grandir.
        </Text>
        <Slideshow slides={strategicCommittee} />
      </Box>
      <Box pt={"3rem"} backgroundColor={Color.BLUE}>
        {/* <Cover
          title={"Notre dada : l’ODD 17"}
          content={
            "L’objectif de développement durable (ODD) n°17 promeut l’importance des actions collectives comme leviers incontournables pour réduire les problématiques sociales et environnementales.\n\nCes partenariats doivent être inclusifs, construits sur des principes et des valeurs communes et placer au coeur des préoccupations les peuples et la planète. Ils permettent d’inventer les solutions de demain."
          }
          imageSrc={"/assets/odd.png"}
          bgColor={Color.BLUE}
          textColor={Color.KAKI}
          lineHeight={"100%"}
          marginTop={"1rem"}
          buttonText={"Découvrir les ODD"}
          buttonLink={"/odd"}
          btnBackground={"transparent"}
          btnColor={Color.KAKI}
          borderColor={"none"}
          buttonBorderColor={Color.KAKI}
          BtnMarginTop={"2rem"}
          imageBoxSize={"60%"}
          imagePaddingTop={"2rem"}
          imageBorder={"1px solid"}
          titleFontSize={{ base: "3xl", md: "5xl" }}
          contentFontSize={{ base: "2xl", md: "3xl" }}
        /> */}
        <AltCover
        imageBorder="1px solid black"
        buttonLink={"/"}
        btnBorderColor=""
        borderColor={"none"}
        bgColor={Color.BLUE}
        textColor={Color.KAKI}
        mobileHeight={"30vh"}
        imageSrc={"/assets/odd2.png"}
        title={"Notre dada : l’ODD 17"}
        content={(
          <>
            Lobjectif de développement durable (ODD) n°17 promeut l’importance des actions collectives comme leviers incontournables pour réduire les problématiques sociales et environnementales.  <br /><br />
            Ces partenariats doivent être inclusifs, construits sur des principes et des valeurs communes et placer au coeur des préoccupations les peuples et la planète. Ils permettent d’inventer les solutions de demain.
            
          </>
        )}/>
          
      </Box>
      <Footer
        bgColor={Color.BLUE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={""}
        iconBgColor={""}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await client.getEntries();

  const logoEntries = await client.getEntries<ICarrousePartnersFields>({
    content_type: "carrousePartners",
  });

  const logos = logoEntries.items.map((entry) => ({
    name: entry.fields.name,
    imageUrl: entry.fields.image.fields.file.url,
  }));

  const teamEntriesResponse = await client.getEntries<ITeamFields>({
    content_type: "team",
    order: "sys.updatedAt",
  });
  const teamEntries: ITeam[] = teamEntriesResponse.items as ITeam[];

  return {
    props: {
      logos,
      teamEntries,
    },
    revalidate: 10,
  };
};

export default Adn;
