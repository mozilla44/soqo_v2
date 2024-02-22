/* eslint-disable react/no-unescaped-entities */
import { Box, Link, Image, Text, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Section from "components/Section";
import React from "react";
import Button from "components/Button";
import NavlessHeader from "components/NavlessHeader";
import { Widget } from "@typeform/embed-react";
import LightFooter from "components/LightFooter";

// not using <Layout> because it contains the banner advertising the book. We don't want it on that page.

const LivreBlanc = () => {
  return (
    <Box overflow="hidden">
      <Head>
        <title>Livre Blanc - Soqo</title>
      </Head>
      <NavlessHeader />

      {/*section 1*/}
      <Box
        p={{ base: 0, md: 10 }}
        as="section"
        /* border="3px solid yellow" */
        display="flex"
        flexDirection="column-reverse"
        justifyContent="center"
        backgroundColor="#173A2C"
      >
        <Box
           /* border="3px solid orange"  */
          px={{ base: 4, md: 10 }}
          py={{ base: 10, md: 10 }}
          /* maxWidth="container.xl"  */
          /* maxWidth="80%"  */
          marginX="auto"
          width="100%"
          height="100%"
          display="flex"
          /* gap="3rem" */
         
           justifyContent="space-between" 
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            /* border="3px solid pink"   */    width={{ base: "100%", md: "55%" }}
            paddingTop={{sm:"3%"}} marginLeft={{sm:"4rem"}} textAlign={{base:"center", sm:"left"}}
          >
            <Text fontSize="5xl" color="#EFE6D4" >
              Livre Blanc Soqo* 2024
            </Text>
            <Text fontSize="3xl" color="#EFE6D4" marginTop="2rem" fontWeight="bold"  >
              L’étude qui explore les partenariats associations-entreprises
            </Text>
            <Text fontSize="2xl" color="#EFE6D4" marginTop="2rem" /* width={{sm:"70%"}} */>
              Téléchargez notre première étude menée auprès de 150 associations
              françaises de toutes tailles et réparties sur l’ensemble du
              territoire.
            </Text>
            <Button
            alignSelf=""
              color="#EFE6D4"
              fontSize="1.6rem"
              href="#book_fom"
              marginTop="3rem"
              hoverColor="#173A2C"
            >
              Télécharger le Livre Blanc
            </Button>
          </Box>
          <Box /* border="3px solid blue"  */ height={{base:"30rem",sm:"35rem"}} display="flex" alignItems="center"
          justifyContent="space-between" >
            <Image
            
             /* border="3px solid green"   */
            height="100%"
            minWidth="100%"
                alt="Livre Blanc Soqo"
               /* border="3px solid hotpink"   */
                src="/assets/livre.png"
                transform="rotate(-5deg)"
                marginRight={{sm:"3rem"}}
                marginLeft={{base:"2rem"}}
            ></Image></Box>
            
        </Box>
      </Box>

      {/*section 2*/}
      
      <Box
        p={{ base: 0, md: 10 }}
        as="section"
        /* border="3px solid yellow" */
        display="flex"
        flexDirection="column-reverse"
        justifyContent="center"
        backgroundColor="#EFE6D4"
      >
        <Box
         /*  border="3px solid orange"   */
          px={{ base: 4, md: 10 }}
          py={{ base: 10, md: 10 }}
          /* maxWidth="container.xl"  */
          /* maxWidth="80%"  */
          marginX="auto"
          width="100%"
          height="100%"
          display="flex"
          gap="3rem"
          /* justifyContent="space-between" */
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
             /* border="3px solid blue     width={{ base: "100%", md: "50%" }} */ /* border="3px solid purple" */
            paddingTop={{sm:"1%"}} marginLeft={{sm:"2"}} textAlign={{base:"center", sm:"left"}}
          >
            <Text fontSize="5xl" color="#173A2C" /* border="3px solid yellow" */>
              L’étude qui explore les partenariats associations-entreprises
            </Text>
            <Box textAlign="left" marginTop="1rem"><Text  fontSize={{base:"2xl", sm:"3xl"}} color="#173A2C">&#127919; 28 pages d'analyses</Text><Text color="#173A2C" fontSize="2xl" marginLeft="2.6rem">complètes et accessibles pour comprendre les enjeux des relations associations-entreprises</Text></Box>
            <Box  textAlign="left" marginTop="1rem"><Text fontSize={{base:"2xl", sm:"3xl"}} color="#173A2C">&#127919; Les chiffres clés</Text><Text color="#173A2C" fontSize="2xl" marginLeft="2.6rem">sur les grandes tendances du monde associatif en France</Text></Box>
            <Box textAlign="left" marginTop="1rem" ><Text fontSize={{base:"2xl", sm:"3xl"}} color="#173A2C"> &#127919;150 associations répondantes</Text><Text color="#173A2C" fontSize="2xl" marginLeft="2.6rem">de toutes tailles et réparties sur l’ensemble du territoire</Text></Box>
            <Box  textAlign="left" marginTop="1rem"><Text fontSize={{base:"2xl", sm:"3xl"}} color="#173A2C">&#127919; Les éléments essentiels</Text><Text color="#173A2C" fontSize="2xl" marginLeft="2.6rem">pour des alliances réussies entre associations et entreprises </Text></Box>
          </Box>
          <Box  /* border="3px solid blue"  */  height={{base:"25rem",sm:"35rem"}} display="flex" alignItems="center"
          justifyContent="center">
            <Image
            
            /* border="3px solid green"  */
            height="100%"
            minWidth="100%"
                alt="Livre Blanc Soqo"
               /* border="3px solid hotpink"   */
                src="/assets/pile.png"
                transform="rotate(-5deg)"
                marginRight={{sm:"3rem"}}
                marginLeft={{base:"2rem"}}
                objectFit="cover"
            ></Image></Box>
            
        </Box>
      </Box>
      {/*form_section*/}
      <Section backgroundColor="#173A2C" id="book_fom">
<Widget id="LDXgbLp7" style={{ width: '100%',height:"90vh",border:"none",}} className="my-form" 
          hideFooter
          hideHeaders
          disableAutoFocus />
</Section>
<LightFooter/>

    </Box>
  );
};

export default LivreBlanc;
