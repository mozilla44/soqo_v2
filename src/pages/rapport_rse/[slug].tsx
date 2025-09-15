/* eslint-disable react/no-unescaped-entities */
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { SimpleGrid } from "@chakra-ui/react";
import client from "core/client";
import { IRapport, IRapportFields } from "types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import EmptyButton from "components/EmptyButton";
import ReactMarkdown from "react-markdown";
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
interface RapportDetailProps {
  rapport: IRapport;
}

const RapportDetail: React.FC<RapportDetailProps> = ({ rapport }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Box>Loading...</Box>;
  }

  const { titre, cover, article, soustitre } = rapport.fields;

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
          headerBgColor={Color.BEIGE}
          linkColor={Color.KAKI}
          mobileLinkColor={Color.KAKI}
          logosrc={"/assets/logo.png"}
        />

        {/* Call to action section */}
        <Box
          borderTop={"1px solid"}
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
          >
            <Box
              width={{ base: "100%", md: "55%" }}
              paddingTop={{ sm: "3%" }}
              marginLeft={{ sm: "4rem" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Text fontSize="5xl" color={Color.KAKI}>
                {titre}
              </Text>
              <Text
                fontSize="3xl"
                color={Color.KAKI}
                marginTop="2rem"
                fontWeight="bold"
              >
                {documentToReactComponents(soustitre)}
              </Text>
              <Box
                gap="1rem"
                marginTop="1rem"
                width={{ base: "100%", sm: "", md: "26rem" }}
                display="flex"
                flexDirection={{ base: "column", sm: "row" }}
                justifyContent="space-between"
              ></Box>

              <Box marginBottom="8">
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <Box
                        as="h1"
                        fontSize={{ base: "4xl", md: "5xl" }}
                        fontWeight="bold"
                        mb="4"
                        textAlign="left"
                        lineHeight={"110%"}
                        fontFamily={"Minion Pro"}
                      >
                        {children}
                      </Box>
                    ),
                    h2: ({ children }) => (
                      <Box
                        as="h2"
                        fontSize={{ base: "xl", md: "3xl" }}
                        fontWeight="bold"
                        mb="3"
                        mt={"2rem"}
                        textAlign="left"
                        lineHeight={"110%"}
                        fontFamily={"Minion Pro"}

                      >
                        {children}
                      </Box>
                    ),
                    p: ({ children }) => (
                      <Box
                        lineHeight={"110%"}
                        as="p"
                        fontSize={{ base: "md", md: "2xl" }}
                        mb="4"
                        textAlign="left"
                        fontFamily={"Minion Pro"}

                      >
                        {children}
                      </Box>
                    ),
                    li: ({ children }) => (
                      <Box
                        fontSize={{ base: "md", md: "2xl" }}
                        as="li"
                        ml="4"
                        mb="1"
                        listStyleType="disc"
                        textAlign="left"
                        fontFamily={"Minion Pro"}

                      >
                        {children}
                      </Box>
                    ),
                    ul: ({ children }) => (
                      <Box as="ul" mb="4" textAlign="left">
                        {children}
                      </Box>
                    ),
                    ol: ({ children }) => (
                      <Box as="ol" mb="4" textAlign="left">
                        {children}
                      </Box>
                    ),
                    a: ({ href, children }) => (
                      <Box
                        as="a"
                        href={href}
                        color={Color.KAKI}
                        textDecoration="underline"
                        _hover={{ color: "blue.700" }}
                      >
                        {children}
                      </Box>
                    ),
                  }}
                >
                  {article}
                </ReactMarkdown>
              </Box>
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
                /*  onClick={() => handleOpenModal("https://tally.so/r/3j9yQx")} */ // Replace with your external link
              >
                Télécharger le document
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

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries<IRapportFields>({
    content_type: "rapport",
  });

  const rapports = entries.items as IRapport[];
  const paths = rapports.map((rapport) => ({
    params: { slug: rapport.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RapportDetailProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };

  const entries = await client.getEntries<IRapportFields>({
    content_type: "rapport",
    "fields.slug": slug,
    limit: 1,
  });

  const rapport = entries.items[0] as IRapport | undefined;

  if (!rapport) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rapport,
    },
    revalidate: 10,
  };
};

export default RapportDetail;
