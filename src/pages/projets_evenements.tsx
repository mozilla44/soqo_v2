import React from "react";
import { Box, Grid, Text, Heading, Image, Link } from "@chakra-ui/react";
import Header from "components/Header";
import client from "core/client";
import { Color } from "styles/theme";
import { IProjetEvent, IProjetEventFields } from "types/generated/contentful";
import Layout from "components/Layout";
import Footer from "components/Footer";
import ReactMarkdown from "react-markdown";
import AltCover from "components/AltCover_bak";
import Cover from "components/Cover";

interface ImpactProjectsProps {
  eventEntries: IProjetEvent[];
}

const EventsProjects: React.FC<ImpactProjectsProps> = ({ eventEntries }) => {
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

   {/*    <AltCover
        title={"Les entreprises\ns’engagent avec Soqo*"}
        content={"Découvrez les derniers\nprojets menés et leur impact."}
        buttonText="Prendre rendez-vous avec Najma"
        buttonLink="https://cal.com/najmasouroque"
        imageSrc={"/assets/orange_shirt.png"}
        btnColor={Color.KAKI}
        btnBackground={Color.BEIGE}
        bgColor={Color.KAKI}
        textColor={Color.BEIGE}
        borderColor={Color.BEIGE}
        buttonBorderColor={Color.KAKI}
        lineHeight={"100%"}
        marginTop="1rem"
        BtnMarginTop="4rem"
        imageBoxSize=""
        imagePaddingTop=""
        imageBorder=""
      /> */}
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
         Découvrez les derniers événements <br />que nous avons accompagné et leur impact.
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
            {/* Title and Tags with fixed height */}
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
            </Box>

            {/* Square Image Container */}
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

            {/* Render long text as HTML */}
            <Box fontFamily={"Minion Pro"} mb={4} pl={3} color={Color.BEIGE}>
              <Text fontSize={"1.25rem"} mt={4}>
                <ReactMarkdown>{entry.fields.description}</ReactMarkdown>
              </Text>
            </Box>

            {/* Download link */}
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
    order: "-sys.updatedAt",
  });
  const eventEntries: IProjetEvent[] =
    eventEntriesResponse.items as IProjetEvent[];

  return {
    props: {
      eventEntries,
    },
    revalidate: 10,
  };
};

export default EventsProjects;
