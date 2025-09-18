import React from "react";
import { Box, Grid, Text, Heading, Image, Link, Tag } from "@chakra-ui/react";
import Header from "components/Header";
import client from "core/client";
import { Color } from "styles/theme";
import { IProjetEvent, IProjetEventFields } from "types/generated/contentful";
import Layout from "components/Layout";
import Footer from "components/Footer";
import ReactMarkdown from "react-markdown";
import Cover from "components/Cover";

interface ImpactProjectsProps {
  eventEntries: IProjetEvent[];
  tags: { sys: { id: string }; name: string }[]; // Add the tags prop
}

const EventsProjects: React.FC<ImpactProjectsProps> = ({ eventEntries, tags }) => {
  // Helper function to get the tag name
  const getTagName = (tags: { sys: { id: string }; name: string }[], id: string) => {
    const tag = tags.find((tag) => tag.sys.id === id);
    return tag ? tag.name.toLocaleUpperCase() : id.toUpperCase(); // Fallback to id if name is not found
  };

  return (
    <Layout>
      <Header
        headerBgColor={Color.KAKI}
        linkColor={Color.BEIGE}
        mobileLinkColor={Color.KAKI}
        logosrc={"/assets/soqo__terre.png"}
        desktopChevronColor={Color.BEIGE}
        mobileChevronColor={Color.KAKI}
        buttonTextColor={Color.KAKI}
        buttonBgColor={Color.BEIGE}
        hamburgerIconColor={Color.BEIGE}
      />
      <Cover
        btnText={"Prendre rendez-vous avec Najma"}
        buttonLink={"https://cal.com/najmasouroque"}
        btnTextColor={Color.KAKI}
        btnBgColor={Color.BEIGE}
        btnMarginTop={"3rem"}
        borderColor={Color.BEIGE}
        bgColor={Color.KAKI}
        textColor={Color.BEIGE}
        mobileHeight={"30vh"}
        btnBorderColor=""
        imageSrc={"assets/poubelles.jpg"}
        title={"Les entreprises\ns'engagent avec Soqo*"}
        content={
          <>
            Découvrez les derniers événements <br />
            que nous avons accompagné et leur impact.
          </>
        }
      />

      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={8}
        pb={6}
        pt={20}
        pl="5%"
        pr="5%"
        bg={Color.KAKI}
      >
        {eventEntries.map((entry) => (
          <Box
            key={entry.sys.id}
            overflow="hidden"
            bg={Color.KAKI}
            display="flex"
            flexDirection="column"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2), 0 -4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)"
            padding={6}
            transition="transform 0.2s"
            _hover={{
              transform: "scale(1.01)",
              boxShadow:
                "0 8px 16px rgba(0, 0, 0, 0.3), 0 -8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Box mb={4} minHeight="100px">
              <Heading
                size="lg"
                mb={2}
                fontWeight={"thin"}
                fontFamily={"Minion Pro"}
                color={Color.BEIGE}
                noOfLines={2}
              >
                {entry.fields.name}
              </Heading>
              <Box>
                {entry.metadata.tags.map((tag) => (
                  <Tag
                    pt={"1"}
                    paddingX={2}
                    fontSize={"sm"}
                    fontFamily={"Minion Pro"}
                    key={tag.sys.id}
                    bg={Color.KAKI}
                    color={Color.BEIGE}
                    border={`1px solid ${Color.BEIGE}`}
                    mr={2}
                    mb={2}
                    borderRadius="full"
                  >
                    {getTagName(tags, tag.sys.id)}
                  </Tag>
                ))}
              </Box>
            </Box>

            <Box
              flexShrink={0}
              position="relative"
              width="100%"
              paddingBottom="100%"
              mb={4}
              mx="auto"
            >
              <Image
                src={entry.fields.image.fields.file.url}
                alt={entry.fields.name}
                objectFit="cover"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                borderRadius="none"
              />
            </Box>

            <Box fontFamily={"Minion Pro"} mb={4} pl={3} color={Color.BEIGE}>
              <Text fontSize={"1.25rem"} mt={4}>
                <ReactMarkdown>{entry.fields.description}</ReactMarkdown>
              </Text>
            </Box>

            <Link
              mt="auto"
              fontSize={"xl"}
              textDecoration={"underline"}
              href={"mailto:najma@soqo.fr?subject=Demande%20d'information"}
              target="_blank"
              rel="noopener noreferrer"
              color={Color.BEIGE}
              fontWeight="bold"
              _hover={{ textDecoration: "underline" }}
            >
              En savoir plus
            </Link>
          </Box>
        ))}
      </Grid>

      <Footer
        bgColor={Color.KAKI}
        textColor={Color.BEIGE}
        imageSrc={"/assets/tampon_creme.png"}
        dividerColor={Color.BEIGE}
        iconColor={Color.BEIGE}
        iconBgColor={Color.KAKI}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const eventEntriesResponse = await client.getEntries<IProjetEventFields>({
    content_type: "projetEvent",
    order: "sys.createdAt",
  });
  const eventEntries: IProjetEvent[] =
    eventEntriesResponse.items as IProjetEvent[];

  // Fetch all tags
  const tagsResponse = await client.getTags();
  const tags = tagsResponse.items;

  return {
    props: {
      eventEntries,
      tags,
    },
    revalidate: 10,
  };
};

export default EventsProjects;
