/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Link,
  Image,
  Text,
  Flex,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import Section from "components/Section";
import React, { useState } from "react";
import { Widget } from "@typeform/embed-react";
import Marker from "components/Marker";
import { Color } from "styles/theme";
import { Card, CardText, Emoji } from "components/Card";
import { KeyInfos } from "components/KeyInfos";
import Header from "components/Header";
import Layout from "components/Layout";
import Footer from "components/Footer";

const LivreBlanc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [iframeUrl, setIframeUrl] = useState("");

  const handleOpenModal = (url:string) => {
    setIframeUrl(url);
    onOpen();
  };

  return (
    <Layout>
      <Box>
        <Head>
          <title>Livre Blanc - Soqo</title>
          <meta property="og:title" content="Découvrez notre Livre Blanc !" />
          <meta
            property="og:description"
            content="L’étude qui explore les partenariats associations-entreprises."
          />
          <meta
            property="og:image"
            content="http://bonjour-soqo.com/thumb_og.png"
          />
        </Head>
        <Header
          headerBgColor={Color.KAKI}
          linkColor={Color.BEIGE}
          mobileLinkColor={Color.KAKI}
          buttonTextColor={Color.KAKI}
          buttonBgColor={Color.BEIGE}
          hamburgerIconColor={Color.BEIGE}
          logosrc={"/assets/soqo__terre.png"}
          mobileChevronColor={Color.KAKI}
        />

        {/* Call to action section */}
        <Box
          borderTop={"1px solid #EFE6D4"}
          p={{ base: 0, md: 10 }}
          as="section"
          display="flex"
          flexDirection="column-reverse"
          justifyContent="center"
          backgroundColor={Color.KAKI}
        >
          <Box
            px={{ base: 4, md: 10 }}
            py={{ base: 10, md: 10 }}
            marginX="auto"
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              width={{ base: "100%", md: "55%" }}
              paddingTop={{ sm: "3%" }}
              marginLeft={{ sm: "4rem" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Text fontSize="5xl" color={Color.BEIGE}>
                Découvrez notre Livre Blanc !
              </Text>
              <Text
                fontSize="3xl"
                color={Color.BEIGE}
                marginTop="2rem"
                fontWeight="bold"
              >
                L’étude qui explore les partenariats associations-entreprises.
              </Text>
              <Box
                gap="1rem"
                marginTop="1rem"
                width={{ base: "100%", sm: "", md: "26rem" }}
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                justifyContent="space-between"
              >
                <KeyInfos>&#x1F913; 28 pages d’analyses</KeyInfos>
                <KeyInfos>&#x1F4CA; + 150 associations interrogées</KeyInfos>
              </Box>
              <Text fontSize="2xl" color={Color.BEIGE} marginTop="2rem">
                Téléchargez notre première étude menée auprès de 150
                associations françaises de toutes tailles et réparties sur
                l’ensemble du territoire.
              </Text>
              <Button
                cursor={"pointer"}
                _hover={{
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                  transform: "translateY(-0.09rem)",
                }}
                fontSize={{ base: "md", md: "1.6rem" }}
                color={Color.KAKI}
                backgroundColor={Color.BEIGE}
                fontFamily="Minion Pro"
                mt={"2rem"}
                fontWeight="500"
                padding={{ base: "1rem", md: "1.5rem" }}
                onClick={() => handleOpenModal("https://tally.so/r/3j9yQx")} // Replace with your external link
              >
                Télécharger le Livre Blanc
              </Button>
            </Box>
            <Box
              height={{ base: "30rem", sm: "35rem" }}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                height="100%"
                maxWidth="100%"
                maxHeight="100%"
                objectFit="cover"
                alt="Livre Blanc Soqo"
                src="/assets/livre.png"
                transform="rotate(-5deg)"
                marginRight={{ sm: "3rem" }}
                marginLeft={{ base: "2rem" }}
              />
            </Box>
          </Box>
        </Box>

        {/* Modal with iframe for external link */}
        <Modal isOpen={isOpen} onClose={onClose} size="6xl">
  <ModalOverlay />
  <ModalContent
    bg="transparent"
    boxShadow="none"
    border="none"
  >
    <ModalCloseButton color={Color.BEIGE}  mr={4}/>
    <ModalBody>
      {iframeUrl && (
        <Box height="70vh" border="1px solid #ccc">
          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Livre Blanc"
          ></iframe>
        </Box>
      )}
    </ModalBody>
    <ModalFooter>
      {/* Add any footer content here if needed */}
    </ModalFooter>
  </ModalContent>
</Modal>


        {/* About the book section */}
        <Box
          p={{ base: 0, md: 10 }}
          as="section"
          display="flex"
          flexDirection="column-reverse"
          justifyContent="center"
          backgroundColor={Color.BEIGE}
          padding={{ base: "0.5rem" }}
        >
          <Box
            px={{ base: 4, md: 10 }}
            py={{ base: 10, md: 10 }}
            marginX="auto"
            width="100%"
            height="100%"
            display="flex"
            gap="3rem"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box
              width={{ base: "100%", md: "50%" }}
              paddingTop={{ sm: "1%" }}
              marginLeft={{ sm: "2" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Text fontSize="5xl" color={Color.KAKI} lineHeight="3.5rem">
                L&#39;étude qui explore les partenariats
                associations-entreprises
              </Text>
              <Box textAlign="left" marginTop="1rem">
                <Text
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  color={Color.KAKI}
                  fontWeight="bold"
                >
                  &#127919; 28 pages d'analyses
                </Text>
                <Text
                  color={Color.KAKI}
                  fontSize={{ base: "xl", sm: "2xl" }}
                  marginLeft="2.3rem"
                >
                  complètes et accessibles pour comprendre les enjeux des
                  relations associations-entreprises
                </Text>
              </Box>
              <Box textAlign="left" marginTop="1rem">
                <Text
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  color={Color.KAKI}
                  fontWeight="bold"
                >
                  &#127919; Les chiffres clés
                </Text>
                <Text
                  color={Color.KAKI}
                  fontSize={{ base: "xl", sm: "2xl" }}
                  marginLeft="2.3rem"
                >
                  sur les grandes tendances du monde associatif en France
                </Text>
              </Box>
              <Box textAlign="left" marginTop="1rem">
                <Text
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  color={Color.KAKI}
                  fontWeight="bold"
                >
                  {" "}
                  &#127919; 150 associations répondantes
                </Text>
                <Text
                  color={Color.KAKI}
                  fontSize={{ base: "xl", sm: "2xl" }}
                  marginLeft="2.3rem"
                >
                  de toutes tailles et réparties sur l’ensemble du territoire
                </Text>
              </Box>
              <Box textAlign="left" marginTop="1rem">
                <Text
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  color={Color.KAKI}
                  fontWeight="bold"
                >
                  &#127919; Les éléments essentiels
                </Text>
                <Text
                  color={Color.KAKI}
                  fontSize={{ base: "xl", sm: "2xl" }}
                  marginLeft="2.3rem"
                >
                  pour des alliances réussies entre associations et entreprises{" "}
                </Text>
              </Box>
            </Box>
            <Box
              height={{ base: "25rem", sm: "35rem" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image
                height="100%"
                minWidth="100%"
                alt="Un apercu du livre blanc soqo"
                src="/assets/pile.png"
                transform="rotate(-5deg)"
                marginRight={{ sm: "3rem" }}
                marginLeft={{ base: "2rem" }}
                objectFit="cover"
              ></Image>
            </Box>
          </Box>
        </Box>

        {/* Cards section */}
        <Box
          p={{ base: 0, md: 10 }}
          as="section"
          display="flex"
          flexDirection="column"
          backgroundColor={Color.BLUE}
          color={Color.KAKI}
          minHeight={{ sm: "80vh" }}
          justifyContent="center"
        >
          <Text
            fontSize={{ base: "4xl", sm: "5xl" }}
            textAlign="center"
            color={Color.KAKI}
          >
            Renforcer les relations entre{" "}
            <Marker isBold color={Color.YELLOW}>
              associations
            </Marker>{" "}
            et{" "}
            <Marker isBold color={Color.YELLOW}>
              entreprises
            </Marker>{" "}
            pour un avenir plus solidaire !
          </Text>
          <Text
            marginTop="1.5rem"
            fontSize={{ base: "1.5rem", sm: "1.7rem" }}
            w={{ sm: "85%" }}
            textAlign="center"
            alignSelf="center"
            width={{ base: "90%", sm: "80%" }}
          >
            En liant nos résultats aux recherches les plus actuelles sur le
            mécénat d’entreprise et le secteur associatif, en partageant des
            connaissances et des témoignages, nous souhaitons enrichir le
            dialogue et offrir des perspectives utiles à tous.
          </Text>
          <Text
            marginTop="1.5rem"
            fontSize={{ base: "1.5rem", sm: "1.7rem" }}
            w={{ sm: "85%" }}
            textAlign="center"
            alignSelf="center"
            width={{ base: "90%", sm: "80%" }}
          >
            Notre Livre Blanc se découpe en{" "}
            <Marker isBold color={Color.YELLOW}>
              4 grandes parties :
            </Marker>
          </Text>

          <Stack
            width={{ sm: "80%" }}
            alignSelf={{ sm: "center" }}
            alignItems={{ base: "center" }}
            justifyContent={{ sm: "space-between" }}
            direction={{ base: "column", sm: "row" }}
            p={{ base: "0.5rem" }}
            marginTop="4rem"
            marginBottom="4rem"
          >
            <Card>
              <Emoji>1️⃣</Emoji>
              <CardText>
                Éclairage sur le monde associatif : dynamisme, défis et enjeux
                <br />
                financiers.
              </CardText>
            </Card>
            <Card>
              <Emoji>2️⃣</Emoji>
              <CardText>
                L’engagement croissant des entreprises auprès des associations :
                bénéfices et opportunités.
              </CardText>
            </Card>
            <Card>
              <Emoji>3️⃣</Emoji>
              <CardText>
                Bâtir des partenariats durables avec les entreprises : un
                challenge pour toutes les associations.
              </CardText>
            </Card>
            <Card>
              <Emoji>4️⃣</Emoji>
              <CardText>
                Quel futur pour les <br />
                relations associations - entreprises ?<br />
              </CardText>
            </Card>
          </Stack>
        </Box>
        <Flex
          pb={10}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
          bgColor={Color.BLUE}
        >
          <Button
              border={"1px solid"}

            cursor={"pointer"}
            _hover={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
              transform: "translateY(-0.09rem)",
            }}
            fontSize={{ base: "md", md: "1.6rem" }}
            color={Color.KAKI}
            backgroundColor={Color.BEIGE}
            fontFamily="Minion Pro"
            fontWeight="500"
            padding={{ base: "1rem", md: "1.5rem" }}
            onClick={() => handleOpenModal("https://example.com")} // Replace with another external link if needed
          >
            Télécharger le Livre Blanc
          </Button>
        </Flex>

        {/* Footer */}
        <Footer
          bgColor={Color.KAKI}
          textColor={Color.BEIGE}
          imageSrc={"/assets/tampon_creme.png"}
          dividerColor={Color.BEIGE}
          iconColor={""}
          iconBgColor={""}
        />
      </Box>
    </Layout>
  );
};

export default LivreBlanc;
