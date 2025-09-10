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
  UnorderedList,
  ListItem,
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

  const handleOpenModal = (url: string) => {
    setIframeUrl(url);
    onOpen();
  };

  return (
    <Layout >
      <Box fontFamily="Minion Pro">
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
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />

        {/* Call to action section */}
        <Box 
          borderTop={'1px solid ' + Color.KAKI}
          p={{ base: 0, md: 10 }}
          as="section"
          display="flex"
          flexDirection="column-reverse"
          justifyContent="center"
          backgroundColor={Color.BEIGE}
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
              <Text fontSize="5xl" fontFamily="" color={Color.KAKI}>
                Rapport RSE 2024
              </Text>
              <Text
                fontSize="3xl"
                color={Color.KAKI}
                marginTop="2rem"
                fontWeight="bold"
              >
                Sous-titre
              </Text>
              
              <Text fontSize="xl" color={Color.KAKI} marginTop="2rem">
                Au Sommaire :
                <UnorderedList>
                  <ListItem>
                    Une rétrospective de l’année et les chiffres clés de notre
                    impact depuis notre création
                  </ListItem>
                  <ListItem>
                    L’histoire du Qlub, notre projet philanthropique qui a vu le
                    jour en 2024
                  </ListItem>
                  <ListItem>
                    Nos 9 enjeux RSE identifiés ainsi que notre plan d’action
                  </ListItem>
                  <ListItem>Notre premier bilan carbone</ListItem>
                  <ListItem>Notre vision pour l’année 2025</ListItem>
                </UnorderedList>
              </Text>
              <Button
                cursor={"pointer"}
                _hover={{
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                  transform: "translateY(-0.09rem)",
                }}
                fontSize={{ base: "md", md: "1.6rem" }}
                color={Color.BEIGE}
                backgroundColor={Color.KAKI}
                fontFamily="Minion Pro"
                mt={"2rem"}
                fontWeight="500"
                padding={{ base: "1rem", md: "1.5rem" }}
                onClick={() => handleOpenModal("https://tally.so/r/3j9yQx")} // Replace with your external link
              >
                Télécharger le rapport RSE 2024
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
          <ModalContent bg="transparent" boxShadow="none" border="none">
            <ModalCloseButton color={Color.BEIGE} mr={4} />
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

      
     

        {/* Footer */}
        <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={Color.KAKI}
        iconBgColor={Color.BEIGE}
      />
      </Box>
    </Layout>
  );
};

export default LivreBlanc;
