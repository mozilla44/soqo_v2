/* eslint-disable react/no-unescaped-entities */
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import client from "core/client";
import { IRapport, IRapportFields } from "types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "components/Layout";
import Header from "components/Header";
import Footer from "components/Footer";
import { Color } from "styles/theme";

interface RapportDetailProps {
  rapport: IRapport;
}

const RapportDetail: React.FC<RapportDetailProps> = ({ rapport }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Box fontFamily="Minion Pro">Loading...</Box>;
  }

  const { titre, cover, article, soustitre } = rapport.fields;

  const markdownComponents = {
    p: ({ children }: { children: React.ReactNode }) => (
      <Text fontFamily="Minion Pro" fontSize={{ base: "md", md: "2xl" }} mb="4" whiteSpace="normal" wordBreak="break-word">
        {children}
      </Text>
    ),
    h1: ({ children }: { children: React.ReactNode }) => (
      <Text
        as="h1"
        fontFamily="Minion Pro"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        mb="4"
        whiteSpace="normal"
        wordBreak="break-word"
      >
        {children}
      </Text>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <Text
        as="h2"
        fontFamily="Minion Pro"
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight="bold"
        mb="3"
        mt="2rem"
        whiteSpace="normal"
        wordBreak="break-word"
      >
        {children}
      </Text>
    ),
    li: ({ children }: { children: React.ReactNode }) => (
      <Text
        as="li"
        fontFamily="Minion Pro"
        fontSize={{ base: "md", md: "2xl" }}
        ml="4"
        mb="1"
        listStyleType="disc"
        listStylePosition="outside"
        textAlign="left"
        whiteSpace="normal"
        wordBreak="break-word"
      >
        {children}
      </Text>
    ),
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
      <Text
        as="a"
        fontFamily="Minion Pro"
        href={href}
        color={Color.KAKI}
        textDecoration="underline"
        whiteSpace="normal"
        wordBreak="break-word"
      >
        {children}
      </Text>
    ),
    strong: ({ children }: { children: React.ReactNode }) => (
      <Text as="b" fontFamily="Minion Pro">{children}</Text>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <Text as="i" fontFamily="Minion Pro">{children}</Text>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <Text as="code" fontFamily="Minion Pro" px="1" py="0.5" borderRadius="md" fontSize="xl">
        {children}
      </Text>
    ),
  };

  return (
    <Layout>
      <Box fontFamily="Minion Pro">
        <Head>
          <title>{titre} - Soqo</title>
          <meta property="og:title" content={titre} />
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

        <Box
          borderTop={"1px solid"}
          p={{ base: 4, md: 10 }}
          as="section"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          backgroundColor={Color.BEIGE}
        >
          {/* Text Side */}
          <Box width={{ base: "100%", md: "55%" }} textAlign="left">
            <Text fontFamily="Minion Pro" fontSize="5xl" color={Color.KAKI}>
              {titre}
            </Text>

            <Box mt="2rem" fontSize="2xl">
              {documentToReactComponents(soustitre, {
                renderNode: {
                  paragraph: (node, children) => (
                    <Text fontFamily="Minion Pro">{children}</Text>
                  ),
                },
              })}
            </Box>

            <Box
              marginTop="2rem"
              width="100%"
              maxWidth="100%"
              whiteSpace="normal"
              wordBreak="break-word"
              overflowWrap="break-word"
              textAlign="left"
            >
              <ReactMarkdown components={markdownComponents}>{article}</ReactMarkdown>
            </Box>

            <Flex 
              mt="2rem" 
              gap="2rem" 
              flexDirection={{ base: "column", md: "row" }} // Ensures buttons stack on mobile
            >
              <Button
                cursor="pointer"
                _hover={{
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                  transform: "translateY(-0.09rem)",
                }}
                fontFamily="Minion Pro"
                fontSize={{ base: "md", md: "1.6rem" }}
                color={Color.BEIGE}
                backgroundColor={Color.KAKI}
                fontWeight="500"
                padding={{ base: "1rem", md: "1.5rem" }}
              >
                Télécharger le document
              </Button>

              <Button
                cursor="pointer"
                _hover={{
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                  transform: "translateY(-0.09rem)",
                }}
                fontFamily="Minion Pro"
                fontSize={{ base: "md", md: "1.6rem" }}
                color={Color.BEIGE}
                backgroundColor={Color.KAKI}
                fontWeight="500"
                padding={{ base: "1rem", md: "1.5rem" }}
              >
                Télécharger le résumé en une page 
              </Button>
            </Flex>
          </Box>

          {/* Image Side */}
          <Box
            width={{ base: "100%", md: "40%" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={{ base: 8, md: 0 }}
          >
            {cover && (
              <Image
                src={cover.fields.file.url}
                alt={titre}
                height={{ base: "auto", md: "30rem" }}
                maxWidth="100%"
                objectFit="cover"
                transform="rotate(-5deg)"
              />
            )}
          </Box>
        </Box>

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

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries<IRapportFields>({
    content_type: "rapport",
  });

  const rapports = entries.items as IRapport[];
  const paths = rapports.map((rapport) => ({
    params: { slug: rapport.fields.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<RapportDetailProps> = async (context) => {
  const { slug } = context.params as { slug: string };

  const entries = await client.getEntries<IRapportFields>({
    content_type: "rapport",
    "fields.slug": slug,
    limit: 1,
  });

  const rapport = entries.items[0] as IRapport | undefined;

  if (!rapport) return { notFound: true };

  return { props: { rapport }, revalidate: 10 };
};

export default RapportDetail;
