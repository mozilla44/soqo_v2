import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Cover from "components/Cover";
import Expertise from "components/Expertise";
import Domains from "components/Expertise";
import Footer from "components/Footer";
import Header from "components/Header";
import GreenPictures from "components/greenPictures";
import Layout from "components/Layout";
import LogosSlideshow from "components/LogosSlideshow";
import Marker from "components/Marker";
import client from "core/client";
import Head from "next/head";
import { Color } from "styles/theme";
import { ICarrouselEventsFields } from "types/generated/contentful";
import Header2 from "components/AltHeader";
import AltCover from "components/AltCover_bak";

interface EventsProps {
  logos: { name: string; imageUrl: string }[];
}

const Events: React.FC<EventsProps> = ({ logos }) => {
  const newsletterProps = {
    inputBorderColor: "red",
    inputColor: "black",
    btnBgColor: "blue",
    btnBorderColor: "red",
    placeholderColor: "#EFE6D4",
  };
  return (
    <Layout>
      <Head>
        <title>Events</title>
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
        desktopChevronColor={Color.BEIGE}
      />

      <Flex
        position="relative"
        flexDirection="column"
        fontFamily={"Minion Pro"}
      >
        {/* <AltCover
          title={
            <>
              Optez pour des <br />
              événements <br />
              <Marker color={Color.BLUE} textColor={Color.KAKI}>
                durables
              </Marker>
            </>
          }
          content={`Nous vous accompagnons pour réduire l'impact environnemental de vos projets.`}
          imageSrc={"/assets/orange_shirt.png"}
          bgColor={Color.KAKI}
          textColor={Color.BEIGE}
          borderColor={Color.BEIGE}
          lineHeight={"110%"}
          marginTop={"1rem"}
          BtnMarginTop={"2rem"}
          buttonText={"Prendre rendez-vous avec Najma"}
          buttonLink={"https://cal.com/najmasouroque"}
          btnColor={Color.KAKI}
          btnBackground={Color.BEIGE}
        /> */}
        <Cover
          btnText={"Prendre rendez-vous avec Najma"}
          buttonLink={"https://cal.com/najmasouroque"}
          btnTextColor={Color.KAKI}
          btnBgColor={Color.BEIGE}
          btnMarginTop={"2rem"}
          borderColor={Color.BEIGE}
          bgColor={Color.KAKI}
          textColor={Color.BEIGE}
          mobileHeight={"30vh"}
          btnBorderColor={Color.KAKI}
          imageSrc={"/assets/poubelles.jpg"}
          title={
            <>
              Optez pour des <br />
              événements <br />
              <Marker color={Color.BLUE} textColor={Color.KAKI}>
                durables
              </Marker>
            </>
          }
          content={`Nous vous accompagnons pour réduire l'impact environnemental de vos projets.`}
        />

        <Expertise
          title={"Nos services"}
          textItems={[
            "Analyse du cycle de vie de l'événement",
            "Circularité des matériaux",
            "Mesure d'impact carbone",
            "Régie RSE",
            "Liens avec les associations locales",
            "Sensibilisation et formation",
            "Certification de l'événement",
          ]}
          logosrc={"/assets/star_white.png"}
          bgColor={Color.KAKI}
          color={Color.BEIGE}
          bordercolor={Color.BEIGE}
          textcolor={Color.BEIGE}
        />
        <LogosSlideshow
          items={logos}
          paddingTop={"2rem"}
          paddingBottom={"2rem"}
          bgColor={Color.KAKI}
          borderBottom={`1px solid ${Color.BEIGE}`}
        />
        <Box bg={Color.KAKI} pb={"2rem"}>
        <GreenPictures
          pic1={"/assets/pic1.png"}
          pic2={"/assets/pic2.png"}
          pic3={"/assets/pic3.png"}
          btnText={"Découvrir nos projets"}
          btnLink={"/"}
        />
        </Box>
        
      </Flex>
      <Footer
        bgColor={Color.KAKI}
        textColor={Color.BEIGE}
        imageSrc={"/assets/tampon_creme.png"}
        dividerColor={Color.BEIGE}
        iconColor={""}
        iconBgColor={""}
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const entries = await client.getEntries();

  const logoEntries = await client.getEntries<ICarrouselEventsFields>({
    content_type: "carrouselEvents",
  });

  const logos = logoEntries.items.map((entry) => ({
    name: entry.fields.name,
    imageUrl: entry.fields.image.fields.file.url,
  }));

  return {
    props: {
      logos,
    },
    revalidate: 10,
  };
};

export default Events;
