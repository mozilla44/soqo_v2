/* eslint-disable react/no-unescaped-entities */
import { Box, Link, Image, Text, Flex, Stack, color } from "@chakra-ui/react";
import Head from "next/head";
import Section from "components/Section";
import React from "react";
import Button from "components/Button";
import NavlessHeader from "components/NavlessHeader";
import { Widget } from "@typeform/embed-react";
import LightFooter from "components/LightFooter";
import Marker from "components/Marker";
import { Color } from "styles/theme";
import { Card, CardText, Emoji } from "components/Card";
import { KeyInfos } from "components/KeyInfos";

//TODO :page needs heavy refactoring. Only had 3 days to learn next.js and design + code the page .
//TODO::make components (or css/sass) instead of repeated style props.

const LivreBlanc = () => {
  return (
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
      <NavlessHeader />

      {/*call to action section*/}
      <Box
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
              Téléchargez notre première étude menée auprès de 150 associations
              françaises de toutes tailles et réparties sur l’ensemble du
              territoire.
            </Text>
            <Button
              alignSelf=""
              color={Color.BEIGE}
              fontSize="1.6rem"
              href="#book_fom"
              marginTop="3rem"
              hoverColor={Color.KAKI}
            >
              Télécharger le Livre Blanc
            </Button>
          </Box>
          <Box
            height={{ base: "30rem", sm: "35rem" }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            overflow="hidden"
          >
            <Image
              height="100%"
              width="100%"
              objectFit="cover"
              alt="Livre Blanc Soqo"
              src="/assets/livre.png"
              transform="rotate(-5deg)"
              marginRight={{ sm: "3rem" }}
              marginLeft={{ base: "2rem" }}
            ></Image>
          </Box>
        </Box>
      </Box>

      {/*About the book section*/}
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
              L&#39;étude qui explore les partenariats associations-entreprises
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
              alt="Livre Blanc Soqo"
              src="/assets/pile.png"
              transform="rotate(-5deg)"
              marginRight={{ sm: "3rem" }}
              marginLeft={{ base: "2rem" }}
              objectFit="cover"
            ></Image>
          </Box>
        </Box>
      </Box>

      {/*cards section*/}
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
          connaissances et des témoignages, nous souhaitons enrichir le dialogue
          et offrir des perspectives utiles à tous.
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

      {/*form_section (uses a typeform/mailchimp automation to recover inputs*/}
      <Section backgroundColor={Color.KAKI} id="book_fom">
        <Widget
          id="LDXgbLp7"
          style={{ width: "100%", height: "90vh", border: "none" }}
          className="my-form"
          hideFooter
          hideHeaders
          disableAutoFocus
          inlineOnMobile={false}
        />
      </Section>
      <LightFooter />
    </Box>
  );
};

export default LivreBlanc;
