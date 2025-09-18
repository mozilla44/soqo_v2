import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Box, Text, Image, SimpleGrid, Flex } from "@chakra-ui/react";
import Layout from "components/Layout";
import client from "core/client";
import { IBlogPost, IBlogPostFields } from "types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Color } from "styles/theme";
import Header from "components/Header";
import Footer from "components/Footer";
import EmptyButton from "components/EmptyButton";
import reactMarkdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import { css } from "@chakra-ui/react";

interface BlogDetailProps {
  post: IBlogPost;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Box>Loading...</Box>;
  }

  const { titre, cover, article, image, image2, chapeau } = post.fields;

  return (
    <Layout>
      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />
      <Box
        pt={{ md: "8rem", base: "1rem" }}
        px={{ md: "8rem", base: "1rem" }}
        pb="0"
        backgroundColor={Color.BEIGE}
        borderTop={"1px solid"}
        color={Color.KAKI}
        fontFamily={"Minion Pro"}
        mb="0"
      >
        <Text
          as="h1"
          lineHeight={"110%"}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          marginBottom="2"
        >
          {titre}
        </Text>
        <Text fontSize="xl" color={Color.KAKI} marginBottom="4">
          {new Date(post.sys.updatedAt).toLocaleDateString("fr-FR")}
        </Text>
        <Text fontSize={{ base: "lg", md: "2xl" }}>
          {documentToReactComponents(chapeau)}
        </Text>

        {cover && (
          <Image
            mt={8}
            mb={8}
            src={cover.fields.file.url}
            alt={titre}
            width="100%"
            objectFit="cover"
            height={{ base: "auto", md: "30rem" }}
          />
        )}

        <Box marginBottom="8" >
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

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {image && (
            <Image
              src={image.fields.file.url}
              alt={titre}
              objectFit="cover"
              width="100%"
              height={{ base: "50vw", md: "30rem" }}
            />
          )}
          {image2 && (
            <Image
              src={image2.fields.file.url}
              alt={titre}
              objectFit="cover"
              width="100%"
              height={{ base: "50vw", md: "30rem" }}
            />
          )}
        </SimpleGrid>

        <Flex justifyContent="center" mt={{ base: "2rem", md: "4rem" }}>
          <EmptyButton
            href={"/blog"}
            color={Color.KAKI}
            borderColor={Color.KAKI}
            paddingX={"3rem"}
          >
            &nbsp;&nbsp;&nbsp;Tous les articles Soqo*&nbsp;&nbsp;&nbsp;
          </EmptyButton>
        </Flex>
      </Box>
      <Footer
        bgColor={Color.BEIGE}
        textColor={Color.KAKI}
        imageSrc={"/assets/tampon_vert.png"}
        dividerColor={Color.KAKI}
        iconColor={Color.KAKI}
        iconBgColor={Color.BEIGE}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries<IBlogPostFields>({
    content_type: "blogPost",
  });

  const posts = entries.items as IBlogPost[];
  const paths = posts.map((post) => ({
    params: { slug: post.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };
  const entries = await client.getEntries<IBlogPostFields>({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  const post = entries.items[0] as IBlogPost | undefined;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export default BlogDetail;
