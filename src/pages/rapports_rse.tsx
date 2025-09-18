import Layout from "components/Layout";
import client from "core/client";
import { IRapport, IRapportFields } from "types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Color } from "styles/theme";
import Footer from "components/Footer";
import Header from "components/Header";

interface RapportProps {
  rapportEntries: IRapport[];
}

const Rapport: React.FC<RapportProps> = ({ rapportEntries }) => {
  const [latestPost, ...otherPosts] = rapportEntries;

  return (
    <Layout>
      <Header
        headerBgColor={Color.BEIGE}
        linkColor={Color.KAKI}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/logo.png"}
      />
      <Box
        padding="10"
        backgroundColor={Color.BEIGE}
        fontFamily={"Minion Pro"}
        borderTop={"1px solid"}
        color={Color.KAKI}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6" px={{ md: "20" }} mt={8}>
          {rapportEntries.map((entry) => (
            <Link key={entry.sys.id} href={`/rapports_rse/${entry.fields.slug}`} _hover={{ textDecoration: 'none' }}>
              <Box
                padding="4"
                backgroundColor="beige.500"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.01)" }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={entry.fields.cover.fields.file.url}
                    alt={entry.fields.titre}
                    objectFit="cover"
                  />
                </AspectRatio>
                <Text fontSize={{ base: "md", md: "xl" }} pt={4}>
                  {new Date(entry.sys.createdAt).toLocaleDateString("fr-FR")}
                </Text>
                <Text
                  pt={2}
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  marginTop="2"
                  lineHeight="110%"
                >
                  {entry.fields.titre}
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} noOfLines={2} mt={2}>
                  {documentToReactComponents(entry.fields.soustitre)}
                </Text>
                <Box mt="auto">
                  <Text fontSize="xl" textDecoration="underline">
                    Lire la suite
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
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

export const getStaticProps: GetStaticProps = async () => {
  const rapportEntriesResponse = await client.getEntries<IRapportFields>({
    content_type: "rapport",
    order: "-sys.updatedAt",
  });
  const rapportEntries: IRapport[] = rapportEntriesResponse.items as IRapport[];

  return {
    props: {
      rapportEntries,
    },
    revalidate: 10,
  };
};

export default Rapport;
